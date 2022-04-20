import {Dialogue} from "./Dialogue";
import {Choices} from "./Choices";

export const App = () => {
	return <div className="h-full flex flex-col bg-gray-800">
		<div className="h-full self-center p-2 flex flex-col" style={{width: "1200px"}}>
			<div className="grow flex flex-col overflow-y-auto">
				<Dialogue name={"John"} text={"Howdy"} />
				<Dialogue name={"John"} text={"What up!"} align="RIGHT" />
				<Dialogue name={"John"} text={"What up!"} align="RIGHT" />
				<Dialogue name={"John"} text={"What up!"} align="RIGHT" />
				<Dialogue name={"John"} text={"What up!"} align="RIGHT" />
				<Dialogue name={"John"} text={"What up!"} align="RIGHT" />
				<Dialogue name={"John"} text={"What up!"} align="RIGHT" />
				<Dialogue name={"John"} text={"What up!"} align="RIGHT" />
				<Dialogue name={"John"} text={"What up!"} align="RIGHT" />
			</div>

			<Choices choices={["Pick me", "Or me", "Not me tho", "Heya!"]} />
		</div>
	</div>
};