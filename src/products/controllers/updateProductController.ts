import { Request, Response } from "express";
import { productModel as Product, IProduct } from "../models/Product";
import updateProductService from "../services/updateProductService";

export const updateProductController = async (req: Request, res: Response) =>{ 

    try {
        const product = await updateProductService(req.params.id, req.body );
        res.status(200).json({ product })
        } 
        
    
    catch (error) {
      res.status(500).json(error);
    }
}