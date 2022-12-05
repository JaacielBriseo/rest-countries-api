import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CountryContext } from '../layout';

export const SingleCountryInfo = () => {
	const { country } = useContext(CountryContext);
	const countryNames: Intl.DisplayNames = new Intl.DisplayNames(['en'], { type: 'region' });
	const languagesList = country.languages ? Object.values(country.languages).map((lang) => lang) : [];
	return (
		<div className='flex flex-col sm:flex-row sm:text-sm min-h-screen'>
			<div className='ml-3 mt-3 space-y-2 sm:-mt-8 sm:ml-20'>
				<h1 className='font-bold hidden mt-10 sm:block sm:mb-2 sm:text-lg'>{country.name.common}</h1>
				{country.name.nativeName && Object.keys(country.name.nativeName).length > 0 ? (
					<p>
						<span>Native name:</span>
						{country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}
					</p>
				) : null}
				<p>
					<span>Population:</span> {new Intl.NumberFormat().format(country.population)}
				</p>

				<p>
					<span>Region:</span> {country.region}
				</p>
				<p>
					<span>Sub Region:</span> {country.subregion}
				</p>
				<p>
					<span>Capital:</span> {country.capital}
				</p>
			</div>
			<div className='ml-3 mt-8 space-y-2 sm:mt-10 sm:ml-10 sm:flex-1'>
				<p>
					<span>Top Level Domain:</span> {country.tld}
				</p>
				<p>
					<span>Currencies: </span>
					{country.currencies[Object.keys(country.currencies)[0]].name}
				</p>
				<p>
					<span>Languages: </span>
					{languagesList.map((language: any) => (
						<span key={language} className='font-normal'>
							{language},
						</span>
					))}
				</p>
			</div>
			<div className='ml-3 mt-8 h-28 sm:mt-10 sm:ml-7'>
				<span>Border Countries:</span>
				<div className='mt-3'>
					{country.borders?.map((border: string, index: number) => {
						return (
							<NavLink
								className='m-1 shadow-md mr-5 rounded-sm bg-White dark:bg-DarkBlue dark:text-gray-400'
								key={index}
								to={`/country/${countryNames.of(border.slice(0, -1))}`}
							>
								<button className='m-1 w-[35%]'>{countryNames.of(border.slice(0, -1))}</button>
							</NavLink>
						);
					})}
				</div>
			</div>
		</div>
	);
};
