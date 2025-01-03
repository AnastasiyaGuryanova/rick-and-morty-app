import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{html,css,js,ico,png,svg}'],
			},
			manifest: {
				name: 'Rick and Morty Universe',
				short_name: 'RickMorty',
				description: 'Интерактивное приложение по вселенной Рика и Морти',
				theme_color: '#191970',
				background_color: '#FFA500',
				orientation: 'portrait-primary',
				display: 'standalone',
				start_url: '/',

				icons: [
					{
						src: '/icons/icon-rick-192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/icons/icon-rick-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: '/icons/icon-rick-128.png',
						sizes: '128x128',
						type: 'image/png',
					},
					{
						src: '/icons/icon-rick-256.png',
						sizes: '256x256',
						type: 'image/png',
					},
					{
						src: '/icons/icon-rick-48.png',
						sizes: '48x48',
						type: 'image/png',
					},
					{
						src: '/icons/icon-rick-64.png',
						sizes: '64x64',
						type: 'image/png',
					},
					{
						src: '/icons/icon-rick-96.png',
						sizes: '96x96',
						type: 'image/png',
					},
				],

				screenshots: [
					{
						src: '/screenshots/descktop.png',
						type: 'image/png',
						sizes: '1479x799',
						form_factor: 'wide',
					},
					{
						src: '/screenshots/mobile.jpg',
						type: 'image/png',
						sizes: '48x52',
						form_factor: 'narrow',
					},
				],
			},
		}),
	],

	resolve: {
		alias: {
			app: '/src/app',
			pages: '/src/pages',
			widgets: '/src/widgets',
			features: '/src/features',
			shared: '/src/shared',
		},
	},
});
