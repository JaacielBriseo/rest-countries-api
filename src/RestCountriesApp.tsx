import { Route, Routes } from 'react-router-dom';
import { AllCountries, SingleCountry } from './pages';
export const RestCountriesApp = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<AllCountries />} />
				<Route path='/country/:countryName' element={<SingleCountry />} />
			</Routes>
		</>
	);
};
