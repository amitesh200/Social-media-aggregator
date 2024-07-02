// config.js

// Example configuration file for social media aggregator app

module.exports = {
    // Server configuration
    server: {
      port: process.env.PORT || 5000,
    },
  
    // Database configuration (if applicable)
    database: {
      // Example MongoDB connection string
      mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/social_media_aggregator',
    },
  
    // Social media API keys (replace with your own keys)
    socialMedia: {
      twitter: {
        apiKey: process.env.TWITTER_API_KEY || 'your_twitter_api_key',
        apiSecretKey: process.env.TWITTER_API_SECRET_KEY || 'your_twitter_api_secret_key',
        accessToken: process.env.TWITTER_ACCESS_TOKEN || 'your_twitter_access_token',
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'your_twitter_access_token_secret',
      },
      facebook: {
        appId: process.env.FACEBOOK_APP_ID || 'your_facebook_app_id',
        appSecret: process.env.FACEBOOK_APP_SECRET || 'your_facebook_app_secret',
        accessToken: process.env.FACEBOOK_ACCESS_TOKEN || 'your_facebook_access_token',
      },
      instagram: {
        appId: process.env.INSTAGRAM_APP_ID || 'your_instagram_app_id',
        appSecret: process.env.INSTAGRAM_APP_SECRET || 'your_instagram_app_secret',
        accessToken: process.env.INSTAGRAM_ACCESS_TOKEN || 'your_instagram_access_token',
      },
    },
  
    // Other configurations
    // Add more configurations as needed
  };
  