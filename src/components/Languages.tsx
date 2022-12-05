import { LanguageProps } from '../types';

export const Languages = ({ languagesList }: LanguageProps) => {
	return (
		<p>
			<span>Languages: </span>
			{Object.values(languagesList).map((language: any, index: number) => (
				<span key={index} className='font-normal'>
					{language}
				</span>
			))}
		</p>
	);
};
