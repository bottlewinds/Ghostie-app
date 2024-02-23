import axios from 'axios';

const getByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}&offset=5&limit=5`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products: ', error);
      throw error;
    }
};

const getOne = async (productId) => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`)
      return response.data;
    } catch (error) {
      console.error('Error fetching one product: ', error);
      throw error;
    }
}


export const productService = {
    getByCategory,
    getOne
};