// authRoutes.js

const express = require('express');
const passport = require('passport');
const config = require('../config/config');
const { twitterAuth, twitterCallback } = require('../controllers/authController');

const router = express.Router();

// Initialize Twitter OAuth authentication
router.get('/twitter', twitterAuth);

// Handle Twitter OAuth callback
router.get('/twitter/callback', twitterCallback);

module.exports = router;
