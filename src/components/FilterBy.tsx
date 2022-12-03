export const FilterBy = (): JSX.Element => {
	return (
		<div className="ml-8 mt-8">
			<select name='cars' id='cars' className="w-6/12 h-10 shadow-lg rounded-md text-gray-500 text-sm">
				<option value=''>Filter by region...</option>
				<option value='africa'>Africa</option>
				<option value='america'>America</option>
				<option value='asia'>Asia</option>
				<option value='europa'>Europa</option>
				<option value='oceania'>Oceania</option>
			</select>
		</div>
	);
};
