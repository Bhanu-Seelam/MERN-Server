/*this is my Mongodb Schema /model/userSchema.js
const mongoose = require('mongoose');
const userSchema =new mongoose.Schema({
    name:{type:String,required:true}, 
    email:{type:String,required:true},
    password:{type:String,required:true}
})
module.exports= mongoose.model('User',userSchema);
*/

//this is my Mongodb Schema /model/userSchema.js
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
 name:{type:String,required:true}, 
 email:{type:String,required:true},
 password:{type:String,required:true}})
module.exports= mongoose.model('User',userSchema);