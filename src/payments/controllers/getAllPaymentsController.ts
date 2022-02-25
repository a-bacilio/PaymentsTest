import { Payment } from './../entity/types/Payment.d';
import { Response, Request } from "express";
import getAllPaymentsService from "../services/getAllPaymentsService";


const getAllPaymentsController = async (req: Request, res: Response) => {
  try {
    const carts: Payment[] = await getAllPaymentsService();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getAllPaymentsController;