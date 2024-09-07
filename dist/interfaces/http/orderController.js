"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
exports.find = find;
exports.complete = complete;
const orderService_1 = require("../../domain/order/orderService");
const orderService = new orderService_1.OrderService();
function create(req, res) {
    try {
        const { customer_id, items } = req.body;
        const order = orderService.createOrder(customer_id, items);
        return res.json(order);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
function find(req, res) {
    try {
        const id = req.params.id;
        const order = orderService.findOrder(id);
        return res.json(order);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
function complete(req, res) {
    try {
        orderService.completarOrder(req.params.id);
        return res.status(200).send();
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
