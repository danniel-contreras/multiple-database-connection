import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const SECRET_KEY: Secret = 'your-secret-key-here';

export interface CustomRequest extends Request {
 token: string | JwtPayload;
}

/**
 * It takes a request, response, and next function as arguments, and then it tries to get the token
 * from the request header, and if it can't find it, it throws an error. If it can find it, it decodes
 * the token and adds it to the request object, and then it calls the next function
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - The response object that will be sent back to the client.
 * @param {NextFunction} next - NextFunction - This is a function that you call when you want to move
 * on to the next middleware.
 */
export const auth = async (req: Request, res: Response, next: NextFunction) => {
 try {
   const token = req.header('Authorization')?.replace('Bearer ', '');

   if (!token) {
     throw new Error();
   }

   const decoded = jwt.verify(token, SECRET_KEY);
   (req as CustomRequest).token = decoded;

   next();
 } catch (err) {
   res.status(401).send('Please authenticate');
 }
};