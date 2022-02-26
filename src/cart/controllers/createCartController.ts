import { Request, Response } from "express";
import createCartService from "../services/createCartService";
import ICart from "../types/cartInterface";

const createCartController = async (
  req: Request<{}, {}, ICart>,
  res: Response
) => {
  try {
    const newCart = createCartService(req.body);
    res.status(200).json({ newCart });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default createCartController;
