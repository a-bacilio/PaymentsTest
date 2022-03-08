import { Types } from "mongoose";
import { UserIdType } from "../../../users/entity/types/user";

export interface Payment {
  id: PaymentId;
  user: string | Types.ObjectId;
  cart: string | Types.ObjectId;
  createdAt: Date;
  editedAt: Date | null;
}

export type PaymentId = {
  _id: Types.ObjectId;
};

export type CreatePayment = Omit<Payment, "id" | "createdAt" | "editedAt">;
