import { useContext } from 'react';
import { CountryContext } from '../layout';
import { LanguageMap } from '../types';
import { Borders, InfoItem, Languages } from './';

export const SingleCountryInfo = () => {
	const { country } = useContext(CountryContext);
	const countryNames: Intl.DisplayNames = new Intl.DisplayNames(['en'], { type: 'region' });
	const languagesList = country.languages ? Object.values(country.languages as LanguageMap).map((lang) => lang) : [];
	return (
		<div className='flex flex-col sm:flex-row sm:text-sm min-h-screen'>
			<div className='ml-3 mt-3 space-y-2 sm:-mt-8 sm:ml-20'>
				<h1 className='font-bold hidden mt-10 sm:block sm:mb-2 sm:text-lg'>{country.name.common}</h1>
				{country.name.nativeName && Object.keys(country.name.nativeName).length > 0 ? (
					<InfoItem
						title='Native Name '
						info={country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}
					/>
				) : null}
				<InfoItem title='Population ' info={new Intl.NumberFormat().format(country.population)} />
				<InfoItem title='Region ' info={country.region} />
				<InfoItem title='Sub Region ' info={country.subregion} />
				<InfoItem title='Capital ' info={country.capital} />
			</div>
			<div className='ml-3 mt-8 space-y-2 sm:mt-10 sm:ml-10 sm:flex-1'>
				<InfoItem title='Top Level Domain ' info={country.tld} />
				<InfoItem title='Currencies ' info={country.currencies[Object.keys(country.currencies)[0]].name} />
				<Languages languagesList={languagesList} />
			</div>
			<div className='ml-3 mt-8 h-28 sm:mt-10 sm:ml-7'>
				<span>Border Countries:</span>
				<Borders country={country} countryNames={countryNames} />
			</div>
		</div>
	);
};
