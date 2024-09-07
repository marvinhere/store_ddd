import { Customer } from "../customer/customer";
import { v4 as uuidv4 } from 'uuid';

export class Order{
    id:string;
    customer:Customer;
    items:Array<any>;
    status:string;

    constructor(customer:Customer,items:Array<any>){
        this.id = uuidv4();
        this.customer = customer;
        this.items = items;
        this.status = 'pending';
    }

    completeOrder() {
        if (this.items.length === 0) {
            throw new Error('No items in the order');
        }
        this.status = 'completed';
    }

}