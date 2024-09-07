"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
class OrderRepository {
    constructor() {
        this.orders = [];
    }
    save(order) {
        this.orders.push(order);
        return order;
    }
    findById(id) {
        return this.orders.find((order) => order.id == id) || null;
    }
}
exports.OrderRepository = OrderRepository;
