// apiService.js

import axios from 'axios';

const baseURL = 'http://localhost:5000';  // Replace with your backend server URL

const apiService = axios.create({
  baseURL,
  timeout: 10000,  // Timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle GET requests
export const get = async (url) => {
  try {
    const response = await apiService.get(url);
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

// Function to handle POST requests
export const post = async (url, data) => {
  try {
    const response = await apiService.post(url, data);
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

// Function to handle PUT requests
export const put = async (url, data) => {
  try {
    const response = await apiService.put(url, data);
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

// Function to handle DELETE requests
export const del = async (url) => {
  try {
    const response = await apiService.delete(url);
    return response.data;
  } catch (error) {
    handleAPIError(error);
    throw error;
  }
};

// Function to handle API errors
const handleAPIError = (error) => {
  console.error('API Error:', error);
  // Add custom error handling logic as needed (e.g., show error messages to user)
};

export default apiService;
