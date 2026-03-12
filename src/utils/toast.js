import { pushMessage } from '@/features/toastSlice';

export const toast = {
  success(dispatch, text) {
    dispatch(
      pushMessage({
        text,
        status: 'success',
      }),
    );
  },

  error(dispatch, text) {
    dispatch(
      pushMessage({
        text,
        status: 'error',
      }),
    );
  },

  warning(dispatch, text) {
    dispatch(
      pushMessage({
        text,
        status: 'warning',
      }),
    );
  },
};
