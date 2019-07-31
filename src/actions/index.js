export const startLoading = () => ({
  type: 'START_LOADING'
});

export const endLoading = () => ({
  type: 'END_LOADING'
});

export const storeError = errorMessage => ({
  type: 'STORE_ERROR',
  errorMessage
});
