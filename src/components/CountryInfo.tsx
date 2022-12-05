import { useContext } from 'react';
import { CountryContext } from '../layout/CountryView';

export const CountryInfo = () => {
	const { country } = useContext(CountryContext);

	return (
		<section className='self-start ml-5 mt-3'>
			<p>
				<span className='font-semibold'>Population:</span> {new Intl.NumberFormat().format(country.population)}
			</p>

			<p>
				<span className='font-semibold'>Region:</span> {country.region}
			</p>
			<p>
				<span className='font-semibold'>Capital:</span> {country.capital}
			</p>
		</section>
	);
};
