import { Router } from 'express';
import { authSignup } from '../../controllers/auth/signUpController';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import { createUserValidator } from '../../validators/auth/authUserValidator';

const router: Router = Router();

router.post('/signup', bodyRequestValidator(createUserValidator), authSignup);

export default router;
