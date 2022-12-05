import { useState } from 'react';
import { SyntheticEvent, ChangeEvent } from 'react';
import { SearchProps } from '../types';

export const SearchInput = ({ onSearch }: SearchProps) => {
	const [input, setInput] = useState<string>('');
	const onSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		onSearch(input);
	};
	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};
	return (
		<form onSubmit={onSubmit} className='flex justify-center mt-9'>
			<input
				className='border border-DarkGray w-10/12 h-10 rounded-lg placeholder:text-xs dark:bg-DarkBlue'
				type='text'
				placeholder='&#x1F50E;&#xFE0E; Search for a country...'
				value={input}
				onChange={onInputChange}
			/>
		</form>
	);
};
