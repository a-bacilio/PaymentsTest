import { Payment } from './../entity/types/Payment.d';
import { PaymentModel } from './../entity/models/PaymentModel';

const getPaymentbyUserIdService = async (idUser: string): Promise<Payment[]> => {
  try {
    const paymentFound: Payment[] = await PaymentModel.find({ user: idUser });

    if (!paymentFound) throw new Error("payment not found");

    return paymentFound;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getPaymentbyUserIdService;