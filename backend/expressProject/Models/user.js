const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    // age:Number,
    // Gender:{
    //     type:String,
    //     enum:['Male','Female','Other']
    // }
    
})
const userModel =  mongoose.Model(user,userSchema);
module.exports = userModel;