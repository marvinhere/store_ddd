import { CustomerRepository } from "../../infraestructure/repositories/customerRepository";
import { OrderRepository } from "../../infraestructure/repositories/orderRepository";
import { IOrderRepository } from "./IOrderRepository";
import { Order } from "./order";

export class OrderService{
    orderRepository:IOrderRepository;
    customerRepository:any;

    constructor(){
        this.orderRepository = new OrderRepository();
        this.customerRepository = new CustomerRepository();
    }

    async create(customer_id:string,items:Array<any>){
        const customer = await this.customerRepository.findById(customer_id);
        if(!customer){
            throw new Error("Customer no existe");
        }

        const order = new Order(customer_id,items);
        return await this.orderRepository.save(order);
    }

    async find(id:string){
        const order = await this.orderRepository.findById(id);
        if(!order){
            throw new Error("No existe esta orden")
        }
        return order;
    }

    async completeOrder(order_id:string){
        const order = await this.orderRepository.findById(order_id);
        if(!order){
            throw new Error("Orden no existen")
        }
        order.completeOrder();
    }
}