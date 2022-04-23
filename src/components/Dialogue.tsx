import { motion } from 'framer-motion';

type DialogueProps = {
	name: string,
	text: string,
};

export const Dialogue = ({ name, text }: DialogueProps) => (
	<motion.div
		layout
		animate={{ y: 0 }}
		initial={{ y: 10 }}
		transition={{ ease: 'easeOut', duration: 0.1 }}
		className={`w-3/4 text-white bg-gray-500 p-2 mb-5 ${name === 'You' && 'self-end bg-blue-600'} ${name === 'Narrator' && 'bg-transparent italic text- text-xl text-gray-400'}`}
	>
		<h1 className={`text-gray-300 italic text-2xl ${name === 'Narrator' && 'hidden'}`}>{name}</h1>
		<p>{text}</p>
	</motion.div>
);