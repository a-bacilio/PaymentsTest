import cartModel from "../models/cartModel";
import ICart from "../types/cartInterface";

const getCartByIdService = async (idCart: string): Promise<ICart> => {
  try {
    const cart: ICart | null = await cartModel
      .findOne({ _id: idCart })
      .populate("user")
      .populate("products");
    if (!cart) throw new Error("cart not found");
    return cart;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getCartByIdService;
