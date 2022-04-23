import {GameChoice} from './GameChoice';

export type ShowDialogueEvent = {
	type: 'SHOW_DIALOGUE',
	name: string,
	text: string
};

export const dialogue = (name: string, text: string): ShowDialogueEvent => ({
	type: 'SHOW_DIALOGUE',
	name,
	text
});

export type ShowChoicesEvent<T> = {
	type: 'SHOW_CHOICES',
	choices: GameChoice<T>[]
};

export const choices = <T>(...choices: Array<GameChoice<T>>): ShowChoicesEvent<T> => ({
	type: 'SHOW_CHOICES',
	choices
});

export type HideChoicesEvent = {
	type: 'HIDE_CHOICES'
};

export type Event<T> = ShowDialogueEvent | ShowChoicesEvent<T> | HideChoicesEvent;