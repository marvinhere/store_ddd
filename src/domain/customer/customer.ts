import {v4 as uuidv4} from 'uuid';

export class Customer{
    _id:string;
    name:string;
    address:string;

    constructor(name:string,address:string){
        this._id = uuidv4();
        this.name = name;
        this.address = address;
    }

}