import { useContext } from 'react';
import { CountryContext } from '../layout/CountryView';

export const SingleCountryInfo = () => {
	const {country } = useContext(CountryContext);

	return (
		<div>
			<div className='self-start ml-5 mt-3'>
				<p>
					<span className='font-semibold'>Population:</span> {country.population}
				</p>

				<p>
					<span className='font-semibold'>Region:</span> {country.region}
				</p>
				<p>
					<span className='font-semibold'>Sub Region:</span> {country.subRegion}
				</p>
				<p>
					<span className='font-semibold'>Capital:</span> {country.capital}
				</p>
			</div>
			<div>
				<p>
					<span className='font-semibold'>Top Level Domain:</span> {country.topDomain}
				</p>
				<p>
					<span className='font-semibold'>Currencies</span> {country.capital}
				</p>
				<p>
					<span className='font-semibold'>Languages</span> {country.capital}
				</p>
			</div>
			<div>
				{/* <p>
					<span className='font-semibold'>Border Countries:</span> {borders}
				</p> */}
			</div>
		</div>
	);
};
