import { Router } from "express";
import createNewPaymentController from "../controllers/createPaymentController";
import getAllPaymentsController from "../controllers/getAllPaymentsController";
import getPaymentByIdController from "../controllers/getPaymentByIdController";
import getPaymentByUserIdController from "../controllers/getPaymentByUserIdController";

const router: Router = Router();

router.post("/payment", createNewPaymentController);
router.get("/payment", getAllPaymentsController);
router.get("/payment/:id", getPaymentByIdController);
router.get("/paymentUser/:user", getPaymentByUserIdController);

export default router;
