import { useContext } from 'react';
import { CountryContext } from '../layout/CountryView';

export const CountryImage = () => {
	const { country } = useContext(CountryContext);

	return <img src={country.flags?.png} alt='Country Flag' className='rounded-t-md' />;
};
