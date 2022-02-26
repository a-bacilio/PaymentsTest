import cartModel from "../models/cartModel";
import ICart from "../types/cartInterface";

const updateCartService = async (
  id: string,
  cantent: ICart
): Promise<ICart | null> => {
  try {
    const cartFound: ICart | null = await cartModel.findOne({ _id: id });

    if (!cartFound) {
      throw new Error("Cart not found");
    }

    const cartUpdate: ICart | null = await cartModel.findOneAndUpdate(
      { _id: id },
      cantent,
      {
        new: true,
      }
    );

    return cartUpdate;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default updateCartService;
