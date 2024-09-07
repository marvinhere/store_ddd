import { CustomerRepository } from "../../infraestructure/repositories/customerRepository";
import { OrderRepository } from "../../infraestructure/repositories/orderRepository";
import { ICustomerRepository } from "../customer/ICustomerRepository";
import { IOrderRepository } from "./IOrderRepository";
import { Order } from "./order";

export class OrderService{
    orderRepository:IOrderRepository;
    customerRepository:ICustomerRepository;
    constructor(){
        this.orderRepository = new OrderRepository();
        this.customerRepository = new CustomerRepository();
    }

    createOrder(customer_id:string,items:Array<any>){
        const customer = this.customerRepository.findById(customer_id);
        if(!customer){
            throw new Error("No se encontro al usuario")
        }
        const order = new Order(customer.id,items);

        this.orderRepository.save(order);
        return order;
    }

    findOrder(order_id:string){
        const order = this.orderRepository.findById(order_id)
        if(!order){
            throw new Error("Orden no existe")
        }
        return order;
    }

    completarOrder(order_id:string){
        const order = this.orderRepository.findById(order_id);
        if(!order){
            throw new Error("Orden no existe")
        }
        order.completeOrder()
        //Tarea: modificar para que guarde los cambios en la base de datos desde el repositorio

        //Agregar funcion showAll
    }
}