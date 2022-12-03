export const CountryInfo = ({ population, region, capital }: any) => {
	return (
		<div className="self-start ml-5 mt-3">
			<p><span className="font-semibold">Population:</span> {population}</p>
			<p><span className="font-semibold">Region:</span> {region}</p>
			<p><span className="font-semibold">Capital:</span> {capital}</p>
		</div>
	);
};
