import { Schema } from 'mongoose';
import { Payment } from '../types/Payment';


export const PaymentSchema = new Schema<Payment>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a payment'],
  },
  /**cart
   * user: {
      type: Schema.Types.ObjectId,
      ref: 'Cart',
      required: [true, 'a cart is required to create a payment'],
    },
   * 
   * 
  */
  createdAt: {
    default: new Date(),
  },
  editedAt: {
    type: Date,
    default: null,
  },
});

// agregattes

// middlewares


PaymentSchema.set('toJSON', { virtuals: true });
PaymentSchema.set('toObject', { virtuals: true });
