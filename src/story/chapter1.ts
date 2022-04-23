import {choices, dialogue} from '../types/Event';
import {MyGameChoice, MyGameOutcome} from '../types/GameState';
import {wait} from '../types/Outcome';

const OfficerAsksForIdentification: MyGameOutcome = () => function* () {
	yield dialogue('Narrator', 'You walk up to the officer\'s desk. He appears behind a thick sheet of glass, with a small opening present at the bottom.');
	yield dialogue('Officer', 'Can I see some identification?');
};

const WalkUp: MyGameChoice = {
	text: 'Walk Up',
	outcome: OfficerAsksForIdentification
};

const OfficerOrdersYouOffTheShip: MyGameOutcome = () => function* () {
	yield dialogue('Officer', 'What? Are you hard of hearing? We don\'t have time for you losers, get the hell off my ship.');
	yield wait(1000);
	yield dialogue('Officer', 'NOW!');
	yield dialogue('Narrator', 'The security guards notice your silence and motion for you to leave the ship. Your silent act of rebellion has pleased no-one, and as you leave the ship, watching it depart into the starry sky, you wonder whether it was really worth it.');
};

const DoNothingAgain: MyGameChoice = {
	text: '...',
	dialogue: '...',
	outcome: OfficerOrdersYouOffTheShip
};

const OfficerAsksNextAgain: MyGameOutcome = () => function* () {
	yield dialogue('Officer', 'Excuse me sir, over here');
	yield choices(WalkUp, DoNothingAgain);
};

const DoNothingAtBeginning: MyGameChoice = {
	text: '...',
	dialogue: '...',
	outcome: OfficerAsksNextAgain
};

export const InitialOutcome: MyGameOutcome = () => function* () {
	yield dialogue('Narrator', 'The air is cold, your misty breaths lingering in the air. The transport shuttle waiting to take you to a distant mining colony lays ahead, its entrance coated in reinforced alloys. You walk inside, ready to get off this planet.');
	yield wait(2000);
	yield dialogue('Officer', 'Next!');
	yield choices(WalkUp, DoNothingAtBeginning);
};