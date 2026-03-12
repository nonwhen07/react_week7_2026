import { useDispatch } from 'react-redux';
import { pushMessage } from '@/features/toastSlice';

export const useToast = () => {
  const dispatch = useDispatch();

  const successToast = (text) => {
    dispatch(
      pushMessage({
        text,
        status: 'success',
      }),
    );
  };

  const errorToast = (text) => {
    dispatch(
      pushMessage({
        text,
        status: 'error',
      }),
    );
  };

  const warningToast = (text) => {
    dispatch(
      pushMessage({
        text,
        status: 'warning',
      }),
    );
  };

  return {
    successToast,
    errorToast,
    warningToast,
  };
};
