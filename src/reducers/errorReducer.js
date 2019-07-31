export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'STORE_ERROR':
      return action.errorMessage;
    default:
      return state;
  }
};
