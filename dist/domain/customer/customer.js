"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const uuid_1 = require("uuid");
class Customer {
    constructor(name, address) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.address = address;
    }
}
exports.Customer = Customer;
