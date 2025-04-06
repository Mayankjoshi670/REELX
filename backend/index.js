require('dotenv').config() ; 
const express = require('express') ; 
const morgan = require('morgan');


const adminRoute = require('./routes/adminRoutes') ; 
const reelRoute = require('./routes/reelRoutes') ; 

const PORT = process.env.PORT || 5000 ; 
const app =express() ; 
app.use(morgan('dev')) ; 
app.use(express.json()) ; 

app.use('/api/v1/admin' , adminRoute) ; 
app.use('/api/v1/reels' , reelRoute) ;  
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`) ;  
})