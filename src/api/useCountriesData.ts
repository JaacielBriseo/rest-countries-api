import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export const useCountriesData = () => {
	const [countries, setCountries] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const response: AxiosResponse = await axios.get('https://restcountries.com/v3.1/all');
				setCountries(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		getData();
	}, []);

	return {
		countries,
		isLoading,
	};
};
