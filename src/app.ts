import dotenv from "dotenv";
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "./shared/logger/morganLogger";

import paymentroutes from "./payments/routes/paymentRoutes";
import authRoutes from "./auth/routes/authRoutes";
import productRouter from "./products/routes/ProductRoute";
import cartRoutes from "./cart/routes/cartRoutes";
import { userTokenVerification } from "./middlewares/auth/userTokenVerification";

dotenv.config();
const app: Application = express();

// middlewares
app.use(morgan);
app.use(express.json());

// routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", productRouter);
app.use("/api/v1", userTokenVerification, paymentroutes);
app.use("/api/v1", userTokenVerification, cartRoutes);

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .json({ message: err.message, type: err.errorType });
});

export default app;
