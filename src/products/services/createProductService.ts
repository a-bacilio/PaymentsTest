import { productModel, IProduct } from "../models/Product";

const createProductService = async (product: IProduct): Promise<IProduct> => {
    try {
      const newProduct = new productModel(product);
      return await newProduct.save();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  export default createProductService;