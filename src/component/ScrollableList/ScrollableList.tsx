import { FC } from 'react';
import { ScrollableListProps } from '../../types';
import './scrollableList.css';

export const ScrollableList: FC<ScrollableListProps> = ({ children }) => {
	return <ul className="scrollable-list">{children}</ul>;
};
