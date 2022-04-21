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

export type ShowChoicesEvent = {
	type: 'SHOW_CHOICES',
	choices: Array<GameChoice>
};

export const choices = (...choices: Array<GameChoice>): ShowChoicesEvent => ({
	type: 'SHOW_CHOICES',
	choices
});

export type HideChoicesEvent = {
	type: 'HIDE_CHOICES'
};

export type Event = ShowDialogueEvent | ShowChoicesEvent | HideChoicesEvent;