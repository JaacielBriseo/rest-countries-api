import { useContext } from 'react';
import { CountryContext } from '../layout';

export const CountryName = () => {
	const { country } = useContext(CountryContext);
	return <h1 className='ml-3 mt-6 font-bold sm:hidden'>{country.name.common}</h1>;
};
