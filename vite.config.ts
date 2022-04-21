import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/react-interactive-story-prototype/',
	plugins: [react()],
	build: {
		outDir: 'docs'
	}
});
