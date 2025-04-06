//  schema 

const  mongoose  = require("mongoose");

const schema = new mongoose.Schema({
    url : {type : String , required : true , unique : true } , 
    description  : {type : String } , 
    createdAt : {type : Date , default : Date.now}
}); 

module.exports = mongoose.model('Reel' , schema) ; 
