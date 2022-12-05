import { useContext } from 'react';
import { CountryContext } from '../layout/CountryView';

interface Props {
	styleClasses: string;
}
export const CountryImage = ({ styleClasses }: Props) => {
	const { country } = useContext(CountryContext);

	return <img src={country.flags?.png} alt='Country Flag' className={`${styleClasses} max-w-md`} />;
};
