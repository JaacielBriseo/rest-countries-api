import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { countriesApi } from '../api';

export const useSingleCountry = () => {
	const { countryName } = useParams();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [country, setCountry]: any = useState([]);
	useEffect(() => {
		const getCountryByName = async () => {
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

	const goBack = () => {
		navigate(-1);
	};

	return {
		goBack,
		country,
		isLoading,
	};
};
