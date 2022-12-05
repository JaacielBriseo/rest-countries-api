import { useSingleCountry } from '../hooks';
import { CountryImage, Header, CountryName, SingleCountryInfo } from '../components';
import { CountryView } from '../layout';
import { styles } from './';
import { Country } from '../types';
export const SingleCountry = () => {
	const { goBack, country, isLoading } = useSingleCountry();
	return (
		<div className='min-h-screen bg-VeryLightGray dark:bg-DarkBlue dark:text-White w-full'>
			<Header />
			<button onClick={goBack} className='h-8 border-2 shadow-md w-24 ml-6 mt-6'>
				Back
			</button>
			{country.map((country: Country) => {
				return (
					<CountryView key={country.name.common} country={country} style={styles.singleCountry}>
						<CountryImage styleClasses='rounded-none h-44 mx-auto sm:w-1/3 sm:ml-8 sm:h-64 sm:mx-0' />
						<CountryName />
						<SingleCountryInfo />
					</CountryView>
				);
			})}
		</div>
	);
};
