import { Moon, Sun } from '../assets';
import { useDarkSide } from '../hooks';

export const ThemeToggler = () => {
	const [colorTheme, setTheme] = useDarkSide();

	const toggleDarkMode = () => {
		setTheme(colorTheme);
	};
	return (
		<button onClick={toggleDarkMode}>
			<img src={colorTheme === 'dark' ? Moon : Sun} alt='Theme Toggler' className='w-3 h-3 mr-2 ' />
		</button>
	);
};
