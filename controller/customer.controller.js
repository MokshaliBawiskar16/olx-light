
// const { default: Products } = require("../../client/src/pages/customerPages/Products");
const Customer = require("../modal/Customer");
const Order = require("../modal/Order");
const Product = require("../modal/Product");
const { sendEmail } = require("../utils/email");

exports.placeOrder=async(req,res)=>{
    try {
       const orderData= await Order.create({
            customer: req.loggeduser,
            // address:req.body.address,
            products:req.body.products,
        })
       const productsid=req.body.products
    
        // const result =await Product.updateOne({productsid,$set:{soled:true}})
       
            const result =await Product.findByIdAndUpdate(productsid,{soled:true},{new:true})
            
        
        res.json({message:"order place successfully",orderData})

    } catch (error) {
        console.log(error);
        res.status(400).json({message:"unable to place order"})
    }
}
exports.fetchCustomerOrders = async (req, res) => {
    try {
        console.log(req.loggeduser);
        const total=await Order.countDocuments()
        const {skip,limit}=req.query
        const result = await Order
            .find({ customer: req.loggeduser })
            .skip(skip)
            .limit(limit)
            .populate("customer", "_id name email address")
            .populate("products", "-qty -__V")
        res.json({ message: "order fetch success", result,total })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to fetch order" })
    }
}
exports.fetchCustomerSeller = async (req, res) => {
    try {
        console.log(req.loggeduser);
        // const total=await Order.countDocuments()
        // const {skip,limit}=req.query
        const result = await Product
            .find({ seller: req.loggeduser, soled:true})
            // .skip(skip)
            // .limit(limit)
            // .populate("customer", "_id name email address")
            // .populate("product", "-qty -__V")
        res.json({ message: "order fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to fetch order" })
    }
}
exports.getSellerProduct=async(req,res)=>{
    const result =await Product.find({seller:req.loggeduser})
    
    res.json({mesage:"product fetch success",result})
}

// const result =await Product.findByIdAndUpdate({products:req.body.products,$set:{soled:true}})
