type DialogueProps = {
	name: string,
	text: string,
	align?: 'LEFT' | 'RIGHT'
};

export const Dialogue = ({ name, text, align }: DialogueProps) => (
	<div className={`w-3/4 text-white bg-gray-500 p-2 my-4 ${align === 'RIGHT' && 'self-end'}`}>
		<h1 className="text-gray-300 italic text-2xl">{name}</h1>
		<p>{text}</p>
	</div>
)