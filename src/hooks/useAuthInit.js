import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getToken } from '@/utils/auth';
import { checkAuth } from '@/services/authService';
import { loginSuccess, logoutAction } from '@/features/auth/authSlice';
import { showError } from '@/utils/handleApiSuccess';

export const useAuthInit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      const token = getToken();

      // 沒有 token 直接導向登入
      if (!token) {
        dispatch(logoutAction());
        // navigate('/login'); // 註解掉，避免前台以檢查並 navigate('/login');
        return;
      }

      try {
        await checkAuth();

        dispatch(
          loginSuccess({
            token,
          }),
        );
      } catch {
        dispatch(logoutAction());
        showError('請先登入，將導向登入頁面');
        navigate('/login');
      }
    };

    initAuth();
  }, [dispatch, navigate]);
};
