import { ChangeEvent } from 'react';
import { FilterProps } from '../types';

export const FilterBy = ({ onSelect }: FilterProps) => {
	const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onSelect(e.target.value);
	};
	return (
		<div className='ml-8 mt-8'>
			<select
				onChange={selectHandler}
				className='w-6/12 h-10 shadow-lg rounded-md text-gray-500 text-sm dark:bg-DarkBlue'
			>
				<option value=''>Filter by region...</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>America</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europa</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</div>
	);
};
