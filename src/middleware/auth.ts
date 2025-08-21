import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';


export interface JwtPayload { id: string; email: string }


export function auth(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization;
    if (!header?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: Missing token' });
    }
    const token = header.split(' ')[1];
    try {
        const decoded = jwt.verify(token, ENV.JWT_SECRET) as JwtPayload;
        req.user = { id: decoded.id, email: decoded.email };
        next();
    } catch {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
}