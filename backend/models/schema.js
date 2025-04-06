//  schema 

const  mongoose  = require("mongoose");

const schema = new mongoose.schema({
    url : {type : string , required : true , unique : true } , 
    description  : {type : string } , 
    createdAt : {type : date , default : Date.now}
}); 

module.exports = mongoose.model('Reel' , schema) ; 
