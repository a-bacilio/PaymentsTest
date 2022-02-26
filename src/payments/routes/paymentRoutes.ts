import { Router } from 'express';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import {
  createUserValidator,
  loginUserValidator,
} from '../../validators/auth/authUserValidator';
import createNewPaymentController from '../controllers/createPaymentController';
import getAllPaymentsController from '../controllers/getAllPaymentsController';
import getPaymentByIdController from '../controllers/getPaymentByIdController';
import getPaymentByUserIdController from '../controllers/getPaymentByUserIdController';

const router: Router = Router();

router.get('/payment/:id', bodyRequestValidator(loginUserValidator), getAllPaymentsController );
router.get('/payment/:id', bodyRequestValidator(loginUserValidator), getPaymentByIdController );
router.get('/payment/:user', bodyRequestValidator(loginUserValidator), getPaymentByUserIdController );
router.post('/payment', bodyRequestValidator(loginUserValidator), createNewPaymentController );



export default router;