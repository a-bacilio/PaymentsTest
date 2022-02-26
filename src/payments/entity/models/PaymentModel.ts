import { model } from "mongoose";
import { Payment } from "../types/Payment";
import { PaymentSchema } from "../schemas/PaymentSchema";

export const PaymentModel = model<Payment>("Payment", PaymentSchema);
