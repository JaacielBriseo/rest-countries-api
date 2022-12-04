export interface Country {
	name?: { common: string; native: string };
	flags?: {
		png: string;
	};
	capital?: string;
	region?: string;
	population?: string;
	subRegion?: string;
	topDomain?: [value: string];
	currencies?: { key: { name: string } };
	languages?: { value: string };
}


export interface CountryContextProps {
	country: Country
}
