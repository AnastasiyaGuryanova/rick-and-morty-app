import { FC } from 'react';
import { Text, Box } from '@mantine/core';
import { Button } from 'shared/ui';
import { ErrorComponentProps } from './ErrorComponent.types';
import './ErrorComponent.modules.css';

export const ErrorComponent: FC<ErrorComponentProps> = ({
	text = 'Произошла ошибка. Попробуйте позже.',
	onRetry,
	showRetry = false,
}) => {
	return (
		<Box component="div" className="container">
			<Text className="message">{text}</Text>
			{showRetry && onRetry && <Button onClick={onRetry}>Повторить</Button>}
		</Box>
	);
};
