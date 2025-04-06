// # Route for admin-related actions
// routes/adminRoutes.js
const express = require('express');
const router = express.Router();

const { postReel } = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');

router.post('/post', adminAuth, postReel);

module.exports = router;
