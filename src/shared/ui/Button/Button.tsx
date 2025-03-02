import { Button as MantineButton } from '@mantine/core';
import { CustomButtonProps } from './Button.types';

export const Button = ({ ...props }: CustomButtonProps) => {
	return (
		<MantineButton
			{...props}
			type={props.type || 'button'}
			onMouseEnter={(e) =>
				(e.currentTarget.style.backgroundColor = 'rgba(255, 165, 0, 1)')
			}
			onMouseLeave={(e) =>
				(e.currentTarget.style.backgroundColor = 'rgba(255, 165, 0, 0.7)')
			}
			className="button"
		>
			{props.children}
		</MantineButton>
	);
};
