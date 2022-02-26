import { productModel, IProduct } from "../models/Product";

const deleteProductService = async (idProduct: string) => {
    try {
        
        const product  = await productModel.deleteOne({ _id: idProduct })
        return product
        } 
        
        catch (error: any) {
            throw new Error(error.message);
          }

    }
  export default deleteProductService;