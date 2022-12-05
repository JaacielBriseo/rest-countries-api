import { NavLink } from 'react-router-dom';
import { Country } from '../types';
import { useCountriesData } from '../hooks';
import { CountryImage, CountryInfo, CountryName, FilterBy, Header, SearchInput } from '../components';
import { CountryView } from '../layout';
import { styles } from './';

export const AllCountries = () => {
	const { countries, getByRegion, getByName } = useCountriesData();
	return (
		<div className='dark:bg-DarkBlue dark:text-White'>
			<Header />
			<SearchInput onSearch={getByName} />
			<FilterBy onSelect={getByRegion} />
			{countries.map((country: Country) => {
				return (
					<NavLink key={country.name.common} to={`/country/${country.name.common}`}>
						<CountryView country={country} style={styles.allCountries}>
							<CountryImage borderStyle='rounded-t-md'/>
							<CountryName />
							<CountryInfo />
						</CountryView>
					</NavLink>
				);
			})}
		</div>
	);
};
