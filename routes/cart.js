import express from "express";
const router = express.Router();

import {
    addAnItem,
    getAllAddedItems,
} from "../controllers/cart.js";

router.post("/",addAnItem);
router.get("/",getAllAddedItems);

export default router;