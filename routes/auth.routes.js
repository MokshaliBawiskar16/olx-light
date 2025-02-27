const { registerAdmin, loginAdmin, verifyOtp, logoutAdmin, registerCustomer, loginCustomer, logoutCustomer } = require("../controller/auth.controler")

const route=require("express").Router()
route
.post("/register-admin",registerAdmin)
.post("/login-admin",loginAdmin)
.post("/verify-admin-otp",verifyOtp)
.post("/logout-admin",logoutAdmin)

.post("/register-customer",registerCustomer)
.post("/login-customer",loginCustomer)
.post("/logout-customer",logoutCustomer)

module.exports=route