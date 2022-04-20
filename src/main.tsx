import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import './index.css';
import {CHAPTER_1} from './story/chapter1';

const root = document.getElementById('root');

if (!root) throw new Error('FATAL: Element with ID "root" not found!');

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);

await CHAPTER_1.INTRO.run();