import { FC } from 'react';
import { AuthStatus } from '../../components';
import './Home.css';

const Home: FC = () => {
	return (
		<div className="component">
			<AuthStatus />
		</div>
	);
};

export default Home;
