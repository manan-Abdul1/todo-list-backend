const mongoose = require("mongoose");
var mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL, {useUnifiedTopology: true , useNewUrlParser: true}); 

var connection = mongoose.connection

connection.on('connected', ()=>{
    console.log("MongoDb Connection Success")
})
connection.on('error',()=>{
    console.log('MongoDb Connection Failed')
})
module.exports = mongoose