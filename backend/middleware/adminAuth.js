// middleware/adminAuth.js
module.exports = (req, res, next) => {
    const { name, pass } = req.body;
    console.log(name + pass )
    console.log( process.env.ADMIN_NAME +  process.env.ADMIN_PASS)
    if (!name || !pass || name !== process.env.ADMIN_NAME || pass !== process.env.ADMIN_PASS) {
      return res.status(401).json({
        message: "Unauthorized user name or password" , 
      });
    }
  
    next();
  };
  