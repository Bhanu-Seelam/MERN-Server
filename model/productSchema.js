//productSchema.js
const mongoose = require('mongoose');
const productSchema =new mongoose.Schema({
    imageURL:{type:String,require:true},
    price:{type:Number,required:true}, 
    name:{type:String,require:true},
    description:{type:String,required:true}
}) 
module.exports= mongoose.model('Product',productSchema);