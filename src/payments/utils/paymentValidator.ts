import * as yup from 'yup';

export const createPaymentSchema = yup.object({
  body: yup.object({
    user: yup.string().required('a user id is required'),
    cart: yup.string().required('a cart id is required'),
  }),
});
