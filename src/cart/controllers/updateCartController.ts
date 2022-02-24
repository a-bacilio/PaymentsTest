import { Response, Request } from "express";
import updateCartService from "../services/updateCartService";
import ICart from "../types/cartInterface";

const updateCartController = async (
  req: Request<{ id: string }, {}, ICart>,
  res: Response
) => {
  try {
    const newcart: ICart | null = await updateCartService(
      req.params.id,
      req.body
    );
    res.status(200).json(newcart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default updateCartController;
