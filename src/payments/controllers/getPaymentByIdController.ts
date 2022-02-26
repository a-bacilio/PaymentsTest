import { Response, Request } from "express";
import getPaymentByIdService from "../services/getPaymentById";

const getPaymentByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  try {
    const cart = await getPaymentByIdService(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getPaymentByIdController;