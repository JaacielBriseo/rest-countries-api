import { useCountriesData } from './api/useCountriesData';
import { CountryImage, CountryInfo, CountryName, FilterBy, Header, SearchInput } from './components';
import { CountriesCard } from './layout/CountriesCard';

export const RestCountriesApp = (): JSX.Element => {
	const { countries } = useCountriesData();
	return (
		<div className='bg-VeryLightGray dark:bg-VeryDarkBlue font-Nunito'>
			<Header />
			<SearchInput />
			<FilterBy />
			{countries.map((country: any) => {
				return (
					<CountriesCard key={country.name.common}>
						<CountryImage flag={country.flags.png} />
						<CountryName name={country.name.common} />
						<CountryInfo population={country.population} region={country.region} capital={country.capital} />
					</CountriesCard>
				);
			})}
		</div>
	);
};
