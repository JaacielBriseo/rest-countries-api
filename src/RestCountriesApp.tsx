import { useCountriesData } from './api/useCountriesData';
import { FilterBy, Header, SearchInput } from './components';
import { CountriesCard } from './layout/CountriesCard';
import { CountryCard } from './layout/CountryCard';
import { Countries as CountriesProps} from './types/interfaces';

export const RestCountriesApp = (): JSX.Element => {
	const { countries, getByRegion, getByName } = useCountriesData();
	return (
		<div className='bg-VeryLightGray dark:bg-VeryDarkBlue min-h-screen font-Nunito'>
			<Header />
			<SearchInput onSearch={getByName} />
			<FilterBy onSelect={getByRegion} />
			{countries.length === 1 ? (
				<CountryCard countries={countries}/>
			) : (
				countries.map((country: CountriesProps) => {
					return (
						<CountriesCard key={country.name.common}>
							<CountriesCard.Image flag={country.flags.png} />
							<CountriesCard.Name name={country.name.common} />
							<CountriesCard.Info population={country.population} region={country.region} capital={country.capital} />
						</CountriesCard>
					);
				})
			)}
		</div>
	);
};
