import { DetailedHTMLProps, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CountryContext } from '../layout';

export const SingleCountryInfo = () => {
	const { country } = useContext(CountryContext);
	const countryNames: Intl.DisplayNames = new Intl.DisplayNames(['en'], { type: 'region' });
	const languagesList = Object.values(country.languages).map(lang=>lang)
	return (
		<div>
			<div className='ml-3 mt-3 space-y-2'>
				<p>
					<span className='font-semibold'>Native name:</span>
					{country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}
				</p>
				<p>
					<span className='font-semibold'>Population:</span> {new Intl.NumberFormat().format(country.population)}
				</p>

				<p>
					<span className='font-semibold'>Region:</span> {country.region}
				</p>
				<p>
					<span className='font-semibold'>Sub Region:</span> {country.subregion}
				</p>
				<p>
					<span className='font-semibold'>Capital:</span> {country.capital}
				</p>
			</div>
			<div className='ml-3 mt-8 space-y-2'>
				<p>
					<span className='font-semibold'>Top Level Domain:</span> {country.tld}
				</p>
				<p>
					<span className='font-semibold'>Currencies: </span>
					{country.currencies[Object.keys(country.currencies)[0]].name}
				</p>
				<p>
					<span className='font-semibold'>Languages: </span>
					{languagesList.map((language:any)=>(
						<span key={language}>
							{language},
						</span>
					))}
				</p>
			</div>
			<div className='ml-3 mt-8'>
				<p>
					<span className='font-semibold'>Border Countries:</span>
					{country.borders?.map((border: string, index: number) => {
						return (
							<NavLink key={index} to={`/country/${countryNames.of(border.slice(0, -1))}`} className='m-1'>
								{countryNames.of(border.slice(0, -1))}
							</NavLink>
						);
					})}
				</p>
			</div>
		</div>
	);
};
