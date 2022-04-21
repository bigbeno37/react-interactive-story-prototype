import {choices, dialogue} from '../types/Event';
import {Outcome, wait} from '../Outcome';

export const InitialOutcome: Outcome = function* () {
	yield dialogue('John', 'Hey there!');
	yield wait(2000);
	yield dialogue('John', 'How are you?');
	yield choices('SayHiChoice', 'WhatDoYouWantChoice');
};

type Choice = {
	text: string,
	effects: (state: object) => void,
	outcome: keyof typeof OUTCOMES
}

const SayHiChoice: Choice = {
	text: 'Say hi',
	effects(state) {
		//
	},
	outcome: 'SayHiOutcome'
};

export const SayHiOutcome: Outcome = function* () {
	yield dialogue('You', 'Hi');
};

export const WhatDoYouWantChoice: Choice = {
	text: 'What do you want?',
	effects(state) {
		//
	},
	outcome: 'WhatDoYouWantOutcome'
};

export const WhatDoYouWantOutcome: Outcome = function* () {
	yield dialogue('You', 'What? What do you want?');
};

export const OUTCOMES = {
	InitialOutcome,
	SayHiOutcome,
	WhatDoYouWantOutcome
};

export const CHOICES = {
	SayHiChoice,
	WhatDoYouWantChoice
};