import { Request, Response } from "express";
import createProductService from '../services/createProductService'

export const createProductController = async (req: Request, res:Response)=> {
    
    try {
        
        const newProduct = createProductService(req.body);
        res.status(200).json({ newProduct });
      } catch (error) {
        res.status(500).json({ error });
      }

}