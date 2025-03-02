import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { internalPaths } from 'shared/constants';
import './Navbar.modules.css';

export const Navbar: FC = () => {
	return (
		<nav className="navbar">
			<NavLink
				to={internalPaths.home}
				className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
			>
				Главная
			</NavLink>
			<NavLink
				to={internalPaths.characters}
				className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
			>
				Герои
			</NavLink>
			<NavLink
				to={internalPaths.locations}
				className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
			>
				Локации
			</NavLink>
			<NavLink
				to={internalPaths.episodes}
				className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
			>
				Эпизоды
			</NavLink>
		</nav>
	);
};
