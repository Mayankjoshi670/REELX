// # Route for admin-related actions
const express = require('express') ; 
const {postReel}   = require('../controllers/adminController') ; 
const adminAuth  = require('../middleware/adminAuth')
const router = express.Router() ;
router.post('/post' ,adminAuth ,  postReel) ; // 🔐 Secured route

module.exports  = router ; 