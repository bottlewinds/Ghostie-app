import axios from 'axios';

const getAll = async () => {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories: ', error);
    throw error;
  }
};


export const categoriesService = {
    getAll,
  }