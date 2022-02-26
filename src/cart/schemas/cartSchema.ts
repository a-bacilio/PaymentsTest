import { Schema } from "mongoose";
import ICart from "../types/cartInterface";

const CartSchema = new Schema<ICart>({
  type: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true },
  state: { type: String },
  payment: { type: Schema.Types.ObjectId },
});

export default CartSchema;
