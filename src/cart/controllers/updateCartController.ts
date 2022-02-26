import { Response, Request, NextFunction } from "express";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import updateCartService from "../services/updateCartService";
import ICart from "../types/cartInterface";

const updateCartController = async (
  req: Request<{ id: string }, {}, ICart>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newcart: ICart | null = await updateCartService(
      req.params.id,
      req.body
    );
    res.status(200).json(newcart);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export default updateCartController;
