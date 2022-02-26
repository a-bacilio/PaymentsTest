import cartModel from "../models/cartModel";
import ICart from "../types/cartInterface";

const createCartService = async (cart: ICart): Promise<ICart> => {
  try {
    const newCart = new cartModel(cart);
    return await newCart.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default createCartService;
