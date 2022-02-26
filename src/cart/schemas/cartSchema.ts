import { Schema } from "mongoose";
import ICart from "../types/cartInterface";

const CartSchema = new Schema<ICart>({
  type: { type: String, required: true, trim: true, lowercase: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  state: { type: String, trim: true, lowercase: true },
  payment: { type: Schema.Types.ObjectId, ref: "Payment" },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default CartSchema;
