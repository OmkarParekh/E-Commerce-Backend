const router=require('express').Router()


// mongoose
const mongo=require('mongoose')
    

// fetching the data from data base
router.get('/',Authentication,(req,res)=>{
     console.log(global.name)
     mongo.connect(`mongodb+srv://king:king@cluster0-igyq9.mongodb.net/${global.name}?retryWrites=true&w=majority`,{useNewUrlParser: true,useUnifiedTopology: true})

     // model for Mongo db
     require('../model/admin')
     const Admin=mongo.model('Seller')

     
    
     Admin.find({})
     .then(data=>res.send(data))
     .catch(err=>console.log(err))
 })



 function Authentication(req,res,next){
     const user=req.header('Username')
     const password=req.header('Password')
     global.name=user
     console.log(user,password)
     //mongodb for auth
     const conn3=mongo.createConnection('mongodb+srv://king:king@cluster0-igyq9.mongodb.net/Authentication?retryWrites=true&w=majority')
     require('../model/Athentication')
     const Auth=conn3.model('Auth')
   
     Auth.find({Username:user,Password:password})
     .then((data)=>{
           if(data.length===0){
               res.sendStatus(401).send('UnAuthorized')

          }
          else{
               
               next()
          }
     })
     .catch((error)=>{
          res.send(error)

     })

     
}


 
module.exports=router;