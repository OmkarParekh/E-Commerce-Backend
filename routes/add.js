const router=require('express').Router()
const Multer=require('multer')
const path=require('path')
// json web token
const jwt=require('jsonwebtoken')
// mongo
const mongo=require('mongoose')
// mongo.connect('mongodb+srv://king:king@cluster0-igyq9.mongodb.net/seller?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true})
// // model for Mongo db
// require('../model/admin')
// const Admin=mongo.model('Seller')
const conn1=mongo.createConnection('mongodb+srv://king:king@cluster0-igyq9.mongodb.net/seller?retryWrites=true&w=majority')
require('../model/admin')
const Admin=conn1.model('Seller')




// Storage
const storage=Multer.diskStorage({
     destination : './public/uploads',
     filename : function(req , file , cb){
          cb(null,file.fieldname + '-' + Date.now() +
          path.extname(file.originalname));
     }
})
// init uploads
const upload = Multer({
     storage:storage
}).single('file')
// image upload
router.post('/',Authentication,(req,res)=>{
     upload(req,res,(err)=>{
          if(err){
               res.send(err)
          }
          else{
               console.log(req.file)
               global.file=req.file.filename
                }
     })
  
})

// Infromation of product
router.post('/data',Authentication,(req,res)=>{
     const seller={
          pid:Date.now(),
          pname:req.query.Pname,
          price:req.query.Price,
          filename:global.file,
          path:`https://mye-com.herokuapp.com/uploads/${global.file}`,
        
          
     }
     console.log(seller)
     new Admin(seller)
     .save()
     .then(con=>{
         console.log('data is submitted')
     })
     const conn2=mongo.createConnection(`mongodb+srv://king:king@cluster0-igyq9.mongodb.net/${global.name}?retryWrites=true&w=majority`)
     require('../model/user')
     const user=conn2.model('data')
     new user(seller)
     .save()
     .then(con=>{
          console.log('Data has been Submitted to the Users Account')
     })
    
})
// Authtication
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