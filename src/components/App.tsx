import {Dialogue} from './Dialogue';
import {Choices} from './Choices';
import {useEffect, useMemo, useRef, useState} from 'react';
import {CHOICES, InitialOutcome, OUTCOMES} from '../story/chapter1';
import {Event, ShowChoicesEvent, ShowDialogueEvent} from '../types/Event';
import {Milliseconds} from '../types/utils';
import {Outcome} from '../Outcome';

const CURRENT_VERSION = 'v0.1.0';

const pause = (duration: Milliseconds) => new Promise(resolve => setTimeout(resolve, duration));

const useEngine = (initialOutcome: Outcome): [ShowDialogueEvent[], ShowChoicesEvent | undefined, (choice: keyof typeof CHOICES) => void] => {
	const [outcome, setOutcome] = useState(initialOutcome);

	const [events, setEvents] = useState<Event[]>([]);

	const selectChoice = (choice: keyof typeof CHOICES) => {
		setOutcome(OUTCOMES[CHOICES[choice].outcome]);
		setEvents(currentEvents => [...currentEvents, { type: 'HIDE_CHOICES' }]);
	};

	const dialogue = useMemo(() => events.filter(event => event.type === 'SHOW_DIALOGUE') as ShowDialogueEvent[], [events]);
	const choices = useMemo(() => {
		let choices = undefined;

		for (const event of events) {
			if (event.type === 'SHOW_CHOICES') {
				choices = event;
			}

			if (event.type === 'HIDE_CHOICES') {
				choices = undefined;
			}
		}

		return choices;
	}, [events]);

	const running = useRef(false);
	useEffect(() => {
		if (running.current) return;

		running.current = true;

		(async () => {
			for (const event of outcome) {
				if (event.type === 'WAIT') {
					await pause(event.duration);
					continue;
				}

				setEvents(currentEvents => [...currentEvents, event]);
			}

			running.current = false;
		})();
	}, [outcome]);

	return [dialogue, choices, selectChoice];
};

export const App = () => {
	const [dialogue, choices, selectChoice] = useEngine(InitialOutcome);

	return <div className="h-full flex flex-col bg-gray-800">
		<p className="absolute text-gray-600 left-4 top-4">{ CURRENT_VERSION }</p>
		<div className="h-full self-center p-2 flex flex-col w-full xl:w-[1200px]">
			<div className="grow flex flex-col-reverse overflow-y-auto">
				{ dialogue.reverse().map((event, index) => ( <Dialogue key={index} name={event.name} text={event.text} /> )) }
			</div>

			{ choices && <Choices choices={choices.choices} selectChoice={selectChoice} /> }
		</div>
	</div>;
};