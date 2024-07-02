// Notifications.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications on component mount
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications'); // Replace with your backend API endpoint
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      
      {notifications.length === 0 ? (
        <p>No notifications to display</p>
      ) : (
        <ul>
          {notifications.map(notification => (
            <li key={notification._id}>
              <p><strong>{notification.title}</strong></p>
              <p>{notification.message}</p>
              {/* Display additional notification information as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
