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

export const storeAnimals = animals => ({
  type: 'STORE_ANIMALS',
  animals
});

export const storeDonations = donations => ({
  type: 'STORE_DONATIONS',
  donations
});

export const addDonation = donation => ({
  type: 'ADD_DONATION',
  donation
});
