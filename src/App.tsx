import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context';
import { PrivateRoute } from './component';
import { Navbar } from './pages';
import { routesConfig } from './constants';

export const App: FC = () => {
	return (
		<AuthProvider>
			<div className="app">
				<Navbar />

				<Routes>
					{routesConfig.map(({ path, element, isPrivate }) => (
						<Route
							key={path}
							path={path}
							element={
								isPrivate ? <PrivateRoute element={element} /> : element
							}
						/>
					))}
				</Routes>
			</div>
		</AuthProvider>
	);
};
