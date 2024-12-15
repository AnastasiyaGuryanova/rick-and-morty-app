import { FC } from 'react';
import { LoaderProps } from '../../types';
import './Loader.css';

export const Loader: FC<LoaderProps> = ({
	text = 'Загрузка...',
	className = '',
	size = 40,
}) => {
	return (
		<div className={`loader-container ${className}`}>
			<div
				className="loader-spinner"
				style={{
					width: size,
					height: size,
					borderWidth: size / 8,
				}}
			></div>
			{text && <p className="loader-text">{text}</p>}
		</div>
	);
};
