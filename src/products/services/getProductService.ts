import { productModel, IProduct } from "../models/Product";


const getProductService = async (): Promise<IProduct[]> => {
    try {
      const products: IProduct[] = await productModel.find();
      return products;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  export default getProductService;