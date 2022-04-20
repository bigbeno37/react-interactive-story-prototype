import {Dialogue} from './Dialogue';
import {Choices} from './Choices';
import {engine} from '../Engine';
import {useEffect, useState} from 'react';

export const App = () => {
	const [dialogue, setDialogue] = useState(engine.dialogue);

	useEffect(() => {
		const listener = () => {
			setDialogue([...engine.dialogue]);
		};

		engine.onEventDispatch(listener);

		return () => engine.removeListener(listener);
	}, [engine.events, engine.onEventDispatch, engine.removeListener]);

	return <div className="h-full flex flex-col bg-gray-800">
		<div className="h-full self-center p-2 flex flex-col" style={{width: '1200px'}}>
			<div className="grow flex flex-col overflow-y-auto">
				{ dialogue.map((event, index) => ( <Dialogue key={index} name={event.name} text={event.text} /> )) }
			</div>

			<Choices choices={['Pick me', 'Or me', 'Not me tho', 'Heya!']} />
		</div>
	</div>;
};