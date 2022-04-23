import {MyGameChoice} from '../types/GameState';

type ChoiceProps = {
	choice: MyGameChoice,
	selectChoice: (choice: MyGameChoice) => void
};

export const Choice = ({ choice, selectChoice }: ChoiceProps) => {
	return <button
		className="text-white w-[45%] bg-gray-700 m-2 text-2xl"
		onClick={() => selectChoice(choice)}
	>
		{ choice.text }
	</button>;
};