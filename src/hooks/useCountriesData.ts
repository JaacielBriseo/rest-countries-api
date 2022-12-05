import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { countriesApi } from '../api';
import { Country } from '../types';

export const useCountriesData = () => {
	const [countries, setCountries] = useState<Country[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const response: AxiosResponse = await countriesApi.get('/all');
				setCountries(response.data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		getData();
	}, []);

	const getByRegion = async (region: string) => {
		try {
			setIsLoading(true);
			const response: AxiosResponse = await countriesApi.get(`/region/${region}`);
			setCountries(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const getByName = async (name: string) => {
		try {
			setIsLoading(true);
			const response: AxiosResponse = await countriesApi.get(`/name/${name}`);
			setCountries(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	return {
		countries,
		isLoading,
		getByRegion,
		getByName,
	};
};
