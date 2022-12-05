
import { useSingleCountry } from '../hooks';
import { CountryImage, Header, CountryName, SingleCountryInfo } from '../components';
import { CountryView } from '../layout';
import { styles } from './';
export const SingleCountry = () => {
	const {goBack,country,isLoading} =useSingleCountry()
	return (
		<div className='bg-VeryLightGray min-h-screen dark:bg-DarkBlue dark:text-White'>
			<Header />
			<button onClick={goBack} className='h-8 border-2 shadow-md w-24 ml-6 mt-6'>
				Back
			</button>
			{country.map((country: any) => {
				return (
					<CountryView
						key={country.name.common}
						country={country}
						style={styles.singleCountry}
					>
						<CountryImage />
						<CountryName />
						<SingleCountryInfo />
					</CountryView>
				);
			})}
		</div>
	);
};
