import { useContext } from 'react';
import { CountryContext } from '../layout/CountryView';

interface Props {
	borderStyle: string;
}
export const CountryImage = ({ borderStyle }: Props) => {
	const { country } = useContext(CountryContext);

	return <img src={country.flags?.png} alt='Country Flag' className={`${borderStyle}`} />;
};
