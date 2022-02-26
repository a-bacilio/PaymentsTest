import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import deleteProductService from "../services/deleteProductService";

export const deleteProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await deleteProductService(req.params.id);
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
