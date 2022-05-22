const express = require ('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const cors = require ('cors');

const app = express ();

//routes
const postRoutes = require('./routes/posts');
//app midleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://war:war@library.h0lnx.mongodb.net/Library?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected');
})
.catch((err)=> console.log('DB connsction error',err));
app.listen(PORT, ()=>{
    console.log(`app is running on ${PORT}`);
});