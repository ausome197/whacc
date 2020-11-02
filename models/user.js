const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    pic:{
        type: String,
        default: "https://res.cloudinary.com/matsuzakax/image/upload/v1604202953/user_xmpde3.png"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User",userSchema)