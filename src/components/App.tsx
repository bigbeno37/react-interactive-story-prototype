import {Dialogue} from './Dialogue';
import {Choices} from './Choices';
import {useEffect, useMemo, useRef, useState} from 'react';
import {InitialOutcome} from '../story/chapter1';
import {Event, ShowDialogueEvent} from '../types/Event';
import {Milliseconds} from '../types/utils';
import {Outcome} from '../Outcome';
import {GameChoice} from '../types/GameChoice';

const CURRENT_VERSION = 'v0.5.1';

const pause = (duration: Milliseconds) => new Promise(resolve => setTimeout(resolve, duration));

const useEngine = (initialOutcome: Outcome): [ShowDialogueEvent[], GameChoice[] | undefined, boolean, (choice: GameChoice) => void] => {
	const [events, setEvents] = useState<Event[]>([]);

	const [dialogue, choices, showChoices] = useMemo(() => {
		const dialogue: ShowDialogueEvent[] = [];
		let choices: GameChoice[] | undefined = undefined;
		let showChoices = false;

		for (const event of events) {
			switch (event.type) {
			case 'SHOW_DIALOGUE':
				dialogue.push(event);
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

	const [outcome, setOutcome] = useState(initialOutcome);
	const selectChoice = (choice: GameChoice) => {
		setOutcome(choice.outcome);
		setEvents([...events, { type: 'HIDE_CHOICES' }]);
	};

	const running = useRef(false);
	useEffect(() => {
		if (running.current) return;

		running.current = true;

		(async () => {
			for (const event of outcome) {
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

	return [dialogue, choices, showChoices, selectChoice];
};

export const App = () => {
	const [dialogue, choices, showChoices, selectChoice] = useEngine(InitialOutcome);

	return <div className="h-full flex flex-col bg-gray-800 overflow-y-hidden">
		<p className="absolute text-gray-600 left-4 top-4">{ CURRENT_VERSION }</p>
		<div className="h-full self-center p-2 flex flex-col w-full xl:w-[1200px]">
			<div className="flex flex-col-reverse overflow-y-auto" style={{ height: showChoices ? 'calc(100%-32rem)' : '100%', transition: 'all 0.3s ease-out' }}>
				{ [...dialogue].reverse().map((event, index) => ( <Dialogue key={index} name={event.name} text={event.text} /> )) }
			</div>

			<div className={showChoices ? 'h-32' : 'h-0'} style={{transition: 'all 0.3s ease-out'}}>
				{ choices && <Choices choices={choices} selectChoice={selectChoice} /> }
			</div>
		</div>
	</div>;
};