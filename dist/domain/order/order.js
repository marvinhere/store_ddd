"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const uuid_1 = require("uuid");
class Order {
    constructor(customer, items) {
        this.id = (0, uuid_1.v4)();
        this.customer = customer;
        this.items = items;
        this.status = 'pending';
    }
    completeOrder() {
        if (this.items.length === 0) {
            throw new Error('No items in the order');
        }
        this.status = 'completed';
    }
}
exports.Order = Order;
