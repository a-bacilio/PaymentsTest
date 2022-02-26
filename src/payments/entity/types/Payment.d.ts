import { Types } from "mongoose";

export interface Payment {
  id: PaymentId;
  user: Types.ObjectId;
  cart: Types.ObjectId;
  createdAt: Date;
  editedAt: Date | null;
}

export type PaymentId = {
  _id: Types.ObjectId;
};

export type CreatePayment = Omit<Payment, "id" | "createdAt" | "editedAt">;
