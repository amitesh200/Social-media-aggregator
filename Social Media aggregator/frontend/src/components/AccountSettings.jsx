// AccountSettings.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountSettings = () => {
  const [user, setUser] = useState(null);
  const [twitterIntegration, setTwitterIntegration] = useState(false); // Example for Twitter integration

  useEffect(() => {
    // Fetch user data on component mount
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); // Replace with your backend API endpoint
        setUser(response.data);
        setTwitterIntegration(response.data.twitterId ? true : false); // Check if user has Twitter integration
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleToggleTwitterIntegration = async () => {
    try {
      if (twitterIntegration) {
        // Remove Twitter integration
        await axios.delete('/api/twitter/disconnect'); // Replace with your backend API endpoint for disconnecting Twitter
        alert('Twitter integration disconnected successfully!');
        setTwitterIntegration(false);
      } else {
        // Initiate Twitter integration (OAuth flow)
        window.location.href = '/api/twitter/connect'; // Redirect to backend route for connecting Twitter
      }
    } catch (error) {
      console.error('Error toggling Twitter integration:', error);
      alert('Failed to toggle Twitter integration. Please try again.');
    }
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      
      {user && (
        <div>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user info fields as needed */}

          <div>
            <h3>Social Media Integrations</h3>
            <p><strong>Twitter:</strong> {twitterIntegration ? 'Connected' : 'Not Connected'}</p>
            <button onClick={handleToggleTwitterIntegration}>
              {twitterIntegration ? 'Disconnect Twitter' : 'Connect Twitter'}
            </button>
            {/* Add buttons or controls for other social media integrations (Facebook, Instagram, etc.) */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;
