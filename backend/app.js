import express from "express";
import cookieParser from "cookie-parser";

const app = express();

import errorMiddleware from "./middleware/error.js";

app.use(express.json());
app.use(cookieParser());

// Route Imports
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import orderRoute from "./routes/orderRoute.js";

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

// Middleware for Errors

app.use(errorMiddleware);

export default app;
