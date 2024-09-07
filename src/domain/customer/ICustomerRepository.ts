import { Customer } from "./customer";

export interface ICustomerRepository{
    save(customer:Customer):Customer;
    findById(id:string):Customer | null;
}