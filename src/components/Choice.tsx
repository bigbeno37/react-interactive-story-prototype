type ChoiceProps = {
	text: string
};

export const Choice = ({ text }: ChoiceProps) => {
	return <button
		className="text-white w-2/5 bg-gray-700 m-2 text-2xl"
	>
		{ text }
	</button>;
};