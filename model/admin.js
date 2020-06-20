const mongoose=require('mongoose')
const Schema=mongoose.Schema;


// Craete Structure

const IdeaSchema=new Schema({
    pid:{
        type:String,
        required:true
    },
     pname:{
          type:String,
          required:true
      },
      price:{
          type:String,
          required:true
      },
      filename:{
        type:String,
        required:false
    },
      path:{
          type:String,
          required:true
      }
     
   
});
mongoose.model('Seller',IdeaSchema)