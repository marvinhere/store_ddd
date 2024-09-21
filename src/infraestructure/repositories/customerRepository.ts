import { Customer } from "../../domain/customer/customer";
import { ICustomerRepository } from "../../domain/customer/ICustomerRepository";
import customerModel from "../persitence/customerModel";

export class CustomerRepository implements ICustomerRepository{
    
    async save(customer: Customer): Promise<Customer> {
        try {
            const customerCreated = new customerModel(customer);
            await customerCreated.save();
            return customer;
        } catch (error) {
            throw error;
        }
    }

    async findById(id: string): Promise<Customer | null> {
        try {
            const c = await customerModel.findById(id).exec();
            if(!c){
                return null;
            }
            const customer = new Customer(c.name,c.address);
            return customer;
        } catch (error) {
            throw error;
        }
    }

}