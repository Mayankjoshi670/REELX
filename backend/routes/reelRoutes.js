// # Route for fetching reels

const express = require('express') ; 
const {getUnseenUrl} = require('../controllers/reelController') ; 
const { route } = require('./adminRoutes');

const router = express.Router() ; 

router.get('/get' , getUnseenUrl) ; 

module.exports = router ; 