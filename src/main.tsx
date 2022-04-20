import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

const root = document.getElementById('root');

if (!root) throw new Error('FATAL: Element with ID "root" not found!');

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);
