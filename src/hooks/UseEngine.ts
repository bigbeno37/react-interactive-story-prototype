import {Outcome} from '../types/Outcome';
import {Event, ShowDialogueEvent} from '../types/Event';
import {GameChoice} from '../types/GameChoice';
import {useEffect, useMemo, useRef, useState} from 'react';
import {pause} from '../utils';
import {dialogue as dialogueEvent} from '../types/Event';

type DialogueWithID = {
	id: number,
	event: ShowDialogueEvent
}

export const useEngine = <T,>(initialOutcome: Outcome<T>, initialState: T): [DialogueWithID[], GameChoice<T>[] | undefined, boolean, (choice: GameChoice<T>) => void] => {
	const [events, setEvents] = useState<Event<T>[]>([]);

	const [dialogue, choices, showChoices] = useMemo(() => {
		const dialogue: DialogueWithID[] = [];
		let choices: GameChoice<T>[] | undefined = undefined;
		let showChoices = false;

		for (const event of events) {
			switch (event.type) {
			case 'SHOW_DIALOGUE':
				dialogue.push({id: dialogue.length, event});
				break;
			case 'SHOW_CHOICES':
				choices = event.choices;
				showChoices = true;
				break;
			case 'HIDE_CHOICES':
				showChoices = false;
				break;
			}
		}

		return [dialogue, choices, showChoices];
	}, [events]);

	const [outcome, setOutcome] = useState<Outcome<T>>(initialOutcome);
	const [gameState, setGameState] = useState<T>(initialState);

	const running = useRef(false);
	useEffect(() => {
		if (running.current) return;

		running.current = true;

		(async () => {
			// I'd rather not do this, but outcome(gameState) produces an iterator so not sure why Typescript is
			// complaining...
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			for (const event of outcome(gameState)) {
				if (event.type === 'SHOW_DIALOGUE' && event.name !== 'You') await pause(1000);

				if (event.type === 'WAIT') {
					await pause(event.duration);
					continue;
				}

				setEvents(currentEvents => [...currentEvents, event]);
			}

			running.current = false;
		})();
	}, [outcome]);

	const selectChoice = (choice: GameChoice<T>) => {
		setOutcome(choice.outcome);
		setGameState(choice.effects(gameState));
		setEvents([...events, dialogueEvent('You', choice.dialogue), {type: 'HIDE_CHOICES'}]);
	};

	return [dialogue, choices, showChoices, selectChoice];
};