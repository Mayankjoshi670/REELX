const Reel = require('../models/schema') ; 

const addReel = async (req  , res )=>{
    try {
    const {url , description } = req.body  ;
     const newReel = new Reel({url , description}) ; 
     await newReel.save()  ;
        res.status(201).json({message : " reel added sucessfully " , reel : newReel}) ; 
    }
    catch (err){
        res.status(500).josn({message : "error while adding the reel " , error : err.message }) ; 
    }
};