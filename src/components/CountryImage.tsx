import { ImgProp } from '../types/interfaces';

export const CountryImage = ({ flag }: ImgProp) => {
	return <img src={flag} alt='Country Flag' className='rounded-t-md' />;
};
