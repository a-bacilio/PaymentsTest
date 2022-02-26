import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import createProductService from "../services/createProductService";

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = await createProductService(req.body);
    res.status(200).json({
      status: true,
      message: "Producto creado exitosamente",
      data: newProduct,
    });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
