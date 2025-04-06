const Reel = require('../models/schema') ; 
 
  const getUnseenUrl = async(req , res )=>{
     try{
        const {viewedReelId  = [] , limit = 20 }= req.body ; 
        const unseenReels = await Reel.find({
            _id : {$nin  : viewedReelId}
        }).limit(limit) ; 
        res.status(200).json(unseenReels)
     }
     catch(err){
        res.status(500).json({message : "error in fetching reels" , error : err.message}) ; 
     }
}
module.exports = {getUnseenUrl}