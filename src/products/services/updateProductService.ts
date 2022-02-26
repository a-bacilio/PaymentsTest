import { productModel, IProduct } from "../models/Product";

const updateProductService = async (idProduct: string, body:{}) => {
    try {
        const productId = idProduct;
        const newProductInfo = body;
        const product: IProduct | null = await productModel.findOneAndUpdate({ _id: productId }, newProductInfo, { new: true });
        return product
        } 
        
        catch (error: any) {
            throw new Error(error.message);
          }

    }
  export default updateProductService;