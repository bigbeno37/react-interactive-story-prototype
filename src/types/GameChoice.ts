import {GameState} from './GameState';
import {Outcome} from '../Outcome';

export type GameChoice = {
	text: string,
	effects: (state: GameState) => void,
	outcome: Outcome
}