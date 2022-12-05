import { useContext } from 'react';
import { CountryContext } from '../layout/CountryView';

export const CountryName = () => {
	const { country } = useContext(CountryContext);
	return <h1 className='self-start ml-3 mt-6 font-bold'>{country.name.common}</h1>;
};
