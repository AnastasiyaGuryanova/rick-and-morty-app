import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { internalPaths } from '../../constants';
import { Loader } from '../../components';

export const AuthStatus: FC = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handlesSignout = () => {
		auth.signout(() => {
			navigate(internalPaths.home);
		});
	};

	const handlesSignin = () => {
		setIsLoading(true);
		navigate(internalPaths.login);
	};

	if (isLoading) {
		return <Loader />;
	}

	if (auth.user === null) {
		return (
			<div>
				<h1>Пройдите авторизацию</h1>
				<button className="button" onClick={handlesSignin}>
					Авторизоваться
				</button>
			</div>
		);
	}

	return (
		<div>
			<h1>Добро пожаловать в мир Рика и Морти!</h1>
			<button className="button" onClick={handlesSignout}>
				Выйти
			</button>
		</div>
	);
};
