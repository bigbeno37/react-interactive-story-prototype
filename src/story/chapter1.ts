import {choices, dialogue} from '../types/Event';
import {wait} from '../types/Outcome';
import {GameChoice} from '../types/GameChoice';
import {GameState, MyGameOutcome} from '../types/GameState';

export const InitialOutcome: MyGameOutcome = () => function* () {
	yield dialogue('John', 'Hey there!');
	yield wait(1000);
	yield dialogue('John', 'How are you?');
	yield choices(SayHiChoice, WhatDoYouWantChoice);
};

export const SayHiOutcome: MyGameOutcome = () => function* () {
	yield dialogue('You', 'Hi');
	yield dialogue('John', 'Soooo...');
	yield wait(2000);
	yield dialogue('John', 'Nice weather outside, hey?');
};

const SayHiChoice: GameChoice<GameState> = {
	text: 'Say hi',
	effects(state) {
		return { ...state, John: { ...state.John, friendliness: state.John.friendliness + 1 } };
	},
	outcome: SayHiOutcome
};

const WhatDoYouWantOutcome: MyGameOutcome = () => function* () {
	yield dialogue('You', 'What? What do you want?');
	yield dialogue('John', 'Woah, hey, relax bud. I\'m not going to bite.');
};

const WhatDoYouWantChoice: GameChoice<GameState> = {
	text: 'What do you want?',
	effects(state) {
		return { ...state, John: { ...state.John, friendliness: state.John.friendliness - 1 } };
	},
	outcome: WhatDoYouWantOutcome
};