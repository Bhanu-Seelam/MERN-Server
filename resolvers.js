/*const User = require('./model/userSchema');

const resolvers = {
  Query: {
    getUsers: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const { name, email, password } = input;
        if (!name || !email || !password) {
          throw new Error('Enter all the fields');
        }
        const newUser = new User({ name, email, password });
        return await newUser.save();
      } catch (err) {
        throw new Error(err);
      }
    },
    changepass: async (_, { id, newPassword }) => {
      try {
        const user = await User.findById(id);
        if (!user) {
          throw new Error('User not found');
        }
        user.password = newPassword;
        return await user.save();
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = resolvers;
*/
//resolvers.js 
const User = require('./model/userSchema');//parent
const resolvers ={
 Query:{
 getUser: async(_,{id})=>{return await User.findById(id);},
 getUsers: async()=>{return await User.find();},
 },
 Mutation:{
 createUser: async (_,{input})=>{
 const {name,email,password}= input;
 try{
 if(!name || !email || !password){
 throw new Error("Please enter all the fields");
 }
 const newUser = new User({name,email,password});
 return await newUser.save();
 }catch(err){ throw Error(`Error Creating User: ${err}
`)}
 },
 changePass:async(_,{id,password})=>{
 
 try{
 
 const usernew= await User.findByIdAndUpdate(id,
{password:password},{new:true});
 if(!usernew){
 throw new Error("User not found");
 }
 console.log(usernew);
 return usernew;
 }catch(err){throw Error(`Error Occured :${err}`)}
 
 },
 },
 User:{
 email:(parent)=> parent.email || '',
 name:(parent)=> parent.name || '',
 password:(parent)=> parent.password || ''
 },
};module.exports=resolvers;//export resolver