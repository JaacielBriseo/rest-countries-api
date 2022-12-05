import { NavLink } from 'react-router-dom';
import { CountryView } from '../layout';
import { useCountriesData } from '../hooks';
import { styles } from './';
import { CountryImage, CountryInfo, CountryName, FilterBy, Header, SearchInput } from '../components';

export const AllCountries = () => {
	const { countries, getByRegion, getByName } = useCountriesData();
	return (
		<div className='dark:bg-DarkBlue dark:text-White'>
			<Header />
			<SearchInput onSearch={getByName} />
			<FilterBy onSelect={getByRegion} />
			{countries.map((country: any) => {
				return (
					<NavLink key={country.name.common} to={`/country/${country.name.common}`}>
						<CountryView country={country} style={styles.allCountries}>
							<CountryImage />
							<CountryName />
							<CountryInfo />
						</CountryView>
					</NavLink>
				);
			})}
		</div>
	);
};
