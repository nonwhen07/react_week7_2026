// import { useState } from 'react';
// import { getAdminProducts } from '@/services/productService';

// import { DEFAULT_PRODUCT } from '@/constants/productConstants';

// Modal 資料狀態的預設值，由於六角API可以彈性新增欄位(rating: 0,)，
// 因此在這裡也要確保即使API回傳的產品物件中沒有rating欄位，
// tempProduct的初始狀態仍然包含rating: 0，避免後續操作出錯
// const DEFAULT_PRODUCT = {
//   imageUrl: '',
//   title: '',
//   category: '',
//   unit: '',
//   origin_price: '',
//   price: '',
//   description: '',
//   content: '',
//   is_enabled: 0,
//   imagesUrl: [''],
//   rating: 0, // ⭐新增
// };

export const useProductModal = () => {
  // // 資料狀態
  // const [tempProduct, setTempProduct] = useState(DEFAULT_PRODUCT);
  // const [modalMode, setModalMode] = useState(null);
  // const getProducts = async (page = 1) => {
  //   const { products, pagination } = await getAdminProducts(page);
  //   setProducts(products);
  //   setPageInfo(pagination);
  // };
  // return {
  //   tempProduct,
  //   modalMode,
  //   getProducts,
  // };
};
