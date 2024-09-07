"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = find;
exports.create = create;
const customerService_1 = require("../../domain/customer/customerService");
const customerService = new customerService_1.CustomerService();
function find(req, res) {
    try {
        const id = req.params.id;
        const customer = customerService.find(id);
        return res.json(customer);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
function create(req, res) {
    try {
        const { name, address } = req.body;
        const customer = customerService.create(name, address);
        return res.json(customer);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}
