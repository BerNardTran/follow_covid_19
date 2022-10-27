import axios from 'axios';

export const getCountries = () => {
    const URL = 'https://api.covid19api.com/countries';
    return axios.get(URL);
}

export const getCountrySelected = (country) =>{
    const URL = `https://api.covid19api.com/dayone/country/${country}`;
    return axios.get(URL);
}