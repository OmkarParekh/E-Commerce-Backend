const router=require('express').Router()


// mongoose
const mongo=require('mongoose')
mongo.connect('mongodb+srv://king:king@cluster0-igyq9.mongodb.net/seller?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true})

// model for Mongo db
require('../model/admin')
const Admin=mongo.model('Seller')

// fetching the data from data base
router.get('/',(req,res)=>{
    
     Admin.find({})
     .then(data=>res.send(data))
     .catch(err=>console.log(err))
 })


 
module.exports=router;