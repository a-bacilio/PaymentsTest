import { Response, Request } from "express";
import getCartbyUserIdService from "../services/getCartByUserId";
import ICart from "../types/cartInterface";

const getCartsByUserIdController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const carts: ICart[] = await getCartbyUserIdService(req.params.id);
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getCartsByUserIdController;
