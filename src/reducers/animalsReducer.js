export const animalsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_ANIMALS':
      return action.animals;
    default:
      return state;
  }
};
