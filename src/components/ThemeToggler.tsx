import { useDarkSide } from '../hooks/useDarkSide';

export const ThemeToggler = () => {
	const [colorTheme, setTheme]: any = useDarkSide();
	const toggleDarkMode = () => {
		setTheme(colorTheme);
	};
	return <button onClick={toggleDarkMode}>Toggle Theme</button>;
};
