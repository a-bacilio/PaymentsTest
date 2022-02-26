import { NextFunction, Request, Response } from "express";
import { createNewPaymentService } from "../services/createNewPayment";
import { Payment } from "../entity/types/Payment";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

const createNewPaymentController = async (
  req: Request<{}, {}, Payment>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newPayment = await createNewPaymentService(req.body);
    res.status(200).json({ newPayment });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export default createNewPaymentController;
