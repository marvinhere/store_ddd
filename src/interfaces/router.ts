import express from "express"
import * as customerController from './http/customerController'
import * as orderController from './http/orderController'

const router = express.Router();

router.get("/customers/:id",customerController.find)
router.post("/customers",customerController.create)

router.get("/orders/:id",orderController.find)
router.post("/orders",orderController.create)


export default router;