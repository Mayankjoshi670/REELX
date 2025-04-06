require('dotenv').config() ; 
const express = require('express') ; 
const morgan = require('morgan');
const PORT = process.env.PORT || 5000 ; 
const app =express() ; 
app.use(morgan('dev')) ; 
app.use(express.json()) ; 
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`) ;  
})