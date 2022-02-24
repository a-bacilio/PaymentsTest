import { Response, Request } from "express";
import getCartByIdService from "../services/getCartById";

const getCartByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  try {
    const cart = await getCartByIdService(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getCartByIdController;
