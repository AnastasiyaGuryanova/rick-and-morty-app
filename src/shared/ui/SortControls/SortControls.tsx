import { FC, useState } from 'react';
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react';
import { Box, Button, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { SortDirection } from 'shared/types';

export interface SortControlsProps {
	sortOrder: SortDirection;
	onSortChange: (order: SortDirection) => void;
}

export const SortControls: FC<SortControlsProps> = ({ sortOrder, onSortChange }) => {
	const [isHovered, setIsHovered] = useState(false);
	const isSmallScreen = useMediaQuery('(max-width: 768px)');

	const toggleSortOrder = () => {
		onSortChange(
			sortOrder === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC
		);
	};

	return (
		<Box
			style={
				isSmallScreen
					? { position: 'fixed', top: '16px', right: '16px' }
					: {
							display: 'flex',
							justifyContent: 'right',
							padding: '10px 0 0',
							position: 'relative',
					  }
			}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{isSmallScreen ? (
				sortOrder === 'ASC' ? (
					<IconChevronUp size={30} color="#FFA500" onClick={toggleSortOrder} />
				) : (
					<IconChevronDown
						size={30}
						color="#FFA500"
						onClick={toggleSortOrder}
					/>
				)
			) : (
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
			)}
		</Box>
	);
};
