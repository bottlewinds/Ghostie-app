import axios from 'axios';

const getAll = async () => {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/categories/?offset=5&limit=5');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories: ', error);
    throw error;
  }
};


export const categoriesService = {
    getAll,
  }