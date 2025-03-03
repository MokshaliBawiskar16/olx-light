const expressAsyncHandler = require("express-async-handler")
const jwt=require("jsonwebtoken")


exports.adminProtected = expressAsyncHandler(async (req, res, next) => {
    const token = req.cookies["olx-admin"]
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        req.user = decode._id
        next()
    })
 })

exports.customerProtected = expressAsyncHandler(async (req, res, next) => {
    const token = req.cookies["olx-customer"]
    if (!token) {
        console.log("problem is here");
        
        return res.status(401).json({ message: "no cookie found",token })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        req.loggeduser = decode._id
        next()
    })
 })