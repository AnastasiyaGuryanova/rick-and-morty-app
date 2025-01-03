import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BackgroundImage, Container, Box } from '@mantine/core';
import { withProviders } from './providers';
import { PrivateRoute, routesConfig } from './router';
import { Navbar } from 'widgets';
import { ErrorBoundary, UpdateNotification } from 'shared/ui';

import backgroundImage from 'shared/assets/images/backgroundImage.jpeg';

export const App: FC = () => {
	return withProviders(
		<Box style={{ widht: '100vh', height: '100vh' }}>
			<BackgroundImage src={backgroundImage} style={{ height: '100vh' }}>
				<Container
					style={{ widht: '1200px', minHeight: '100%', margin: '0 auto' }}
				>
					<Navbar />
					<UpdateNotification />
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
				</Container>
			</BackgroundImage>
		</Box>
	);
};
