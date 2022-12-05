import { NavLink } from 'react-router-dom';
import { Country } from '../types';
import { useCountriesData } from '../hooks';
import { CountryImage, CountryInfo, CountryName, FilterBy, Header, SearchInput } from '../components';
import { CountryView } from '../layout';
import { styles } from './';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const AllCountries = () => {
	const { countries, getByRegion, getByName , isLoading } = useCountriesData();
	return (
		<main className='dark:bg-DarkBlue dark:text-White min-h-screen flex flex-col'>
			<Header />
			<div className='sm:flex sm:justify-between items-center w-11/12 mx-auto'>
				<SearchInput onSearch={getByName} />
				<FilterBy onSelect={getByRegion} />
			</div>
			<div className='flex flex-wrap justify-center mt-8'>
				{countries.map((country: Country) => {
					return (
						<NavLink key={country.name.common} to={`/country/${country.name.common}`}>
							{isLoading ? (
								<Skeleton height={300} width={200} className='m-16'/>
							) : (
								<CountryView country={country} style={styles.allCountries}>
									<CountryImage styleClasses='rounded-t-md' />
									<CountryName />
									<CountryInfo />
								</CountryView>
							)}
						</NavLink>
					);
				})}
			</div>
		</main>
	);
};
