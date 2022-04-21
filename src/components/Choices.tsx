import {Choice} from './Choice';
import {CHOICES} from '../story/chapter1';

type ChoicesProps = {
	choices: Array<keyof typeof CHOICES>,
	selectChoice: (choice: keyof typeof CHOICES) => void
};

export const Choices = ({ choices, selectChoice }: ChoicesProps) => (
	<div className={`${choices.length === 2 ? 'h-32' : 'h-64'} shrink-0 flex flex-wrap flex-row justify-center`}>
		{ choices.map((choice, index) => ( <Choice key={`${choice}${index}`} choice={choice} selectChoice={selectChoice} /> )) }
	</div>
);