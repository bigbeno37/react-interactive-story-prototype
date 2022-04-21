import {Choice} from './Choice';
import {GameChoice} from '../types/GameChoice';

type ChoicesProps = {
	choices: GameChoice[] | undefined,
	selectChoice: (choice: GameChoice) => void
};

export const Choices = ({ choices, selectChoice }: ChoicesProps) => (
	<div style={{ position: 'relative', top: choices ? '0' : '100px', transition: 'all 0.3s ease-out' }}>
		{ choices && (
			<div className={`${choices.length === 2 ? 'h-32' : 'h-64'} shrink-0 flex flex-wrap flex-row justify-center`}>
				{ choices.map((choice, index) => ( <Choice key={`${choice}${index}`} choice={choice} selectChoice={selectChoice} /> )) }
			</div>
		) }
	</div>

);