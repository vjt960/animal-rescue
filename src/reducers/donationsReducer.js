export const donationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_DONATIONS':
      return action.donations;
    default:
      return state;
  }
};
