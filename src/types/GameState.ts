import {Outcome} from './Outcome';

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