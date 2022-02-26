import { Request, Response } from "express";
import { productModel, IProduct } from "../models/Product";
import getProductService from "../services/getProductService";

export const getProductController = async (req: Request, res: Response) =>{

    try {

        const products: IProduct[] = await getProductService()
        res.status(200).json({ products})
        }

    catch (error){

        res.status(500).json(error);
    }


}