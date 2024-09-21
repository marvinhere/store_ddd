import { Request,Response } from "express";
import { OrderService } from "../../domain/orders/orderService";


const orderService = new OrderService();

export async function create(req:Request,res:Response){
    try {
        const {customer_id,items} = req.body;
        const order = await orderService.create(customer_id,items)
        return res.json(order);
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export async function find(req:Request,res:Response){
    try {
        const id = req.params.id
        const order = await orderService.find(id);
        return res.json(order);
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export async function complete(req:Request,res:Response){
    try {
        orderService.completeOrder(req.params.id);
        return res.status(200).send();
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}