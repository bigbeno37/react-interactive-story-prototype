export type ShowDialogueEvent = {
	type: 'SHOW_DIALOGUE',
	name: string,
	text: string
};

export type ShowChoicesEvent = {
	type: 'SHOW_CHOICES',
	choices: string[]
};

export type HideChoicesEvent = {
	type: 'HIDE_CHOICES'
};

export type Event = ShowDialogueEvent | ShowChoicesEvent | HideChoicesEvent;

export class Engine {
	events: Event[] = [];

	listeners: Function[] = [];
	onEventDispatch(listener: () => void) {
		this.listeners.push(listener);
	}

	get dialogue(): ShowDialogueEvent[] {
		return this.events.filter(event => event.type === 'SHOW_DIALOGUE') as ShowDialogueEvent[];
	}

	removeListener(listener: () => void) {
		this.listeners = this.listeners.filter(fn => fn === listener);
	}

	dispatch(event: Event) {
		this.events.push(event);
		this.listeners.forEach(listener => listener());
	}

	addDialogue(name: string, text: string) {
		this.dispatch({ type: 'SHOW_DIALOGUE', name, text });
	}

	showChoices(...choices: string[]) {
		this.dispatch({ type: 'SHOW_CHOICES', choices });
	}
}

export const engine = new Engine();