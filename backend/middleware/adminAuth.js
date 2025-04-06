//  only admin can send the link  
module.exports = (req , res , next)=>{
    const {name , pass } =req.body ; 
    if(!name || ! pass  || name != process.env.ADMIN_NAME || pass != process.env.ADMIN_PASS){
        return res.status(401).json({
            message  :"unouthorized user Name  or Pass "
        })
        next () ; 
    }
}