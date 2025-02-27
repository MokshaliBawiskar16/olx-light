const Product = require("../modal/Product")


exports.getPublicProductDetail=async(req,res)=>{
    const result =await Product.findById(req.params.productId).populate("seller")
 res.json({mesage:"product detail fetch success",result})
}
exports.getPublicProduct=async(req,res)=>{
    const result =await Product.find({soled:false})
    
    res.json({mesage:"product fetch success",result})
}