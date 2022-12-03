import { useCountriesData } from './api/useCountriesData';
import { FilterBy, Header, SearchInput } from './components';
import { CountriesCard } from './layout/CountriesCard';
import { Countries } from './types/interfaces';

export const RestCountriesApp = (): JSX.Element => {
	const { countries ,getByRegion } = useCountriesData();
	return (
		<div className='bg-VeryLightGray dark:bg-VeryDarkBlue font-Nunito'>
			<Header />
			<SearchInput />
			<FilterBy onSelect = {getByRegion}/>
			{countries.map((country: Countries) => {
				return (
					<CountriesCard key={country.name.common}>
						<CountriesCard.Image flag={country.flags.png} />
						<CountriesCard.Name name={country.name.common} />
						<CountriesCard.Info population={country.population} region={country.region} capital={country.capital} />
					</CountriesCard>
				);
			})}
		</div>
	);
};
