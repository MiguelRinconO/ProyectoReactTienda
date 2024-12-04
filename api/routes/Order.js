const express = require('express')

const orderRoute = express.Router()

const protect = require('../middleware/Auth')

const asyncHandler = require('express-async-handler')

const Order = require('../models/Order')


orderRoute.post("/",protect,asyncHandler(async(req,res)=>{
    const {orderItems,shippingAddress,paymentMethod,shippingPrice ,taxPrince,totalPrice,prince} = req.body
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error("No order items")
    }else{
        const order = new Order({
            orderItems,
            shippingAddress,
            paymentMethod,
            shippingPrice,
            taxPrince,
            totalPrice,
            prince,
            user:req.user._id
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
}))


orderRoute.put('/:id/payment',protect,asyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)
    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email_address:req.body.email_address,
        }
        const updatedOrder = await order.save()
        res.status(200).json(updatedOrder)
    }else{
        res.status(404)
        throw new Error("Order not found")
    }
}))



module.exports = orderRoute;