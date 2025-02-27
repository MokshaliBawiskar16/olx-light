
const { placeOrder, fetchCustomerOrders, getSellerProduct, fetchCustomerSeller } = require("../controller/customer.controller")

const route=require("express").Router()

route.post("/place-order",placeOrder)
.get("/customer-order-history",fetchCustomerOrders)
.get("/user",getSellerProduct)
.get("/customer-seller-history",fetchCustomerSeller)
module.exports=route