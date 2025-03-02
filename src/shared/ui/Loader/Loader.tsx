import { FC } from 'react';
import { Loader as MantineLoader, Text } from '@mantine/core';
import { CustomLoaderProps } from './Loader.types';
import './Loader.modules.css';

export const Loader: FC<CustomLoaderProps> = ({ text = 'Загрузка...', size = 40 }) => {
	return (
		<div className="loader-container">
			<MantineLoader size={size} color="yellow" />
			{text && <Text className="loader-text">{text}</Text>}
		</div>
	);
};
