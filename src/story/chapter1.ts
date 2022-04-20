import {dialogue, Outcome, wait} from '../Engine';

export const INITIAL_OUTCOME: Outcome = {
	events: [
		dialogue('John', 'Hey there!'),
		wait(5000),
		dialogue('John', 'How are you?')
	]
};