import { useRef, useCallback, useState } from 'react';
import { ItemType, EnhancedScrollableListProps } from '../../types';
import { useInfiniteLoader, useSortedData } from '../../hooks';
import {
	Loader,
	SortControls,
	ListItemComponent,
	ErrorComponent,
} from '../../components';
import './scrollableList.css';

export const ScrollableList = <T extends ItemType>({
	apiPath,
	sortField,
	itemPath,
}: EnhancedScrollableListProps<T>) => {
	const [pageNumber, setPageNumber] = useState<number>(1);

	const {
		data: rawData,
		isLoading,
		hasMore,
		error,
	} = useInfiniteLoader<T>({
		apiUrl: apiPath,
		pageNumber,
	});

	const observer = useRef<IntersectionObserver | null>(null);

	const lastNoderef = useCallback(
		(node: HTMLLIElement | null) => {
			if (isLoading) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevState) => prevState + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[isLoading, hasMore]
	);

	const { sortedData, sortOrder, changeSortOrder } = useSortedData<T>({
		data: rawData,
		sortField,
		defaultOrder: 'DESC',
	});

	return (
		<div>
			<SortControls sortOrder={sortOrder} onSortChange={changeSortOrder} />
			<ul className="scrollable-list">
				{sortedData.map((item, index) => {
					const isLast = sortedData.length === index + 1;
					return (
						<ListItemComponent
							ref={isLast ? lastNoderef : null}
							key={item.id}
							item={item}
							path={itemPath}
							displayField="name"
						/>
					);
				})}
				{isLoading && <Loader />}
				{error && <ErrorComponent />}
			</ul>
		</div>
	);
};
