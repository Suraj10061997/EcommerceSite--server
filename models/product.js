import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    images:{type:String,required:true},
    category:{type:String,required:true},
})

const ProductModel = mongoose.model("Product",productSchema);
export default ProductModel;