import CartModel from "../models/cart.js";


export const addAnItem = async(req,res)=>{
    try{
        console.log("hello");
        const {_id} = {...req.body};
        console.log(_id);
        let itemAlreadyPresent=null;
        const allItemsInCart = await CartModel.find({});
        if(allItemsInCart.length > 0){
            itemAlreadyPresent = allItemsInCart.find((item)=>{
                if(item._id.toString() === _id.toString()){
                    return item;
                }
                return null;
            })
            if(itemAlreadyPresent){
                console.log("yes");
                return res.json({message:"item already present"});
            }
        }
        const newAddedItem = new CartModel({
            ...req.body,
        })
        await newAddedItem.save();
        res.json(newAddedItem);
    }catch(err){
        console.log(err);
        res.json({message:"something went wrong"});
    }
}

export const getAllAddedItems = async(req,res)=>{
    try{
        const getAllItems = await CartModel.find({});
        res.json(getAllItems);
    }catch(err){
        console.log(err);
        res.json({message:"something went wrong"});
    }
}