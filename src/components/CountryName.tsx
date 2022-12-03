import { NameProp } from '../types/interfaces';

export const CountryName = ({ name }: NameProp) => {
	return <h1 className='self-start ml-5 mt-6 font-bold'>{name}</h1>;
};
