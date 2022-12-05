import { ReactElement, createContext } from 'react';
import { Country, CountryContextProps } from '../types';
interface Props {
	children: ReactElement | ReactElement[];
	country: Country;
	style: string;
}

export const CountryContext = createContext({} as CountryContextProps);
const { Provider } = CountryContext;

export const CountryView = ({ children, country, style }: Props) => {
	return (
		<Provider
			value={{
				country,
			}}
		>
			<div className={style}>{children}</div>
		</Provider>
	);
};
