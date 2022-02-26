import { NextFunction, Request, Response } from 'express';
import { authCreateTokenService } from '../services/createTokenService';
import { createUserService } from '../../users/services/createUserService';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { ICreateUser } from '../types/manageUser';

export const authSignup = async (
  req: Request<{}, {}, ICreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await createUserService(req.body);
    const token = authCreateTokenService(newUser.id);
    res.status(200).json({ token });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
