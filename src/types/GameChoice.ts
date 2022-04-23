import {Outcome} from './Outcome';

export type GameChoice<T> = {
	text: string,
	dialogue: string,
	effects: (state: T) => T,
	outcome: Outcome<T>
}