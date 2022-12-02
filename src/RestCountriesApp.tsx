import { useCountriesData } from './api/useCountriesData';
import { Header } from './components/Header';

export const RestCountriesApp = (): JSX.Element => {
	const { countries } = useCountriesData();
	console.log(countries);
	return (
		<>
			<Header />
		</>
	);
};
