const { fetchAllUsers, fetchAllProduct, adminBlocUnblockUser } = require("../controller/admin.controller")

const route=require("express").Router()
route
.get("/all-user",fetchAllUsers)
.get("/all-product",fetchAllProduct)
.put("/user/block/:uid",adminBlocUnblockUser)



module.exports=route
