import { Response, Request } from "express";
import getAllCartService from "../services/getAllCartService";
import ICart from "../types/cartInterface";

const getAllCartController = async (req: Request, res: Response) => {
  try {
    const carts: ICart[] = await getAllCartService();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getAllCartController;
