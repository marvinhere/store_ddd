import { Customer } from "./customer";

export interface ICustomerRepository{
    save(customer:Customer):Promise<Customer>;
    findById(id:string):Promise<Customer | null>;
}