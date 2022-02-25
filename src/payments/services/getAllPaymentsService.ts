import { Payment } from './../entity/types/Payment.d';
import { PaymentModel } from './../entity/models/PaymentModel';

const getAllPaymentsService = async (): Promise<Payment[]> => {
  try {
    const payments: Payment[] = await PaymentModel.find();
    return payments;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default getAllPaymentsService;