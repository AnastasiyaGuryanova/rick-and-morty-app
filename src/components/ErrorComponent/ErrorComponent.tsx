import { FC } from 'react';
import { ErrorComponentProps } from '../../types';
import './ErrorComponent.css';

export const ErrorComponent: FC<ErrorComponentProps> = ({
	text = 'Произошла ошибка. Попробуйте позже.',
	className = '',
	onRetry,
	showRetry = false,
}) => {
	return (
		<div className={`error-component ${className}`}>
			<div className="error-message">{text}</div>
			{showRetry && onRetry && (
				<button className="button" onClick={onRetry}>
					Повторить
				</button>
			)}
		</div>
	);
};
