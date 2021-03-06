import cartModel from "../models/cartModel";
import ICart from "../types/cartInterface";

const getAllCartService = async (): Promise<ICart[]> => {
  try {
    const carts: ICart[] = await cartModel
      .find()
      .populate("user")
      .populate("products");
    return carts;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getAllCartService;
