// widgets/Navbar/ui/BurgerMenu.tsx
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Burger, Drawer, ScrollArea } from '@mantine/core';
import { internalPaths } from 'shared/constants';
import './BurgerMenu.modules.css';

export const BurgerMenu: FC = () => {
	const [opened, setOpened] = useState(false);

	return (
		<>
			<div className="burger-menu">
				<Burger
					color="#FFA500"
					opened={opened}
					onClick={() => setOpened((o) => !o)}
					aria-label="Открыть меню"
				/>
				<Drawer
					opened={opened}
					onClose={() => setOpened(false)}
					position="left"
					padding="md"
					withCloseButton={false}
					overlayProps={{
						opacity: 0.5,
						blur: 3,
					}}
					styles={{
						content: { backgroundColor: 'rgba(25, 25, 112, 0.7)' },
					}}
				>
					<ScrollArea style={{ height: '100%' }}>
						<nav className="drawer-nav">
							<NavLink
								to={internalPaths.home}
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
								onClick={() => setOpened(false)}
							>
								Главная
							</NavLink>
							<NavLink
								to={internalPaths.characters}
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
								onClick={() => setOpened(false)}
							>
								Герои
							</NavLink>
							<NavLink
								to={internalPaths.locations}
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
								onClick={() => setOpened(false)}
							>
								Локации
							</NavLink>
							<NavLink
								to={internalPaths.episodes}
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
								onClick={() => setOpened(false)}
							>
								Эпизоды
							</NavLink>
						</nav>
					</ScrollArea>
				</Drawer>
			</div>
		</>
	);
};
