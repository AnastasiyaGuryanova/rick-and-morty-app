import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title } from '@mantine/core';
import { Button, Loader, internalPaths } from 'shared';
import { useAuth } from 'features';

export const AuthStatus: FC = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleSignout = () => {
		auth.signout(() => {
			navigate(internalPaths.home);
		});
	};

	const handleSignin = () => {
		setIsLoading(true);
		navigate(internalPaths.login);
	};

	if (isLoading) {
		return <Loader />;
	}

	if (auth.user === null) {
		return (
			<Container>
				<Title order={2} style={{ margin: '0 0 25px 0' }}>
					Пройдите авторизацию
				</Title>
				<Button onClick={handleSignin}>Авторизоваться</Button>
			</Container>
		);
	}

	return (
		<Container>
			<Title order={2} style={{ margin: '0 0 25px 0' }}>
				Добро пожаловать в мир Рика и Морти!
			</Title>
			<Button onClick={handleSignout}>Выйти</Button>
		</Container>
	);
};
