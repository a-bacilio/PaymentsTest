import { Response, Request, NextFunction } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import getPaymentbyUserIdService from "../services/getPaymentByUserId";

const getPaymentByUserIdController = async (
  req: Request<{ user: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = await getPaymentbyUserIdService(req.params.user);
    res.status(200).json(cart);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export default getPaymentByUserIdController;
