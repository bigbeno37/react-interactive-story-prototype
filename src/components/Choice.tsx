import {GameChoice} from '../types/GameChoice';
import {GameState} from '../types/GameState';

type ChoiceProps = {
	choice: GameChoice<GameState>,
	selectChoice: (choice: GameChoice<GameState>) => void
};

export const Choice = ({ choice, selectChoice }: ChoiceProps) => {
	return <button
		className="text-white w-[45%] bg-gray-700 m-2 text-2xl"
		onClick={() => selectChoice(choice)}
	>
		{ choice.text }
	</button>;
};