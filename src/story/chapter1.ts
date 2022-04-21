import {choices, dialogue} from '../types/Event';
import {Outcome, wait} from '../Outcome';
import {GameChoice} from '../types/GameChoice';

export const InitialOutcome: Outcome = function* () {
	yield dialogue('John', 'Hey there!');
	yield wait(1000);
	yield dialogue('John', 'How are you?');
	yield choices(SayHiChoice, WhatDoYouWantChoice);
};

export const SayHiOutcome: Outcome = function* () {
	yield dialogue('You', 'Hi');
	yield dialogue('John', 'Soooo...');
	yield wait(2000);
	yield dialogue('John', 'Nice weather outside, hey?');
};

const SayHiChoice: GameChoice = {
	text: 'Say hi',
	effects(state) {
		state.John.friendliness += 1;
	},
	outcome: SayHiOutcome
};

const WhatDoYouWantOutcome: Outcome = function* () {
	yield dialogue('You', 'What? What do you want?');
	yield dialogue('John', 'Woah, hey, relax bud. I\'m not going to bite.');
};

const WhatDoYouWantChoice: GameChoice = {
	text: 'What do you want?',
	effects(state) {
		state.John.friendliness -= 1;
	},
	outcome: WhatDoYouWantOutcome
};