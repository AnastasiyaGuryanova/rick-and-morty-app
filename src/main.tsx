import { createRoot } from 'react-dom/client';
import { App } from 'app';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

registerSW({ immediate: true });

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
