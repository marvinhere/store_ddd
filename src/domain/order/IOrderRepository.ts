import { Order } from "./order";

export interface IOrderRepository{
    save(order:Order):Order;
    findById(id:string):Order | null;
}