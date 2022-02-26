import { Request, Response } from "express";
import { createNewPaymentService } from "../services/createNewPayment";
import { Payment } from "../entity/types/Payment";


const createNewPaymentController = async (
  req: Request<{}, {}, Payment>,
  res: Response
) => {
  try {
    const newCart = createNewPaymentService(req.body);
    res.status(200).json({ newCart });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default createNewPaymentController;