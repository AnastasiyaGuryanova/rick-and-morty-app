import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { internalPaths } from '../../constants';

export const AuthStatus: FC = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const handlesSignout = () => {
		auth.signout(() => {
			navigate(internalPaths.home);
		});
	};

	const handlesSignin = () => {
		navigate(internalPaths.login);
	};

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
