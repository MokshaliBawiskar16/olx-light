const Product = require("../modal/Product")
const path =require("path")
const { upload } = require("../utils/uplod")

const jwt=require("jsonwebtoken")

const cloudinary = require("cloudinary").v2
cloudinary.config({
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    cloud_name:process.env.CLOUDINARY_CLOUDE_NAME,
})
exports.addProduct=async(req,res)=>{
    upload(req, res, async err => {
        try {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload" ,err})
        }
        if (req.files) {

            // const allImages=[]
            // for (const item of req.files) {
            //    const {secure_url}=await(cloudinary.uploader.upload(item.path))
            //    allImages.push(secure_url)
            // } 
            // console.log(allImages);
            

            // promise all👇 uparse ye jaada beter hai
            const allImages=[]
            const heros=[]
            for (const item of req.files) {
               allImages.push(cloudinary.uploader.upload(item.path))
            } 
           const data= await Promise.all(allImages)
           for (const item of data) {
            heros.push(item.secure_url)
               console.log(item.secure_url);
           }
             // promise all end

                    await Product.create({...req.body,hero: heros,seller: req.loggeduser})
            
                    res.json({ message: "product add success" })

        }else{
            return res.status(400).json({ message: "hero image is required" })

        }
    } catch (error) {
            console.log(error)
            res.json({message:"something went wrong"})
    }
       // console.log(req.body);
        // console.log(req.file)//multer.single()
       // console.log(req.files)//multer.array()

    })
}
exports.getProduct=async(req,res)=>{
    const result =await Product.find({seller:req.loggeduser})
    res.json({mesage:"product get success",result})
}
exports.updateProduct=async(req,res)=>{
    /*
     name:""
    hero:["img1","img2","ing3","ing4"]
    step 1 : delete  ,"img2","ing3" cloudinary req.body.remove
    step 2 :uplod new image cloudinary req.files
    step 3 :uplod database findbyIdAndUpdate() hero :["img1","new img","ing4"]

    */

    // upload(req,res,async err=>{
    //     if (err) {
    //         console.log(err);
    //         return res.status(400).json({message:"unable to uplod"})
            
    //     }
    //     // console.log(req.body);
    //     // console.log(req.files);

    //     if (req.body.remove) {
    //         // remove old image
    //         await cloudinary.uploader.destroy(path.basename(req.body.remove))
    //     } 
    //     const heros=[]
    //     if (req.files) {
    //         // uplod new image
    //         const allImages=[]
    //         for (const item of req.files) {
    //             allImages.push(cloudinary.uploader.upload(item.path))
    //         }
    //         const data= await Promise.all(allImages)
    //         for (const item of data) {
    //             heros.push(item.secure_url)
    //         }
    //     }
    //     await Product.findByIdAndUpdate(req.params.productId , { ...req.body, hero: heros})
    //     res.json({mesage:"product update success"})
    // })
    upload(req,res,async err=>{
 try {
          console.log(req.files);
          
    //    agar new img dalni hai to ye wala uplod honga if
    const allImages=[]
        if (req.files && req.files.length > 0) {  //only data change kela tr files=[] array
                for (const item of req.files) {
                    console.log(item.path)
                    
                   const {secure_url}= await cloudinary.uploader.upload(item.path)
                   allImages.push(secure_url)
                }
                //only uplod new image
        }
        const oldProduct=await Product.findById(req.params.productId)
        // agar remove karne hai to ye wala run honga if
         if (req.body.remove) {
            const result=oldProduct.hero.filter(item=>!req.body.remove.includes(item))
            oldProduct.hero=result
             //image remove
             console.log("image remove");
             if (typeof req.body.remove === "string") {
                 await cloudinary.uploader.destroy(path.basename(req.body.remove,path.extname(req.body.remove)))
                
             } else {
                for (const item of req.body.remove) {
                    
                    await cloudinary.uploader.destroy(path.basename(item,path.extname(item)))
                }
             }
         }
            // ye har baar run honga
        await Product.findByIdAndUpdate(req.params.productId, {...req.body,hero: [...oldProduct.hero,...allImages]})
        res.json({message:"product update succes"})
    } catch (error) {
          console.log(error);
          res.status(400).json({message:"something went wrong"})
            
    }})
}
exports.deleteProduct=async(req,res)=>{
    const result = await Product.findById(req.params.productId)
    //steep 1 cloudinary/aws s3
    for (const item of result.hero) {
        // destroy la 1st hota hai item n 2nd hai jo delete karna hai 
        // path.extname(item) ye retrunnkarta hai ".png" yane EXTENSHION
        await cloudinary.uploader.destroy(path.basename(item,path.extname(item)))
    }
    // step 2 database
    await Product.findByIdAndDelete(req.params.productId)
    res.json({ message: "product delete success" })
}