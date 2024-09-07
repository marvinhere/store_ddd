import { Request,Response } from "express";
import { OrderService } from "../../domain/order/orderService";

const orderService = new OrderService();

export function create(req:Request,res:Response){
    try {
        const {customer_id,items} = req.body;
        const order = orderService.createOrder(customer_id,items)
        return res.json(order);
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export function find(req:Request,res:Response){
    try {
        const id = req.params.id
        const order = orderService.findOrder(id);
        return res.json(order);
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export function complete(req:Request,res:Response){
    try {
        orderService.completarOrder(req.params.id);
        return res.status(200).send();
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}