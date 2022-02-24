import { request, Request, Response } from "express";
import { productModel as Product, IProduct } from "../models/Product";

export const addNewProduct = async (req: Request, res:Response)=> {
    
    try {
        
         const product : IProduct = await Product.create(req.body)
         res.status(200).json({ product })
         
        }   

        catch(e){
            console.log(e)
            }

}
   
export const getProducts = async (req: Request, res: Response) =>{

        try {

            const products: IProduct[] = await Product.find({})
            res.status(200).json({ products})
            }

        catch (e){

        console.log(e)
        }


}

export const getProductById = async (req: Request, res: Response) =>{

    try{
      const productId =  req.params.id
      const product: IProduct | null = await Product.findById({productId})
      res.status(200).json({product})
    }

    catch(e){
        console.log(e)
    }
}


export const updateProduct = async (req: Request, res: Response) =>{ 

    try {
        const productId = req.params.id;
        const newProductInfo = req.body;
        const product: IProduct | null = await Product.findOneAndUpdate({ _id: productId }, newProductInfo, { new: true });
        res.status(200).json({ product })
        } 
        
    catch (e) {
        console.log(e);
      }

}

export const deleteProduct = async (req: Request, res: Response) =>{ 

    try {
        const productId = req.params.id;
        const product  = await Product.deleteOne({ _id: productId })
        res.status(200).json({ message: 'Product successfully deleted' })
        } 
        
    catch (e) {
        console.log(e);
      }

}