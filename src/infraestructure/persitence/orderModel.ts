import { model, models, Schema } from "mongoose";

const orderSchema = new Schema({
    _id:{type:String},
    customer_id:{type:String},
    items:{type:Array},
    status:{type:String}
},{
    timestamps:true // createdAt, updatedAt
});

const orderModel = models.order || model('order',orderSchema);

export default orderModel;