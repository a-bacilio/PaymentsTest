import { Request, Response } from "express";
import getProductByIdService from '../services/getProductByIdService'


export const getProductByIdController = async (req: Request, res: Response) =>{

    try{
      const product = await getProductByIdService(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
}


