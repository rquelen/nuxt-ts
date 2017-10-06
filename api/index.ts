import axios from "axios"

export const getHomepage = () => {
  const fakeID = 'fakeID';
  return axios.get(`${process.env.rolandGarrosSiteApiUrl}/api/fr-fr/homepage/${fakeID}`)
    .then(response => response.data);
};
