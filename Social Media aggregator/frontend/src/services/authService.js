// authService.js

import axios from 'axios';

const baseURL = 'http://localhost:5000';  // Replace with your backend server URL

const authService = axios.create({
  baseURL,
  timeout: 10000,  // Timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to login user
export const login = async (username, password) => {
  try {
    const response = await authService.post('/api/auth/login', { username, password });
    const { token } = response.data;
    localStorage.setItem('token', token); // Store token in localStorage
    return token;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

// Function to logout user
export const logout = () => {
  localStorage.removeItem('token'); // Remove token from localStorage
};

// Function to check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

// Function to get authentication token
export const getToken = () => {
  return localStorage.getItem('token');
};

// Function to handle authentication errors
const handleAuthError = (error) => {
  console.error('Authentication Error:', error);
  // Add custom error handling logic as needed (e.g., redirect to login page)
};

export default authService;
