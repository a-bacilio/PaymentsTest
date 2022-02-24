import * as yup from "yup";

export const createCartValidator = yup.object({
  body: yup.object({
    type: yup.string().required(),
    user: yup.string().required(),
    state: yup.string().required(),
    paymen: yup.string(),
    products: yup.array(),
  }),
});
