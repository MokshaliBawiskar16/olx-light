const multer = require("multer")
// multer ka kaam imagte ko =>req.file me daalna
// and bacha huwa data =>req.body me jaat hai

const productStorage = multer.diskStorage({
    filename: (req, file, cb) => { cb(null, file.originalname) }
})
exports.upload = multer({ storage: productStorage }).array("hero", 5) //hero