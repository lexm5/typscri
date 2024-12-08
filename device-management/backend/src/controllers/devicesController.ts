import { Request, Response } from 'express';

export const getDevices = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Get all devices' });
};

export const registerDevice = (req: Request, res: Response) => {
    const { name, type } = req.body;
    res.status(201).json({ message: `Device ${name} of type ${type} registered` });
};
