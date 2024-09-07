import { Customer } from "../customer/customer";
import { v4 as uuidv4 } from 'uuid';

export class Order{
    id:string;
    customer_id:string;
    items:Array<any>;
    status:string;

    constructor(customer_id:string,items:Array<any>){
        this.id = uuidv4();
        this.customer_id = customer_id;
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