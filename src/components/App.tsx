import {Dialogue} from './Dialogue';
import {Choices} from './Choices';
import {Event, Milliseconds, Outcome, ShowDialogueEvent} from '../Engine';
import {useEffect, useMemo, useState} from 'react';
import {INITIAL_OUTCOME} from '../story/chapter1';

const pause = (duration: Milliseconds) => new Promise(resolve => setTimeout(resolve, duration));

const useEngine = (initialOutcome: Outcome): [ShowDialogueEvent[]] => {
	const [events, setEvents] = useState<Event[]>([]);
	const dialogue = useMemo(() => events.filter(event => event.type === 'SHOW_DIALOGUE') as ShowDialogueEvent[], [events]);

	useEffect(() => {
		(async () => {
			for (const event of initialOutcome.events) {
				if (event.type === 'WAIT') {
					await pause(event.duration);
				}

				setEvents(currentEvents => [...currentEvents, event]);
			}
		})();
	}, [initialOutcome.events]);

	return [dialogue];
};

export const App = () => {
	const [dialogue] = useEngine(INITIAL_OUTCOME);

	return <div className="h-full flex flex-col bg-gray-800">
		<div className="h-full self-center p-2 flex flex-col" style={{width: '1200px'}}>
			<div className="grow flex flex-col overflow-y-auto">
				{ dialogue.map((event, index) => ( <Dialogue key={index} name={event.name} text={event.text} /> )) }
			</div>

			<Choices choices={['Pick me', 'Or me', 'Not me tho', 'Heya!']} />
		</div>
	</div>;
};