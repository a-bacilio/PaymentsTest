import { Response, Request } from "express";
import getPaymentbyUserIdService from "../services/getPaymentByUserId";

const getPaymentByUserIdController = async (
  req: Request<{ user: string }, {}, {}>,
  res: Response
) => {
  try {
    const cart = await getPaymentbyUserIdService(req.params.user);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getPaymentByUserIdController;