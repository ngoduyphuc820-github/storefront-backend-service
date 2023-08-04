import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const { TOKEN_SECRET } = process.env;

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader && authorizationHeader.split(' ')[1];
        if (!token) {
            return res.status(403).send('Access denied.');
        }
        jwt.verify(token, TOKEN_SECRET as string);
        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
};

export default verifyAuthToken;
