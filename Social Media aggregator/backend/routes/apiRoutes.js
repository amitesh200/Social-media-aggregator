// apiRoutes.js

const express = require('express');
const router = express.Router();
const { fetchTwitterTimeline } = require('../controllers/feedController');
const { postTweet } = require('../controllers/postController');

// Middleware to ensure user is authenticated (optional)
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login'); // Redirect to login page if not authenticated
};

// Route to fetch user's Twitter timeline
router.get('/twitter/timeline', isAuthenticated, async (req, res) => {
  try {
    const userId = req.user._id; // Assuming user ID is stored in req.user
    const tweets = await fetchTwitterTimeline(userId);
    res.json(tweets);
  } catch (error) {
    console.error('Error fetching Twitter timeline:', error);
    res.status(500).json({ error: 'Failed to fetch Twitter timeline' });
  }
});

// Route to post a tweet
router.post('/twitter/post', isAuthenticated, async (req, res) => {
  try {
    const userId = req.user._id; // Assuming user ID is stored in req.user
    const { tweetText } = req.body;

    if (!tweetText) {
      return res.status(400).json({ error: 'Tweet text is required' });
    }

    const tweet = await postTweet(userId, tweetText);
    res.json(tweet);
  } catch (error) {
    console.error('Error posting tweet:', error);
    res.status(500).json({ error: 'Failed to post tweet' });
  }
});

module.exports = router;
