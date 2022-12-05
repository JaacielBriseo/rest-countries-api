interface Props {
	info: string;
	title: string;
}
export const InfoItem = ({ info, title }: Props) => {
	return (
		<p>
			<span>{title}: </span>
			{info}
		</p>
	);
};
