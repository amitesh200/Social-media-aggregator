// helpers.js

const axios = require('axios');

// Function to make GET request
const getRequest = async (url, headers = {}) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error making GET request:', error);
    throw error;
  }
};

// Function to make POST request
const postRequest = async (url, data, headers = {}) => {
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
};

module.exports = {
  getRequest,
  postRequest,
  // Add more utility functions as needed
};
