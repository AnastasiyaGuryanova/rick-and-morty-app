import { FC, useState } from 'react';
import { SortControlsProps } from '../../types';
import './SortControls.css';

export const SortControls: FC<SortControlsProps> = ({ sortOrder, onSortChange }) => {
	const [isHovered, setIsHovered] = useState(false);

	const toggleSortOrder = () => {
		onSortChange(sortOrder === 'ASC' ? 'DESC' : 'ASC');
	};

	return (
		<div
			className="sort-controls"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<button
				onClick={toggleSortOrder}
				className="sort-icon"
				aria-label="Toggle Sort"
			>
				<i
					className={`fa ${
						sortOrder === 'ASC' ? 'fa-sort-up' : 'fa-sort-down'
					}`}
					aria-hidden="true"
				></i>
			</button>
			{isHovered && (
				<div className="tooltip">
					{sortOrder === 'ASC'
						? 'Включить сортировку по убыванию'
						: 'Включить сортировку по возрастанию'}
				</div>
			)}
		</div>
	);
};
