const { getProduct, addProduct, updateProduct, deleteProduct } = require("../controller/product.controller")

const router =require("express").Router()

router
 .get("/",getProduct)
 .post("/add",addProduct)
 .put("/update/:productId",updateProduct)
 .delete("/delete/:productId",deleteProduct)
 module.exports=router