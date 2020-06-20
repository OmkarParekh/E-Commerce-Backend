
const Express=require('express')
// fs
var fs = require('fs');
var dir = './public/';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
// Mongoose init
const mongo=require('mongoose')
mongo.connect('mongodb+srv://king:king@cluster0-igyq9.mongodb.net/seller?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true})
.then(res=>console.log('Database Connected'))
.catch(err=>console.log(err))



// Listening on port
const app=Express()
app.listen(process.env.PORT || 3000)

// For Cors Error
const cors=require('cors')
app.use(cors())


// Routes
// Registration of seller
app.use('/registration',require('./routes/regis'))

// Add the product 
app.use('/uploads',require('./routes/add'))
//  Global fetch 
app.use('/gfetch',require('./routes/Global_fetch'))
// Local fetch
app.use('/lfetch',require('./routes/Local_fetch'))
// delete data
app.use('/delete',require('./routes/delete'))

// middleware status 
app.use((err, req, res, next) => res.status(err.statusCode).send(err));


// public Folder set static
app.use(Express.static(__dirname+'/public'))



