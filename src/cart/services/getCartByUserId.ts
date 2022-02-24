import cartModel from "../models/cartModel";
import ICart from "../types/cartInterface";

const getCartbyUserIdService = async (idCart: string): Promise<ICart[]> => {
  try {
    const cartFound: ICart[] = await cartModel.find({ _id: idCart });

    if (!cartFound) throw new Error("Cart not found");

    return cartFound;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getCartbyUserIdService;
