import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import getProductByIdService from "../services/getProductByIdService";

export const getProductByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await getProductByIdService(req.params.id);
    res.status(200).json(product);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
