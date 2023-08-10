const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
//uncomment to use mongodb
// const db = require('./mongoDb')
// uncomment to use MYSQL 
// const db = require("./Mysql")
app.use(cors());



app.get('/api/products',(req,res)=> {
   
})






app.listen(port, ()=>{
console.log(`listening on ${port}`);
})