import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Title } from '@mantine/core';
import { SigninUserType } from 'shared/types';
import { internalPaths } from 'shared/constants';
import { SigninForm, useAuth } from 'features';
import './Login.modules.css';

const Login = () => {
	const navigate = useNavigate();
	const auth = useAuth();
	const location = useLocation();

	const from = location.state?.from || internalPaths.home;

	const handleSignin = (formData: SigninUserType) => {
		auth.signin(formData, () => {
			navigate(from, { replace: true });
		});
	};

	return (
		<Box className="login-box">
			<Title>Вход</Title>
			<SigninForm onSubmit={handleSignin} />
		</Box>
	);
};

export default Login;
