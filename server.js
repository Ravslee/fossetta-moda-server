const express = require('express');
const bodyParser = require('body-parser');
const dbConfig =require('./config/database.config.js')
const mongoose = require('mongoose');
const app = express();




mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("Successfully connected to the database");    
})
.catch((err)=>{
    console.log("Could not connect to database!");
    // console.error(err);
})

app.use(bodyParser.urlencoded({extented:true}));

app.use(bodyParser.json());

app.get('/',(req,res)=>{

    res.json("Welcome to fosseta moda fashion api");
})

app.listen(3000,()=>{
    console.log("Server running at port 3000");
})

require('./app/routes/product.routes.js')(app);
