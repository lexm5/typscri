import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import db from '../config/db';

//ユーザー登録
export const registerUser = async (req: Request, res: Response) => {
    const { email, password, role } = req.body;

    try {
        //パスワードを暗号化
        const hashPassword = await bcrypt.hash(password, 10);

        //DBに挿入
        await db('users').insert({
            email,
            password: hashPassword,
            role: role || 'user'
        });

        res.status(201).json({ message: 'User regiseterd successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};