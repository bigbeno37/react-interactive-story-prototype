import {Choice} from './Choice';
import {MyGameChoice} from '../types/GameState';

type ChoicesProps = {
	choices: MyGameChoice[],
	selectChoice: (choice: MyGameChoice) => void
};

export const Choices = ({ choices, selectChoice }: ChoicesProps) => (
	<div className={`${choices.length === 2 ? 'h-32' : 'h-64'} flex flex-wrap flex-row justify-center`}>
		{ choices.map((choice, index) => ( <Choice key={`${choice}${index}`} choice={choice} selectChoice={selectChoice} /> )) }
	</div>
);