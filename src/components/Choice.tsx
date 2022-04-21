import {CHOICES} from '../story/chapter1';

type ChoiceProps = {
	choice: keyof typeof CHOICES,
	selectChoice: (choice: keyof typeof CHOICES) => void
};

export const Choice = ({ choice, selectChoice }: ChoiceProps) => {
	return <button
		className="text-white w-[45%] bg-gray-700 m-2 text-2xl"
		onClick={() => selectChoice(choice)}
	>
		{ (CHOICES[choice] ?? { text: `${choice} is not listed in CHOICES!` }).text }
	</button>;
};