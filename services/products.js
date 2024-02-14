import axios from 'axios';

const getByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products: ', error);
      throw error;
    }
};

export const productService = {
    getByCategory
};