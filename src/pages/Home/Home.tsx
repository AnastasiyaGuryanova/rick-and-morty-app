import { FC } from 'react';
import { Box } from '@mantine/core';
import { AuthStatus } from 'features/auth';

const Home: FC = () => {
	return (
		<Box
			style={{
				marginTop: '30px',
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
