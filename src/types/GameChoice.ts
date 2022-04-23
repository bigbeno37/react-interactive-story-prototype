import {Outcome} from './Outcome';

export type GameChoice<T> = {
	text: string,
	effects: (state: T) => T,
	outcome: Outcome<T>
}