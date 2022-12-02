import axios from 'axios';
import { useEffect, useState } from 'react';

export const useCountriesData = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((resp) => setCountries(resp.data));
	}, []);

	return {
		countries,
	};
};
