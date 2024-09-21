import { Order } from "./order";

export interface IOrderRepository{
    save(order:Order):Promise<Order>;
    findById(id:string):Promise<Order | null>;
}