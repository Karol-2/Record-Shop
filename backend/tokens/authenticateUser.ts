import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RequestWithUser } from '../models/RequestWithUser.model';

export const authenticateUser = (req: RequestWithUser, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined => {
  const authHeader: string | undefined = req.header('Authorization');
  const token: string | undefined = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }
  
  try {
    const decoded: string | jwt.JwtPayload = jwt.verify(token,  process.env.TOKEN_SECRET!);
    if (typeof decoded === 'string') {
      req.user = { username: decoded };
    } else {
      req.user = decoded as { username: string };
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};
  