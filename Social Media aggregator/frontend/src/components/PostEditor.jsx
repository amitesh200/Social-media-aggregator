// PostEditor.jsx

import React, { useState } from 'react';
import axios from 'axios';

const PostEditor = () => {
  const [tweetText, setTweetText] = useState('');

  const handlePostTweet = async () => {
    try {
      if (!tweetText.trim()) {
        alert('Tweet text cannot be empty');
        return;
      }

      // Make POST request to backend to post tweet
      await axios.post('/api/twitter/post', { tweetText }); // Replace with your backend API endpoint

      alert('Tweet posted successfully!');
      setTweetText('');
    } catch (error) {
      console.error('Error posting tweet:', error);
      alert('Failed to post tweet. Please try again.');
    }
  };

  return (
    <div className="post-editor">
      <h2>Compose New Tweet</h2>
      <textarea
        rows="4"
        cols="50"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        placeholder="What's on your mind?"
      ></textarea>
      <br />
      <button onClick={handlePostTweet}>Post Tweet</button>
    </div>
  );
};

export default PostEditor;
