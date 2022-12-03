import { useCountriesData } from './api/useCountriesData';
import { FilterBy, Header, SearchInput } from './components';

export const RestCountriesApp = (): JSX.Element => {
	const { countries } = useCountriesData();
	// console.log(countries);
	return (
		<div className='bg-VeryLightGray dark:bg-VeryDarkBlue h-screen'>
			<Header />
			<SearchInput />
			<FilterBy />
		</div>
	);
};
