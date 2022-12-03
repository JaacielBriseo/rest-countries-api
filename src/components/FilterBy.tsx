import {ChangeEvent} from "react";

export const FilterBy = ({onSelect}:any): JSX.Element => {
	
	const selectHandler = (e:ChangeEvent<HTMLSelectElement>) => {
		const regionName = e.target.value
		onSelect(regionName)
	}
	return (
		<div className='ml-8 mt-8'>
			<select
				onChange={selectHandler}
				className='w-6/12 h-10 shadow-lg rounded-md text-gray-500 text-sm'
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
