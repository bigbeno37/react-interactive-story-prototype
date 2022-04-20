import {engine} from '../Engine';

export type Scene = {
	run(): void
};

const wait = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const CHAPTER_1 = {
	'INTRO': {
		async run() {
			engine.addDialogue('John', 'Hello there!');
			await wait(5000);
			engine.addDialogue('John', 'Soooo, what are you doing here?');
			await wait(200);

			engine.showChoices('Nothing', 'What\'s it to ya?');
		}
	}
}