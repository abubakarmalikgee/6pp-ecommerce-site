import express from "express";
import { isAuthenticatedUser, authorizeRoles } from "../middleware/auth.js";
import {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrdersStatus,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/orders/new").post(isAuthenticatedUser, newOrder);

router
  .route("/order/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrdersStatus)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

export default router;
