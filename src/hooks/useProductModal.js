import { useState } from 'react';
import { createProduct, updateProduct } from '@/services/productService';

// hooks
import { useToast } from '@/hooks/useToast';
// utils
import { handleApiError } from '@/utils/apiErrorHandler';

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
// 為了避免在多個地方重複定義 DEFAULT_PRODUCT，將其抽離到 constants/productConstants.js 中，
import { DEFAULT_PRODUCT } from '@/constants/productConstants';

export const useProductModal = (getProducts, pageInfo, setIsScreenLoading) => {
  const { success, showError } = useToast();
  // 資料狀態
  const [tempProduct, setTempProduct] = useState(DEFAULT_PRODUCT);
  const [modalMode, setModalMode] = useState(null);
  // Modal 錯誤訊息狀態
  const [modalError, setModalError] = useState('');
  // 管理Modal元件開關
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Modal 控制
  // imagesUrl雙重確認函式 - 確保即使api回傳的product物件中imagesUrl為空陣列或非陣列，
  // 也能正確設定tempProduct的imagesUrl為至少包含一個空字串的陣列，避免後續操作出錯
  const normalizeProduct = (p = {}) => ({
    ...DEFAULT_PRODUCT,
    ...p,
    imagesUrl: Array.isArray(p.imagesUrl) && p.imagesUrl.length > 0 ? [...p.imagesUrl] : [''],
  });

  // ProductModal
  const handleOpenProductModal = (mode, product = DEFAULT_PRODUCT) => {
    setModalMode(mode);

    if (mode === 'create') {
      setTempProduct({ ...DEFAULT_PRODUCT });
    } else {
      setTempProduct(normalizeProduct(product));
    }
    setIsProductModalOpen(true);
  };

  // Modal表單
  const handleModalInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTempProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : name === 'rating' ? Number(value) : value,
    }));
  };
  const handleImageChange = (e, index) => {
    const { value } = e.target;

    setTempProduct((prev) => {
      const images = [...prev.imagesUrl];
      images[index] = value;

      return {
        ...prev,
        imagesUrl: images,
      };
    });
  };
  // Modal表單 - 新增、刪除副圖
  const handleAddImage = () => {
    setTempProduct((prev) => ({
      ...prev,
      imagesUrl: [...prev.imagesUrl, ''],
    }));
  };
  const handleDeleteImage = () => {
    setTempProduct((prev) => ({
      ...prev,
      imagesUrl: prev.imagesUrl.slice(0, -1),
    }));
  };

  // 更新產品 - 包含前端驗證、錯誤訊息顯示
  const handleUpdateProduct = async () => {
    setIsScreenLoading(true);
    setModalError('');

    const validationError = validateProduct(tempProduct);

    if (validationError) {
      setModalError(validationError);
      setIsScreenLoading(false);
      return;
    }

    try {
      if (modalMode === 'create') {
        await createProduct(formatProductData(tempProduct));
      } else {
        await updateProduct(tempProduct.id, formatProductData(tempProduct));
      }
      await getProducts(pageInfo.current_page || 1);

      setIsProductModalOpen(false); // 成功才關閉 Modal

      success(modalMode === 'create' ? '產品新增成功！' : '產品更新成功！'); // 成功訊息
    } catch (error) {
      const errorMessage = handleApiError(error, null, '更新產品失敗，請稍後再試。');
      showError(errorMessage);
    } finally {
      setIsScreenLoading(false);
    }
  };

  // 傳值data時，需包裝成物件{data: {}}，
  // 並將tempProduct的origin_price、price轉換為數字，is_enabled轉換為數字0或1
  const formatProductData = (product) => ({
    ...product,
    origin_price: Number(product.origin_price),
    price: Number(product.price),
    is_enabled: product.is_enabled ? 1 : 0,
  });
  //做前端驗證函式 - 確保必填欄位都有填寫，並回傳對應的錯誤訊息
  const validateProduct = (product) => {
    if (!product.title) return '請輸入產品標題';
    if (!product.category) return '請輸入產品分類';
    if (!product.unit) return '請輸入產品單位';
    if (product.origin_price === '' || Number(product.origin_price) <= 0) return '請輸入原價';
    if (product.price === '' || Number(product.price) <= 0) return '請輸入售價';

    return null;
  };

  return {
    tempProduct,
    setTempProduct,
    modalError,
    modalMode,
    // openModal,
    handleOpenProductModal,
    handleModalInputChange,
    handleImageChange,
    handleAddImage,
    handleDeleteImage,
    handleUpdateProduct,
    isProductModalOpen,
    setIsProductModalOpen,
  };
};
