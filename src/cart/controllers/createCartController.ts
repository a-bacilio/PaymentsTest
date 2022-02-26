import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import createCartService from "../services/createCartService";
import ICart from "../types/cartInterface";

const createCartController = async (
  req: Request<{}, {}, ICart>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCart = await createCartService(req.body);
    res.status(200).json({ newCart });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export default createCartController;
