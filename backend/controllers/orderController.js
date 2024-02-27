import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Create new Order
// @route POST /api/orders 
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    res.send('add order items');
});

// @desc Get logged in user Orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
    res.send('get my orders');
});

// @desc Get Order by ID
// @route GET /api/orders/:id 
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    res.send('get order by ID');
});

// @desc Update Order to paid
// @route GET /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('update order to paid');
});

// @desc Update Order to delivered
// @route GET /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('update order to delivered');
});

// @desc Get all Orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('get all orders');
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    getOrders,
    updateOrderToDelivered,
    updateOrderToPaid
} 