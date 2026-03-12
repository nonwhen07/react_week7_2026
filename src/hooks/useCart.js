import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCart } from '@/services/cartService';
import { updateCartData } from '@/redux/cartSlice';
import { useToast } from '@/hooks/useToast';
import { handleApiError } from '@/utils/apiErrorHandler';

export const useCart = () => {
  // 初始化 dispatch
  const dispatch = useDispatch();
  const { errorToast } = useToast();

  // 畫面渲染後初步載入購物車
  useEffect(() => {
    const loadCart = async () => {
      try {
        const carts = await getCart();
        dispatch(updateCartData(carts)); //將異動過後的購物車資料加入至store
      } catch (error) {
        // handleApiError 處理 error並在無法判斷時代入預設
        const errorMessage = handleApiError(error, null, '購物車資料匯入失敗，請稍後再試。');
        errorToast(errorMessage);
      }
    };

    loadCart();
  }, [dispatch, errorToast]);
};
