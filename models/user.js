const mongoose = require("mongoose");
const Joi = require("joi");

// User Schema
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minlength: 4,
            maxlength: 100
        },
        username: {
            type: String,
            required: true,
            trim: true,
            minlength: 4,
            maxlength: 20
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        userImage: {
            type: String,
            required: false
        },
        spotBalance: {
            type: Number,
            default: 0
        },
        futureAccount: {
            type: Number,
            default: 0
        },
        mainWallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wallet'  // Reference to Wallet model
        },
        ExWallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wallet'  // Reference to Wallet model
        },
        ActiveAccount: {
            type: Boolean,
            default: false
        },
        notifications: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Notification'
        }],
    },
    {
        timestamps: true
    }
);

// Validate Register User
function ValidateRegisterUser(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(4).max(100).required().email(),
        username: Joi.string().trim().min(4).max(20).required(),
        password: Joi.string().min(8).required(),
    });
    return schema.validate(obj);
}

// Validate Login User
function ValidateLoginUser(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(4).max(100).required().email(),
        password: Joi.string().min(8).required()
    });
    return schema.validate(obj);
}

// Validate Update User
function validateUpdateUser(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(4).max(100).email(),
        name: Joi.string().trim().min(4).max(20),
        password: Joi.string().min(8),
        phone: Joi.number().min(10),
        address: Joi.string().min(5),
        aboutU: Joi.string().min(1).max(40),
        brith: Joi.string()
    });
    return schema.validate(obj);
}

// User Model
const User = mongoose.model("User", userSchema);

// Export The Functions and UserSchema
module.exports = {
    User,
    validateUpdateUser,
    ValidateLoginUser,
    ValidateRegisterUser
};
