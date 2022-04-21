import {CHOICES} from './story/chapter1';

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
	choices: Array<keyof typeof CHOICES>
};

export const choices = (...choices: Array<keyof typeof CHOICES>): ShowChoicesEvent => ({
	type: 'SHOW_CHOICES',
	choices
});

export type HideChoicesEvent = {
	type: 'HIDE_CHOICES'
};

export type Milliseconds = number;

export type WaitEvent = {
	type: 'WAIT',
	duration: Milliseconds
}

export const wait = (duration: Milliseconds): WaitEvent => ({
	type: 'WAIT',
	duration
});

export type Event = ShowDialogueEvent | ShowChoicesEvent | HideChoicesEvent;

export type Outcome = () => Generator<Event | WaitEvent, void>;