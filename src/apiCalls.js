export const getAnimals = () => {
  try {
    return fetch('http://localhost:3001/api/v1/rescue-animals')
      .then(response => response.json())
      .then(data => data)
      .catch(error => error.message);
  } catch ({ message }) {
    throw Error(message);
  }
};

export const getDonations = () => {
  try {
    return fetch('http://localhost:3001/api/v1/donations')
      .then(response => response.json())
      .then(data => data)
      .catch(error => error.message);
  } catch ({ message }) {
    throw Error(message);
  }
};

export const postNewDonation = donation => {
  const url = 'http://localhost:3001/api/v1/donations/';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...donation })
  };
  try {
    return fetch(url, options).catch(error => error.message);
  } catch ({ message }) {
    throw new Error(message);
  }
};
