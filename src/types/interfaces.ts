export interface Country {
	name: { common: string; nativeName?: any };
	flags: {
		png: string;
	};
	capital: string;
	region: string;
	population: number;
	subregion?: string;
	tld?: string;
	currencies?: any;
	languages?: any;
	borders?:any
}

export interface CountryContextProps {
	country: Country;
}
