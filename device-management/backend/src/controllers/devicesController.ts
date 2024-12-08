import { Request, Response } from 'express';
import db from '../db';

export const getDevices = async (req: Request, res: Response) => {
    try {
        const devices = await db('devices').select('*');
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch devices' });
    }
};

export const registerDevice = async (req: Request, res: Response) => {
    const { name, type } = req.body;
    if (!name || !type) {
        return res.status(400).json({ error: 'Name and type are required' });
    }

    try {
        const [id] = await db('devices').insert({ name, type }).returning('id');
        res.status(201).json({ message: `Device ${name} of type ${type} registered`, id });
    } catch (error) {
        console.error('Error inserting device:', error); // 追加: エラーログ
        res.status(500).json({ error: 'Failed to register device' });
    }
};

export const deleteDevice = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedRows = await db('devices').where('id', id).del();
        if (deletedRows) {
            res.status(200).json({ message: `Device with ID ${id} deleted` });
        } else {
            res.status(404).json({ error: 'Device not found' });
        }
    } catch (error) {
        console.error('Error deleting device:', error);
        res.status(500).json({ error: 'Failed to delete device' });
    }
};

