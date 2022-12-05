import { NavLink } from 'react-router-dom';
import { Country } from '../types/interfaces';
interface Props {
	country: Country;
	countryNames: Intl.DisplayNames;
}

export const Borders = ({ country, countryNames }: Props) => {
	return (
		<section className='mt-3'>
			{country.borders?.map((border: string, index: number) => {
				return (
					<NavLink
						className='m-1 mr-5 shadow-md rounded-sm bg-White dark:bg-DarkBlue dark:text-gray-400'
						key={index}
						to={`/country/${countryNames.of(border.slice(0, -1))}`}
					>
						<button className='m-1 w-2/3'>{countryNames.of(border.slice(0, -1))}</button>
					</NavLink>
				);
			})}
		</section>
	);
};
