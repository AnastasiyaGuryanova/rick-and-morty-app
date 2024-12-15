import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context';
import { PrivateRoute, ErrorBoundary } from './components';
import Navbar from './pages/Navbar/Navbar';
import { routesConfig } from './constants';

export const App: FC = () => {
	return (
		<AuthProvider>
			<div className="app">
				<Navbar />
				<ErrorBoundary>
					<Routes>
						{routesConfig.map(({ path, element, isPrivate }) => (
							<Route
								key={path}
								path={path}
								element={
									isPrivate ? (
										<PrivateRoute element={element} />
									) : (
										element
									)
								}
							/>
						))}
					</Routes>
				</ErrorBoundary>
			</div>
		</AuthProvider>
	);
};
