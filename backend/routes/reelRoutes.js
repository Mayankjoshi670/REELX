// # Route for fetching reels

const express = require('express') ; 
const {getUnseendedReels} = require('../controllers/reelController') ; 
const { route } = require('./adminRoutes');

const router = express.Router() ; 

router.get('/get' , getUnseendedReels) ; 

module.exports = router ; 