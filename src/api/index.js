import axios from 'axios';

export const getCountries = () => {
    const URL = 'https://api.covid19api.com/countries';
    return axios.get(URL);
}