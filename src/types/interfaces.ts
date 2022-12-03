export interface Countries {
	name: { common: string };
	flags: {
		png: string;
	};
	capital: string;
	region: string;
	population: string;
}
export interface ImgProp {
	flag: string;
}

export interface InfoProps {
	population: string;
	region: string;
	capital: string;
}

export interface NameProp {
	name: string;
}
