import {  Request, Response } from "express";
import { productModel as Product, IProduct } from "../models/Product";
import deleteProductService from "../services/deleteProductService";

export const deleteProductController = async (req: Request, res: Response) =>{ 

    try {
        
        const product  = await deleteProductService(req.params.id)
        res.status(200).json({ message: 'Product successfully deleted' })
        } 
        
       
     catch (error) {
      res.status(500).json(error);
    }

}