const mongoose =require ("mongoose")
const express =require("express")
const cors=require("cors")
require("dotenv").config()
const cookieParser=require("cookie-parser")
const { adminProtected, customerProtected } = require("./middleware/protected")

const app=express()
app.use(express.json())//req.body
app.use(cookieParser())//req.cookies

// app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cors({origin:true,credentials:true}))
app.use("/api/auth",require("./routes/auth.routes"))
app.use("/api/product",customerProtected,require("./routes/product.routes"))
app.use("/api/admin",adminProtected,require("./routes/admin.routes"))
app.use("/api/public",require("./routes/public.routes"))
app.use("/api/customer",customerProtected,require("./routes/customer.routes"))




app.use("*",(req,res)=>{
    res.status(404).json({message:"resourse not found"})
})
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message:"server error"})
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open",()=>{
    console.log("db connected");
    app.listen(process.env.PORT || 5000 ,console.log("server runnings")
    )
})