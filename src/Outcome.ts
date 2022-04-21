import {Event} from './types/Event';
import {Milliseconds} from './types/utils';

export type WaitEvent = {
	type: 'WAIT',
	duration: Milliseconds
}

export const wait = (duration: Milliseconds): WaitEvent => ({
	type: 'WAIT',
	duration
});

export type Outcome = () => Generator<Event | WaitEvent, void>;