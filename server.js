import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import ProductRouter from "./routes/product.js";
import CartRouter from "./routes/cart.js";

dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use("/api/products",ProductRouter);
app.use("/api/cart",CartRouter);

app.get("/",(req,res)=>{
    res.send("Big Bazaar");
})

const port = process.env.PORT || 5000;
mongoose
    .connect(process.env.mongodb_url)
    .then(()=>{
        app.listen(port,()=>console.log("listening on port " + port));
    })
    .catch((error)=>console.log(error));

