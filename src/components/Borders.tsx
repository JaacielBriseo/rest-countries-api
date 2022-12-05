import { NavLink } from 'react-router-dom';
import { Country } from '../types/interfaces';
interface Props {
	country: Country;
	countryNames: Intl.DisplayNames;
}

export const Borders = ({ country, countryNames }: Props) => {
	return (
		<div className='mt-3'>
			{country.borders?.map((border: string, index: number) => {
				return (
					<NavLink
						className='m-1 shadow-md mr-5 rounded-sm bg-White dark:bg-DarkBlue dark:text-gray-400'
						key={index}
						to={`/country/${countryNames.of(border.slice(0, -1))}`}
					>
						<button className='m-1 w-[35%]'>{countryNames.of(border.slice(0, -1))}</button>
					</NavLink>
				);
			})}
		</div>
	);
};
