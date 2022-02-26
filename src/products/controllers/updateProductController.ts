import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import updateProductService from "../services/updateProductService";

export const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await updateProductService(req.params.id, req.body);
    res.status(200).json({ product });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
