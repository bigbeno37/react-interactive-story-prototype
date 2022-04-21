import {choices, dialogue, Outcome, wait} from '../Engine';

export const INITIAL_OUTCOME: Outcome = function* () {
	yield dialogue('John', 'Hey there!');
	yield wait(2000);
	yield dialogue('John', 'How are you?');
	yield choices('SAY_HI', 'SAY_HI');
};

export const OUTCOMES = {
	INITIAL_OUTCOME
};

type Choice = {
	text: string,
	effects: (state: object) => void,
	outcome: keyof typeof OUTCOMES
}

const SAY_HI: Choice = {
	text: 'Say hi',
	effects(state) {
		//
	},
	outcome: 'INITIAL_OUTCOME'
};

export const CHOICES: Record<string, Choice> = {
	SAY_HI
};