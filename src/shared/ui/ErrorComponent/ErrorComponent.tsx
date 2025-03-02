import { FC } from 'react';
import { Text, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Button } from 'shared/ui';
import { ErrorComponentProps } from './ErrorComponent.types';
import './ErrorComponent.modules.css';

export const ErrorComponent: FC<ErrorComponentProps> = ({
	text = 'Произошла ошибка. Попробуйте позже.',
	onRetry,
	showRetry = false,
}) => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)');

	return (
		<Box
			component="div"
			className="container"
			style={isSmallScreen ? { margin: '0' } : { margin: '15px 0' }}
		>
			<Text className="message">{text}</Text>
			{showRetry && onRetry && <Button onClick={onRetry}>Повторить</Button>}
		</Box>
	);
};
