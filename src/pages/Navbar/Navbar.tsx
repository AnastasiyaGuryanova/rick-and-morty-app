import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { internalPaths } from '../../constants';
import './Navbar.css';

export const Navbar: FC = () => {
	return (
		<nav className="navbar">
			<NavLink
				to={internalPaths.home}
				className={({ isActive }) => (isActive ? 'active' : '')}
			>
				Главная
			</NavLink>
			<NavLink
				to={internalPaths.characters}
				className={({ isActive }) => (isActive ? 'active' : '')}
			>
				Герои
			</NavLink>
			<NavLink
				to={internalPaths.locations}
				className={({ isActive }) => (isActive ? 'active' : '')}
			>
				Локации
			</NavLink>
			<NavLink
				to={internalPaths.episodes}
				className={({ isActive }) => (isActive ? 'active' : '')}
			>
				Эпизоды
			</NavLink>
		</nav>
	);
};
