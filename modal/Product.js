const mongoose=require("mongoose")

const ProductsSchema=new mongoose.Schema({
    seller:{type:mongoose.Types.ObjectId,ref:'customer',required:true},
    name:{type:String,required:true},
    price:{type:String,required:true},
    desc:{type:String,required:true},
    qty:{type:String,required:true},
    hero:{type:[String],required:true}, //multiple img aahe mhanun
    soled:{type:Boolean,default:false,required:true},
})
module.exports=mongoose.model("product",ProductsSchema)