import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    images:{type:String,required:true},
    category:{type:String,required:true},
    totalQuantity:{type:Number,required:true,default:0},
    totalPrice:{type:Number,required:true,default:0},
})

const CartModel = mongoose.model("Cart",cartSchema);
export default CartModel;