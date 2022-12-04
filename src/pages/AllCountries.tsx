import { NavLink } from 'react-router-dom';
import { useCountriesData } from '../api/useCountriesData';
import { CountryImage, CountryInfo, CountryName, FilterBy, Header, SearchInput } from '../components';
import { CountryView } from '../layout/CountryView';

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
						<CountryView
							country={country}
							style='w-8/12 max-w-xs h-96 my-5 mx-auto flex flex-col items-center rounded-lg bg-White shadow-lg dark:bg-DarkBlue dark:text-White'
						>
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
