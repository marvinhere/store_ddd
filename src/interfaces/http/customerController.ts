import { CustomerService } from "../../domain/customer/customerService";

const customerService = new CustomerService();

export async function find(req:any,res:any){
    try {
        const id = req.params.id;
        const customer = await customerService.find(id)
        return res.json(customer);
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export async function create(req:any,res:any){
    try {
        const {name,address} = req.body;
        const customer = await customerService.create(name,address);
        return res.json(customer);
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}