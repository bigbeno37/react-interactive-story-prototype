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
	choices: string[]
};

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

export type Event = ShowDialogueEvent | ShowChoicesEvent | HideChoicesEvent | WaitEvent;

export type Outcome = {
	events: Event[]
};