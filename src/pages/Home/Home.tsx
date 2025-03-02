import { FC } from 'react';
import { Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AuthStatus } from 'features/auth';

const Home: FC = () => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)');

	return (
		<Box
			style={{
				marginTop: isSmallScreen ? '0' : '30px',
				padding: '30px 0 50px 0',
				textAlign: 'center',
				fontSize: '1.4rem',
				backgroundColor: 'rgba(255, 255, 0, 0.6)',
				borderRadius: '8px',
				color: '#191970',
			}}
		>
			<AuthStatus />
		</Box>
	);
};

export default Home;
