"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const customerRepository_1 = require("../../infraestructure/repositories/customerRepository");
const customer_1 = require("./customer");
class CustomerService {
    constructor() {
        this.customerRepository = new customerRepository_1.CustomerRepository();
    }
    find(id) {
        const customer = this.customerRepository.findById(id);
        if (!customer) {
            throw new Error("Customer no existe");
        }
        return customer;
    }
    create(name, address) {
        const customer = new customer_1.Customer(name, address);
        return this.customerRepository.save(customer);
    }
}
exports.CustomerService = CustomerService;
