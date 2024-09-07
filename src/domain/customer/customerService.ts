import { CustomerRepository } from "../../infraestructure/repositories/customerRepository";
import { Customer } from "./customer";
import { ICustomerRepository } from "./ICustomerRepository";

export class CustomerService{
    customerRepository:ICustomerRepository;
    constructor(){
        this.customerRepository = new CustomerRepository();
    }

    find(id:string){
        const customer = this.customerRepository.findById(id);
        if(!customer){
            throw new Error("Customer no existe")
        }
        return customer;
    }

    create(name:string,address:string){
        const customer = new Customer(name,address);
        return this.customerRepository.save(customer);
    }
}