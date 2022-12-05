import axios, { AxiosInstance } from 'axios';

export const countriesApi: AxiosInstance = axios.create({
	baseURL: 'https://restcountries.com/v3.1',
});
