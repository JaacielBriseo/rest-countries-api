import { Moon } from '../assets';
import { useDarkSide } from '../hooks/useDarkSide';


export const ThemeToggler = () => {
	const [colorTheme, setTheme] = useDarkSide();

	const toggleDarkMode = () => {
		setTheme(colorTheme);
	};
	return (
		<button onClick={toggleDarkMode}>
			<img src={Moon} alt='Theme Toggler' className='w-3 h-3 mr-2' />
		</button>
	);
};
