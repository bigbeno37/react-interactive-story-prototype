import {Event} from './Event';
import {Milliseconds} from './UtilityTypes';

export type WaitEvent = {
	type: 'WAIT',
	duration: Milliseconds
}

export const wait = (duration: Milliseconds): WaitEvent => ({
	type: 'WAIT',
	duration
});

export type Outcome<T> = (state: T) => () => Generator<Event<T> | WaitEvent, void>;