import { Payment } from "./../entity/types/Payment.d";
import { PaymentModel } from "./../entity/models/PaymentModel";

const getPaymentByIdService = async (idPayment: string): Promise<Payment> => {
  try {
    const payment: Payment | null = await PaymentModel.findOne({
      _id: idPayment,
    })
      .populate("user")
      .populate("cart");
    if (!payment) throw new Error("payment not found");
    return payment;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getPaymentByIdService;
