import { model, models, Schema } from "mongoose";

const customerSchema = new Schema({
    _id:{type: String},
    name : {type: String},
    address: {type: String}
},{
    timestamps:true
});


const customerModel = models.customer || model('customer',customerSchema);

export default customerModel;