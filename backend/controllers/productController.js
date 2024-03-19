import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetches all the Products
// @route GET /api/products 
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

// @desc Fetches Product by Id
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        return res.send(product);
    } else {
        res.status(404);
        throw new Error('Resource Not Found');
    }
});

// @desc Create Product
// @route POST /api/products 
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample Description',
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc Update Product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {name, price, image, brand, category, countInStock, description} = req.body;
    const product = await Product.findById(req.params.id);
    if(product) {
        product.name = name;
        product.price = price;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        product.description = description;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Resource Not Found');
    } 
});

// @desc Delete Product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        await Product.deleteOne({_id: product._id});
        res.status(200).json({message: 'Product deleted'});
    } else {
        res.status(404);
        throw new Error('Resource Not Found');
    }
});


export {getProducts, getProductById, createProduct, updateProduct, deleteProduct};