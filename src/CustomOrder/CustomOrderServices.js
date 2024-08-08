import axios from 'axios';

const API_URL = 'http://localhost:8080/customOrders';

export const getAllCustomOrders = () => {
  return axios.get(API_URL);
};
export const getBreakfastOptions = () => {
  return axios.get(`${API_URL}/breakfastOptions`);
};

export const getLunchOptions = () => {
  return axios.get(`${API_URL}/lunchOptions`);
};

export const getDinnerOptions = () => {
  return axios.get(`${API_URL}/dinnerOptions`);
};
