export const donationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_DONATIONS':
      return action.donations;
    case 'ADD_DONATION':
      return [...state, action.donation];
    default:
      return state;
  }
};
