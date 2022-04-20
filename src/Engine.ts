export type Event = {
	type: 'SHOW_DIALOGUE',
	name: string,
	text: string
};

export class Engine {
	events: Event[] = [];

	listeners: Function[] = [];
	onEventDispatch(listener: () => void) {
		this.listeners.push(listener);
	}

	removeListener(listener: () => void) {
		this.listeners = this.listeners.filter(fn => fn === listener);
	}

	dispatch(event: Event) {
		this.events.push(event);
		this.listeners.forEach(listener => listener());
	}
}

export const engine = new Engine();