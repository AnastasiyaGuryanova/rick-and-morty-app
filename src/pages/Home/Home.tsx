import { FC } from 'react';
import { AuthStatus } from '../../component';
import './Home.css';

export const Home: FC = () => {
	return (
		<div className="component">
			<AuthStatus />
		</div>
	);
};
