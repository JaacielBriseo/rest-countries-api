import { useEffect, useState } from 'react';
import { NavigateFunction, Params, useNavigate, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { countriesApi } from '../api';
import { Country } from '../types';

export const useSingleCountry = () => {
	const { countryName }: Readonly<Params<string>> = useParams();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [country, setCountry] = useState<Country[]>([]);
	const navigate: NavigateFunction = useNavigate();
	useEffect(() => {
		const getCountryByName: () => void = async () => {
			try {
				setIsLoading(true);
				const response: AxiosResponse = await countriesApi.get(`/name/${countryName}`);
				setCountry(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		getCountryByName();
	}, [countryName]);

	const goBack: () => void = () => {
		navigate(-1);
	};

	return {
		goBack,
		country,
		isLoading,
	};
};
