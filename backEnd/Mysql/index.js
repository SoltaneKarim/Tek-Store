const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tekstore'
  };

const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("db MYSQL connected")
    }
})

const getAllProducts = (callback) => {
   
};



module.exports= { getAllProducts };