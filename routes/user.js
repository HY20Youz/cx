const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {User , validateUpdateUser} = require("./../models/user");
const {verifyTokenAndAuthorization , verifyTokenAndAdmin} = require("./../middlewares/verifyToken");
const multer = require('multer');
const path = require('path');
const fs = require('fs')
/**
 * @desc Get All Users
 * @route /api/users
 * @method GET
 * @access private (only admin)
 */
router.get("/" , verifyTokenAndAdmin , asyncHandler (async (req,res)=> {
    const users = await User.find().select("-password");
    res.status(200).json(users)
}))

/**
 * @desc Get User By Id
 * @route /api/users/:id
 * @method GET
 * @access private (only admin & user himself)
 */
router.get("/:id", asyncHandler(async (req, res) => {
    try {
        // Find the user by ID and populate the mainWallet and ExWallet fields with the associated Wallet details
        const user = await User.findById(req.params.id)
            .select("-password")  // Exclude the password field
            .populate({
                path: 'mainWallet ExWallet',  // Populate both wallets
                populate: {
                    path: 'coins.networks',  // Further populate the coins and networks inside the wallets
                }
            });

        // If user is found, return the user object
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
}));
/**
 * @desc Delete User
 * @route /api/users/:id
 * @method DELETE
 * @access private (Only admin & user himself)
 */
router.delete("/:id" , verifyTokenAndAuthorization , asyncHandler( async (req,res)=> {
    const user = await User.findById(req.params.id).select("-password");
    if(user){
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"user has been delelted successfully"})
    } else {
        res.status(404).json({message:"user not found "})
    }
}))


const storage = multer.diskStorage({
    destination: function(req, file ,cb){
        cb(null , path.join(__dirname , '../usersImages'))
    },
    filename:function(req ,file , cb){
        cb(null , file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage}).single('file');



/**
 * @desc Update Email & password
 * @route /api/users/:id
 * @method PUT
 * @access private
 */
router.put("/:id", upload ,asyncHandler( async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash( req.body.password , salt );
    }

    if(req.file){
       if(user.userImage){
        fs.unlink(path.join(__dirname, "../usersImages", user.userImage), (err) => {
            if (err) {
                console.error("Error deleting image:", err);
            }
        });
       }
    const updatedUser = await User.findByIdAndUpdate(req.params.id , {
        $set:{
            userImage:req.file.filename
        }
    } , { new: true }).select("-password");

    return res.status(200).json(updatedUser);
}
}))
/**
 * @desc Update UserName
 * @route /api/users/userdata/:id
 * @method PUT
 * @access private
 */
router.put('/userdata/:id' , verifyTokenAndAuthorization , asyncHandler( async(req,res)=>{
    if(req.user.id !== req.params.id){
        return req.status(403).json({message: "You're not allowed , You only can update your profile ;) "})
    }
    const {error} = validateUpdateUser(req.body);
    if(error){
        return res.status(400).json({message: error.details[0].message});
    }
     await User.findByIdAndUpdate(req.params.id , {
        $set:{
            username:req.body.name,
            aboutMe : req.body.aboutU,
            phoneNumber:req.body.phone,
            address:req.body.address,
            dateOfBrith:req.body.brith
        }
    } ,{new:true})
    res.status(200).json({message:"Updated Successfully"})
}))

module.exports = router