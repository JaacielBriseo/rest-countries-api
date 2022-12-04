import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { CountryView } from '../layout/CountryView';
import { CountryImage, Header, CountryName, SingleCountryInfo } from '../components';

export const SingleCountry = () => {
	const { countryName } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [country, setCountry]: any = useState([]);
	useEffect(() => {
		const getCountryByName = async () => {
			try {
				setIsLoading(true);
				const response: AxiosResponse = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
				setCountry(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		getCountryByName();
	}, [countryName]);

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	return (
		<div className='bg-VeryLightGray min-h-screen dark:bg-DarkBlue dark:text-White'>
			<Header />
			<button onClick={goBack} className='h-8 border-2 shadow-md w-24 ml-6 mt-6'>
				Back
			</button>
			{country.map((country: any) => {
				return (
					<CountryView
						key={country.name.common}
						country={country}
						style='container mx-auto w-10/12 mt-10 dark:bg-DarkBlue dark:text-White'
					>
						<CountryImage />
						<CountryName />
						<SingleCountryInfo />
					</CountryView>
				);
			})}
		</div>
	);
};
