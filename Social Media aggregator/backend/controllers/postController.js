// postController.js

const Twitter = require('twitter-lite');
const config = require('../config/config');
const User = require('../models/User'); // Assuming User model for MongoDB/Mongoose

// Initialize Twitter client
const twitterClient = new Twitter({
  consumer_key: config.socialMedia.twitter.apiKey,
  consumer_secret: config.socialMedia.twitter.apiSecretKey,
});

// Function to post a tweet
const postTweet = async (userId, tweetText) => {
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

    // Post a tweet
    const tweet = await userClient.post('statuses/update', {
      status: tweetText,
    });

    return tweet;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error;
  }
};

module.exports = {
  postTweet,
  // Add functions for posting to other platforms (Facebook, Instagram, etc.) as needed
};
