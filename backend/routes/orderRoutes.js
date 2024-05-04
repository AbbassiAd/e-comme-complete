import express from "express";
const router = express.Router();

import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddelwares.js";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  markOrderAsPaid,
  markOrderAsDelivred,
} from "../controller/orderController.js";

router
  .route("/")
  .post(authenticate, createOrder)
  .get(authenticate, authorizeAdmin, getAllOrders);

router.route("/:id").get(authenticate, getOrderById);

router.route("/:id/pay").put(authenticate, markOrderAsPaid);
router
  .route("/:id/deliver")
  .put(authenticate, authorizeAdmin, markOrderAsDelivred);

export default router;
