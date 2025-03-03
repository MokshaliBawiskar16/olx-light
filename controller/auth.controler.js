const asyncHandler =require("express-async-handler")
const jwt=require("jsonwebtoken")
const validator=require("validator")
const bcrypt=require("bcryptjs")
const Admin = require("../modal/Admin")
const { generateOTP } = require("../utils/otp")
const { sendEmail } = require("../utils/email")
const {differenceInSeconds}=require("date-fns")
const Customer = require("../modal/Customer")

// Admin
exports.registerAdmin= asyncHandler(async(req,res)=>{
    const {name,email,mobile}=req.body
    if (validator.isEmpty(name)||validator.isEmpty(email)||validator.isEmpty(mobile)) {
        return res.status(400).json({message:"all filed require"})
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({message:"invalid Email"})
    }
    if (!validator.isMobilePhone(mobile,"en-IN")) {
        return res.status(400).json({message:"invalid mobile"})
    }

    await Admin.create({name,email,mobile})
    res.json({message:"Admin RegisterSuccessfull"})
})
exports.loginAdmin=asyncHandler(async(req,res)=>{
    console.log(req.body,"body");
    
    const{userName}=req.body
    console.log("userName",userName);
    
    const result =await Admin.findOne({$or:[{email:userName},{mobile:userName}]})
                                    // 👆mongo ch or operater =>check kartay username :email OR mobile aahe
 console.log("result",result);
                                    
     if (!result) {
         return res.status(400).json({message:"invalid credentialssss",result})
       }
    // LOGIC FOR SEND OTP
    const otp=generateOTP()
await Admin.findByIdAndUpdate(result._id,{otp,otpSendOn:Date.now()})
await sendEmail({
    message:`<h1></h1>Your OTP is ${otp}</h1>`,
    subject:"verify otp to login",
    to: result.email
})
  res.json({message:"otp send"})

})
exports.verifyOtp=asyncHandler(async(req,res)=>{
   const {userName,otp}=req.body
 const result = await Admin.findOne({$or:[{email:userName},{mobile:userName}]})
 if (!result) {
    return res.status(400).json({message:"invalid credentiol"})
 }
 if (result.otp !== otp) {
    return res.status(400).json({message:"invalid otp"})
 }
 if (differenceInSeconds(Date.now(),result.otpSendOn) > process.env.OTP_EXPIRES) {
    await Admin.findByIdAndUpdate(result._id,{otp:null})
    return res.status(400).json({message:" otp expired"})
 }
 await Admin.findByIdAndUpdate(result._id,{otp:null})
 const token=jwt.sign({id:result._id},process.env.JWT_SECRET,{expiresIn:"1d"})
 res.cookie("olx-admin",token,{
   maxAge:1000*60*60*24,
   httpOnly:true,
   secure:process.env.NODE_ENV === "production"
 })
 res.json({message:"login success",
   result:{
       name:result.name,
       email:result.email
   }})
})
exports.logoutAdmin=asyncHandler(async(req,res)=>{
    res.clearCookie("olx-admin")
    res.json({message:"logout successfull"})
})
// customer
exports.registerCustomer=asyncHandler(async(req,res)=>{
    // customer
    const{email,password}=req.body
    const result=await Customer.findOne({email})
    if (result) {
        return res.status(400).json({message:"email alredy exist try with other email"})
    }
    const hash=await bcrypt.hash(password,10)
    await Customer.create({...req.body,password:hash})
    res.json({message:"customer register success"})
})
exports.loginCustomer=asyncHandler(async(req,res)=>{
    const{userName,password}=req.body
    const result=await Customer.findOne({$or:[{email:userName},{mobile:userName}]})
    if (!result) {
        console.log("hi");
    
        return res.status(400).json({message:"invalid credential",result})
    }

    const compare = await bcrypt.compare(password,result.password)
    if (!compare) {
        return res.status(401).json({message:"password not match"})
    }
    // const isVerify = await bcrypt.compare(password, result.password)
    // if (!isVerify) {
    //     return res.status(401).json({ message: "invalid credentials password" })
    // }
    const token=jwt.sign({_id:result._id},process.env.JWT_SECRET)
    res.cookie("olx-customer",token,{
        maxAge:60*60*1000,
        httpOnly:true,
       secure: process.env.NODE_ENV === "production"

    })
     res.json({message:"customer login success",result:{
        _id:result._id,
        name:result.name,
        email:result.email,
        password:result.password,
        address:result.address
     }})
})
exports.logoutCustomer=asyncHandler(async(req,res)=>{
    res.clearCookie("olx-customer")
    res.json({message:"customer logout success"})
})
    