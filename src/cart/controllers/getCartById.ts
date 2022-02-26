import { Response, Request, NextFunction } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import getCartByIdService from "../services/getCartById";

const getCartByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await getCartByIdService(req.params.id);
    res.status(200).json(cart);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export default getCartByIdController;
