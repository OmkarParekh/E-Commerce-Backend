const mongoose=require('mongoose')
const Schema=mongoose.Schema;


// Craete Structure

const authSchema=new Schema({
   
     Username:{
          type:String,
          required:true
     },
     Password:{
          type:String,
          required:true
     },
     Email:{
        type:String,
        required:false
     },
     Phonenumber:{
          type:String,
          required:true
     }
     
   
});
mongoose.model('Auth',authSchema)