import {Choice} from "./Choice";

type ChoicesProps = {
	choices: string[]
};

export const Choices = ({ choices }: ChoicesProps) => (
	<div className={`${choices.length === 2 ? 'h-32' : 'h-64'} shrink-0 flex flex-wrap flex-row justify-center`}>
		{ choices.map(choice => ( <Choice key={choice} text={choice} /> )) }
	</div>
);