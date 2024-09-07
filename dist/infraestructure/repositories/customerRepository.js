"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
class CustomerRepository {
    constructor() {
        this.customers = [
            {
                id: "abcd",
                name: "Mario",
                address: "Panajachel"
            }
        ];
    }
    save(customer) {
        this.customers.push(customer);
        return customer;
    }
    findById(id) {
        const c = this.customers.find((customer) => customer.id == id);
        if (!c) {
            return null;
        }
        return c;
    }
}
exports.CustomerRepository = CustomerRepository;
