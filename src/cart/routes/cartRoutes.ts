import { Router } from "express";
import createCartController from "../controllers/createCartController";
import getAllCartController from "../controllers/getAllCartController";
import getCartByIdController from "../controllers/getCartById";
import getCartsByUserIdController from "../controllers/getCartsByUserIdController";
import updateCartController from "../controllers/updateCartController";

const router = Router();

router.route("/cart").post(createCartController).get(getAllCartController);
router.get("/cart/:id", getCartByIdController);
router.get("/cart/:idUser", getCartsByUserIdController);
router.put("/cart/:id", updateCartController);

export default router;
