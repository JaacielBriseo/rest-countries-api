import { Moon, Sun } from '../assets';
import { useDarkSide } from '../hooks/useDarkSide';

export const ThemeToggler = (): JSX.Element => {
	const [colorTheme, setTheme]: any = useDarkSide();
	const toggleDarkMode = () => {
		setTheme(colorTheme);
	};
	return (
		<button onClick={toggleDarkMode}>
			<img src={Moon} alt='Theme Toggler' className='w-3 h-3 mr-2' />
		</button>
	);
};
