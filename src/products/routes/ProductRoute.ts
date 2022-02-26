import Router from "express";
import { createProductController } from "../controllers/createProductController";
import { deleteProductController } from "../controllers/deleteProductController";
import { getProductController } from "../controllers/getProductController";
import { getProductByIdController } from "../controllers/getProductByIdController";
import { updateProductController } from "../controllers/updateProductController";
import { userTokenVerification } from "../../middlewares/auth/userTokenVerification";

const productRouter = Router();

productRouter.post("/products", userTokenVerification, createProductController);

productRouter.get("/products", getProductController);

productRouter.get("/products/:id", getProductByIdController);

productRouter.put(
  "/products/:id",
  userTokenVerification,
  updateProductController
);

productRouter.delete(
  "/products/:id",
  userTokenVerification,
  deleteProductController
);

export default productRouter;
