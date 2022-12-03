import { ReactElement } from 'react';
interface Props {
	children: ReactElement | ReactElement[];
}

export const CountriesCard = ({ children }: Props) => {
	return (
		<div className='w-8/12 max-w-xs h-96 my-5 mx-auto flex flex-col items-center rounded-lg bg-White shadow-lg md:flex-row md:flex-wrap'>
			{children}
		</div>
	);
};