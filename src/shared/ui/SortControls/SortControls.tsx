import { FC, useState } from 'react';
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react';
import { Box, Button, Tooltip } from '@mantine/core';
import { SortOrder } from 'shared/types';

export interface SortControlsProps {
	sortOrder: SortOrder;
	onSortChange: (order: SortOrder) => void;
}

export const SortControls: FC<SortControlsProps> = ({ sortOrder, onSortChange }) => {
	const [isHovered, setIsHovered] = useState(false);

	const toggleSortOrder = () => {
		onSortChange(sortOrder === 'ASC' ? 'DESC' : 'ASC');
	};

	return (
		<Box
			style={{
				display: 'flex',
				justifyContent: 'right',
				margin: '10px 0',
				position: 'relative',
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Tooltip
				label={
					sortOrder === 'ASC'
						? 'Включить сортировку по убыванию'
						: 'Включить сортировку по возрастанию'
				}
				opened={isHovered}
				position="left"
				arrowOffset={32}
				arrowSize={6}
				color="rgba(255, 165, 0, 0.7)"
				c="#191970"
				withArrow
			>
				<Button
					onClick={toggleSortOrder}
					variant="light"
					style={{
						borderRadius: '50%',
						width: '40px',
						height: '40px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'rgba(255, 165, 0, 0.9)',
					}}
				>
					{sortOrder === 'ASC' ? (
						<IconChevronUp size={20} />
					) : (
						<IconChevronDown size={20} />
					)}
				</Button>
			</Tooltip>
		</Box>
	);
};
