import {engine} from '../Engine';

type ChoiceProps = {
	text: string
};

export const Choice = ({ text }: ChoiceProps) => {
	return <button className="text-white w-2/5 bg-gray-700 m-2 text-2xl" onClick={() => engine.dispatch({ type: 'SHOW_DIALOGUE', name: 'John', text: 'Hello there!' })}>
		{ text }
	</button>;
};