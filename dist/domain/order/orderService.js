"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const customerRepository_1 = require("../../infraestructure/repositories/customerRepository");
const orderRepository_1 = require("../../infraestructure/repositories/orderRepository");
const order_1 = require("./order");
class OrderService {
    constructor() {
        this.orderRepository = new orderRepository_1.OrderRepository();
        this.customerRepository = new customerRepository_1.CustomerRepository();
    }
    createOrder(customer_id, items) {
        const customer = this.customerRepository.findById(customer_id);
        if (!customer) {
            throw new Error("No se encontro al usuario");
        }
        const order = new order_1.Order(customer, items);
        this.orderRepository.save(order);
        return order;
    }
    findOrder(order_id) {
        const order = this.orderRepository.findById(order_id);
        if (!order) {
            throw new Error("Orden no existe");
        }
        return order;
    }
    completarOrder(order_id) {
        const order = this.orderRepository.findById(order_id);
        if (!order) {
            throw new Error("Orden no existe");
        }
        order.completeOrder();
        //Tarea: modificar para que guarde los cambios en la base de datos desde el repositorio
        //Agregar funcion showAll
    }
}
exports.OrderService = OrderService;
