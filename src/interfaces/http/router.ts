import express from "express";
import * as customerController from './customerController';
import * as orderController from './orderController'
const router = express.Router();

router.get("/customers/:id",customerController.find);
router.post("/customers",customerController.create)

router.get("/orders/:id",orderController.find);
router.post("/orders",orderController.create);
router.post("/orders/:id/complete",orderController.complete);
export default router;