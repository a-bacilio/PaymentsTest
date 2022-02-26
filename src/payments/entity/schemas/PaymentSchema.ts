import { Schema } from "mongoose";
import { Payment } from "../types/Payment";

export const PaymentSchema = new Schema<Payment>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "an user is required to create a payment"],
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
      required: [true, "an cart is required to create a payment"],
    },
  },
  {
    timestamps: true,
  }
);

// agregattes

// middlewares

PaymentSchema.set("toJSON", { virtuals: true });
PaymentSchema.set("toObject", { virtuals: true });
