import { ThemeToggler } from './';

export const Header = (): JSX.Element => {
	return (
		<header className='flex justify-between items-center h-20 shadow-md font-Nunito bg-White dark:bg-DarkBlue dark:text-White sm:p-10'>
			<div className='ml-3'>
				<p className='font-bold text-sm sm:text-lg'>Where in the world ?</p>
			</div>
			<div className='flex mr-2'>
				<ThemeToggler />
				<p className='text-xs font-semibold sm:text-sm'>Dark Mode</p>
			</div>
		</header>
	);
};
