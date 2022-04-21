type DialogueProps = {
	name: string,
	text: string,
};

export const Dialogue = ({ name, text }: DialogueProps) => (
	<div className={`w-3/4 text-white bg-gray-500 p-2 mb-5 ${name === 'You' && 'self-end bg-blue-600'}`}>
		<h1 className="text-gray-300 italic text-2xl">{name}</h1>
		<p>{text}</p>
	</div>
);