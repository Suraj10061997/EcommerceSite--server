import ProductModel from "../models/product.js";

export const getAllProducts = async(req,res)=>{
    try{
        const allProducts = await ProductModel.find({});
        res.json(allProducts);
    }catch(err){
        console.log(err);
        res.json({message:"something went wrong"});
    }
}