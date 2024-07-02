// Dashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch user data and tweets on component mount
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); // Replace with your backend API endpoint
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchTwitterTimeline = async () => {
      try {
        const response = await axios.get('/api/twitter/timeline'); // Replace with your backend API endpoint
        setTweets(response.data);
      } catch (error) {
        console.error('Error fetching Twitter timeline:', error);
      }
    };

    fetchUserData();
    fetchTwitterTimeline();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard, {user && user.username}</h1>
      
      <div className="user-info">
        {user && (
          <div>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Twitter ID:</strong> {user.twitterId}</p>
            {/* Add more user info fields as needed */}
          </div>
        )}
      </div>

      <div className="tweets">
        <h2>Your Latest Tweets:</h2>
        <ul>
          {tweets.map(tweet => (
            <li key={tweet.id}>
              <p>{tweet.text}</p>
              {/* Display other tweet information as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
