import {Dialogue} from './Dialogue';
import {Choices} from './Choices';
import {InitialOutcome} from '../story/chapter1';
import {useEngine} from '../hooks/UseEngine';
import {InitialGameState} from '../types/GameState';

const APP_VERSION = 'v0.6.3';
const ENGINE_VERSION = 'v1.1.0';
const STORY_VERSION = 'v0.1.1';

export const App = () => {
	const [dialogue, choices, showChoices, selectChoice] = useEngine(InitialOutcome, InitialGameState);

	return <div className="h-full flex flex-col bg-gray-800 overflow-y-hidden">
		<div className="absolute text-gray-600 left-4 top-4">
			<p>App: { APP_VERSION }</p>
			<p>Engine: { ENGINE_VERSION }</p>
			<p>Story: { STORY_VERSION }</p>
		</div>
		<div className="h-full self-center p-2 flex flex-col w-full xl:w-[1200px]">
			<div className="flex flex-col-reverse overflow-y-auto" style={{ height: showChoices ? 'calc(100%-32rem)' : '100%' }}>
				{ [...dialogue].reverse().map(({ id, event }) => ( <Dialogue key={id} name={event.name} text={event.text} /> )) }
			</div>

			<div className={`transition-all duration-300 ${showChoices ? 'h-32' : 'h-0'}`}>
				{ choices && <Choices choices={choices} selectChoice={selectChoice} /> }
			</div>
		</div>
	</div>;
};