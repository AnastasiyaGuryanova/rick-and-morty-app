import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Signin } from './component';
import { useAuth } from '../../hooks';
import { SigninUserType } from '../../types';
import { internalPaths } from '../../constants';
import './Login.css';

const Login: FC = () => {
	const navigate = useNavigate();
	const auth = useAuth();
	const location = useLocation();

	const from = location.state?.from || internalPaths.home;

	const handleSigninSubmit = (formData: SigninUserType) => {
		auth.signin(formData, () => {
			navigate(from, { replace: true });
		});
	};

	return (
		<div className="login">
			<h2 className="login-title">Вход</h2>
			<Signin onSubmit={handleSigninSubmit} />
		</div>
	);
};

export default Login;
