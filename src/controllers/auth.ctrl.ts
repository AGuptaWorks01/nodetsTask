import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { ENV } from '../config/env';


export async function register(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password are required' });
    try {
        const exists = await User.findOne({ email });
        if (exists) return res.status(409).json({ error: 'email already registered' });

        await User.create({ email, password });

        // const user = await User.create({ email, password });
        // const token = jwt.sign({ id: user._id, email: user.email }, ENV.JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ message: "User registered successfully" });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}


export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password are required' });
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: 'invalid credentials' });


        const ok = await user.comparePassword(password);
        if (!ok) return res.status(401).json({ error: 'invalid credentials' });


        const token = jwt.sign({ id: user._id, email: user.email }, ENV.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
}