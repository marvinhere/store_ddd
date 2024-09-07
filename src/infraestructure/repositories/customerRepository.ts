import { Customer } from "../../domain/customer/customer";
import { ICustomerRepository } from "../../domain/customer/ICustomerRepository";

export class CustomerRepository implements ICustomerRepository{
    customers:Array<Customer> = [
        {
            id:"abcd",
            name:"Mario",
            address:"Panajachel"
        }
    ];

    save(customer:Customer): Customer {
        this.customers.push(customer);
        return customer;
    }
    findById(id: string): Customer | null {
        const c = this.customers.find((customer:Customer)=>customer.id==id);
        if(!c){
            return null;
        }
        return c;
    }
    


    
}