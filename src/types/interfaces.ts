export interface Country {
	name: { common: string; nativeName: NativeName };
	flags: {
		png: string;
	};
	capital: string;
	region: string;
	population: number;
	subregion: string;
	tld: string;
	currencies: Currencies;
	languages: LanguageMap;
	borders: string[];
}
export interface Currencies {
	[key: string]: {
		name: string;
	};
}

export interface NativeName {
	[key: string]: {
		official: string;
	};
}

export interface CountryContextProps {
	country: Country;
}

export interface FilterProps {
	onSelect: (v: string) => Promise<void>;
}
export interface SearchProps {
	onSearch: (v: string) => Promise<void>;
}
export interface Styles {
	allCountries: string;
	singleCountry: string;
}
export interface Language {
	[key: string]: string;
}

export interface LanguageMap {
	[key: string]: Language;
}

export type LanguageProps = {
	languagesList: Language[];
};
