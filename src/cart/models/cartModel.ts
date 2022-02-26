import { model } from "mongoose";
import CartSchema from "../schemas/cartSchema";
import ICart from "../types/cartInterface";

const cartModel = model<ICart>("Cart", CartSchema);

export default cartModel;
