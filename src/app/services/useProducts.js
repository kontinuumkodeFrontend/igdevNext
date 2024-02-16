import { useQuery } from 'react-query';
import axios from 'axios';
import { CONSUMER_KEY, CONSUMER_SECRET, WOOCOMERCE_API_URL } from './Url';


const fetchProducts = async () => {
  const limit = 100; 
  const apiUrlWithLimit = `${WOOCOMERCE_API_URL}?per_page=${limit}`
  const response = await axios.get(apiUrlWithLimit, {
    auth: {
      username: CONSUMER_KEY,
      password: CONSUMER_SECRET,
    },
  });
  return response.data;
};

export function useProducts() {
  return useQuery('products', fetchProducts);
}
