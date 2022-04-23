import {Outcome} from './Outcome';
import {GameChoice} from './GameChoice';

export type GameState = {
	'John': {
		friendliness: number
	}
};

export const InitialGameState: GameState = {
	John: {
		friendliness: 0
	}
};

export type MyGameOutcome = Outcome<GameState>;
export type MyGameChoice = GameChoice<GameState>;