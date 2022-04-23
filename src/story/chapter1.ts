import {choices, dialogue} from '../types/Event';
import {wait} from '../types/Outcome';
import {MyGameChoice, MyGameOutcome} from '../types/GameState';

export const InitialOutcome: MyGameOutcome = () => function* () {
	yield dialogue('John', 'Hey there!');
	yield wait(1000);
	yield dialogue('John', 'How are you?');
	yield choices(SayHiChoice, WhatDoYouWantChoice);
};

export const SayHiOutcome: MyGameOutcome = () => function* () {
	yield dialogue('John', 'Soooo...');
	yield wait(2000);
	yield dialogue('John', 'Nice weather outside, hey?');
};

const SayHiChoice: MyGameChoice = {
	text: 'Say hi',
	dialogue: 'Hi',
	effects(state) {
		return { ...state, John: { ...state.John, friendliness: state.John.friendliness + 1 } };
	},
	outcome: SayHiOutcome
};

const WhatDoYouWantOutcome: MyGameOutcome = () => function* () {
	yield dialogue('John', 'Woah, hey, relax bud. I\'m not going to bite.');
};

const WhatDoYouWantChoice: MyGameChoice = {
	text: 'What do you want?',
	dialogue: 'What? What do you want?',
	effects(state) {
		return { ...state, John: { ...state.John, friendliness: state.John.friendliness - 1 } };
	},
	outcome: WhatDoYouWantOutcome
};