import {Choice} from './Choice';
import {GameChoice} from '../types/GameChoice';
import {GameState} from '../types/GameState';

type ChoicesProps = {
	choices: GameChoice<GameState>[],
	selectChoice: (choice: GameChoice<GameState>) => void
};

export const Choices = ({ choices, selectChoice }: ChoicesProps) => (
	<div className={`${choices.length === 2 ? 'h-32' : 'h-64'} flex flex-wrap flex-row justify-center`}>
		{ choices.map((choice, index) => ( <Choice key={`${choice}${index}`} choice={choice} selectChoice={selectChoice} /> )) }
	</div>
);