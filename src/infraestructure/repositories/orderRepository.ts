import { IOrderRepository } from "../../domain/order/IOrderRepository";
import { Order } from "../../domain/order/order";

export class OrderRepository implements IOrderRepository{
    orders:Array<Order> = [];
    save(order: Order): Order {
        this.orders.push(order);
        return order;
    }
    findById(id: string): Order | null{
        return this.orders.find((order:Order)=>order.id == id) || null;
    }

}