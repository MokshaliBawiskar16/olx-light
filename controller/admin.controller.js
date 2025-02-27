const expressAsyncHandler = require("express-async-handler");
const Product = require("../modal/Product");
const Customer = require("../modal/Customer");

exports.fetchAllProduct=expressAsyncHandler(async(req,res)=>{
  const result =await Product.find().populate("seller")
    res.json({mesage:"product get success",result})
})
exports.fetchAllUsers=expressAsyncHandler(async(req,res)=>{
  const result =await Customer.find()
    res.json({mesage:"users get success",result})
})
exports.adminBlocUnblockUser=async(req,res)=>{
    try {
       await Customer.findByIdAndUpdate(req.params.uid,{isActive:req.body.isActive})
        res.json({message:"user block success",})
    } catch (error) {
      console.log(error);
      
        res.status(400).json({message:"unable to block "})
        
    }
}
