//  connection set up 
const mongoose = require('mongoose') ; 

console.log(process.env.MONGO_URI) ; 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('Mongo is connected')})
.catch((err)=>{console.log('Mongo error ' , err)}) ; 
module.exports= mongoose ; 