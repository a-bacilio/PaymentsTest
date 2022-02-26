import { CreatePayment, Payment } from "./../entity/types/Payment.d";
import { PaymentModel } from "./../entity/models/PaymentModel";

export const createNewPaymentService = async (
  paymentRequest: CreatePayment
): Promise<Payment> => {
  try {
    const newPayment = new PaymentModel(paymentRequest);
    return await newPayment.save();
  } catch (error: any) {
    throw new Error("error creating a new payment");
  }
};
