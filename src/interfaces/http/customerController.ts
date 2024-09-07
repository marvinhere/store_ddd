import { Request, Response } from "express";
import { CustomerService } from "../../domain/customer/customerService";

const customerService = new CustomerService();

export function find(req:Request,res:Response){
    try {
        const id = req.params.id;
        const customer = customerService.find(id);
        return res.json(customer)
    } catch (error:any) {
        return res.status(500).json(error.message);
    }
}

export function create(req:Request,res:Response){
    try {
        const {name,address} = req.body;
        const customer = customerService.create(name,address);
        return res.json(customer)
    } catch (error) {
        return res.status(500).json(error);
    }
}