// feedController.js

const Twitter = require('twitter-lite');
const config = require('../config/config');
const User = require('../models/User'); // Assuming User model for MongoDB/Mongoose

// Initialize Twitter client
const twitterClient = new Twitter({
  consumer_key: config.socialMedia.twitter.apiKey,
  consumer_secret: config.socialMedia.twitter.apiSecretKey,
});

// Function to fetch user's timeline tweets
const fetchTwitterTimeline = async (userId) => {
  try {
    // Retrieve user's Twitter access tokens from the database
    const user = await User.findById(userId);
    if (!user || !user.twitterAccessToken || !user.twitterAccessTokenSecret) {
      throw new Error('User Twitter tokens not found');
    }

    // Initialize Twitter client with user-specific tokens
    const userClient = new Twitter({
      access_token_key: user.twitterAccessToken,
      access_token_secret: user.twitterAccessTokenSecret,
    });

    // Fetch user's timeline tweets
    const tweets = await userClient.get('statuses/user_timeline', { count: 10 });

    return tweets;
  } catch (error) {
    console.error('Error fetching Twitter timeline:', error);
    throw error;
  }
};

module.exports = {
  fetchTwitterTimeline,
  // Add functions for fetching feeds from other platforms (Facebook, Instagram, etc.) as needed
};
