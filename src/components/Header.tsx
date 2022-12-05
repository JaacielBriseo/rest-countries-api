import { ThemeToggler } from './';

export const Header = (): JSX.Element => {
	return (
		<header className='flex justify-between items-center h-20 shadow-md font-Nunito bg-White dark:bg-DarkBlue dark:text-White '>
			<div className='ml-3'>
				<p className='font-bold text-sm'>Where in the world ?</p>
			</div>
			<div className='flex mr-2'>
				<ThemeToggler />
				<p className='text-xs font-semibold'>Dark Mode</p>
			</div>
		</header>
	);
};
