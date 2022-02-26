import { productModel, IProduct } from "../models/Product";

const getProductByIdService = async (idProduct: string): Promise<IProduct> => {
    try {
      const product: IProduct | null = await productModel.findOne({ _id: idProduct });
      if (!product) throw new Error("product not found");
      return product;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  export default getProductByIdService;