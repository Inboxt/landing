import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	redirects: {
		'/install/chrome':
			'https://chromewebstore.google.com/detail/inboxt/ipbkogoedgllpgmfbhciclanlncfoemp',
		'/install/firefox': 'https://addons.mozilla.org/en-US/firefox/addon/inboxt/',
	},
});
