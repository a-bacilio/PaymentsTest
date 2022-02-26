import { Router } from 'express';
import { authLogin } from '../controllers/loginController';
import { authSignup } from '../controllers/signUpController';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import {
  createUserValidator,
  loginUserValidator,
} from '../../validators/auth/authUserValidator';

const router: Router = Router();

router.post('/signup', bodyRequestValidator(createUserValidator), authSignup);
router.post('/login', bodyRequestValidator(loginUserValidator), authLogin);

export default router;
