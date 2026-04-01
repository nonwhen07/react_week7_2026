import { useState, useCallback } from 'react';
import { getAdminProducts } from '@/services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  const getProducts = useCallback(async (page = 1) => {
    const { products, pagination } = await getAdminProducts(page);
    setProducts(products);
    setPageInfo(pagination);
  }, []);

  return {
    products,
    pageInfo,
    getProducts,
  };
};
