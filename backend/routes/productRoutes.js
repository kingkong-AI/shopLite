import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js"
router.get('/', asyncHandler( async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        return res.send(product);
    } else {
        res.status(404);
        throw new Error('Resource Not Found');
    }
}));

export default router;