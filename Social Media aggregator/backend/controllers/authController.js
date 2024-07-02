// authController.js

const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const config = require('../config/config');
const User = require('../models/User'); // Assuming User model for MongoDB/Mongoose

// Configure Twitter OAuth strategy
passport.use(new TwitterStrategy({
    consumerKey: config.socialMedia.twitter.apiKey,
    consumerSecret: config.socialMedia.twitter.apiSecretKey,
    callbackURL: '/auth/twitter/callback', // Adjust the callback URL based on your setup
  },
  async (token, tokenSecret, profile, done) => {
    try {
      // Check if user exists in the database
      let user = await User.findOne({ twitterId: profile.id });

      if (!user) {
        // If user doesn't exist, create a new user in the database
        user = new User({
          twitterId: profile.id,
          username: profile.username,
          displayName: profile.displayName,
          // Add more fields as needed
        });
        await user.save();
      }

      // Pass user object to passport callback
      return done(null, user);
    } catch (err) {
      console.error('Error during Twitter authentication:', err);
      return done(err);
    }
  }
));

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.error('Error deserializing user:', err);
    done(err);
  }
});

// Authentication routes
module.exports = {
  twitterAuth: passport.authenticate('twitter'),
  twitterCallback: passport.authenticate('twitter', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  }),

  // Add more authentication methods/routes as needed
};
