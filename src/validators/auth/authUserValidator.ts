import * as yup from 'yup';

export const createUserValidator = yup.object({
  body: yup.object({
    name: yup.string().required('El nombre es obligatorio'),
    email: yup
      .string()
      .email('Debe ingresar un email válido')
      .required('El email es obligatorio'),
    password: yup
      .string()
      .min(8, 'El password debe ser de al menos 8 caracteres')
      .required('La contraseña es requerida'),
    passwordConfirmation: yup
      .string()
      .required('La confirmación de contraseña es requerida')
      .oneOf([yup.ref('password'), null], 'La contraseña no coincide'),
    role: yup
      .string()
      .oneOf(['customer', 'admin', 'pharmacist'], 'rol no existe'),
  }),
});

export const loginUserValidator = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email('el email no es válido')
      .required('el email es requerido'),
    password: yup
      .string()
      .min(8, 'la contraseña debe ser de al menos 8 caracteres')
      .required('contraseña es requerida'),
  }),
});
