import { IOrderRepository } from "../../domain/orders/IOrderRepository";
import { Order } from "../../domain/orders/order";
import orderModel from "../persitence/orderModel";

export class OrderRepository implements IOrderRepository{
  
    async save(order: Order): Promise<Order>{
        try {
            const newOrder = new orderModel(order);
            await newOrder.save();
            return order;
        } catch (error) {
            throw error;
        }
    }

    async findById(id: string): Promise<Order | null> {
      try {
            const order = await orderModel.findById(id).exec();
            if(!order){
                return null;
            }
            const orderObj = new Order(order.customer_id,order.items);
            console.log(orderObj)
            return orderObj;
      } catch (error) {
        throw error;
      }
    }

}