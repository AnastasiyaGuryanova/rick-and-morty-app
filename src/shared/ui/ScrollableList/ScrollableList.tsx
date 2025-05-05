import { useRef, useCallback, useState } from 'react';
import { Box, ScrollArea, List } from '@mantine/core';
import { Loader, SortControls, ListItemComponent, ErrorComponent } from 'shared/ui';
import { useSortedData, useInfiniteLoader } from 'shared/hooks';
import { ItemType, SortDirection } from 'shared/types';
import classes from './ScrollableList.module.css';

interface ScrollableListProps<T extends ItemType> {
	apiPath: string;
	sortField: keyof T;
	itemPath: string;
	displayField?: keyof T;
}

export const ScrollableList = <T extends ItemType>({
	apiPath,
	sortField,
	itemPath,
}: ScrollableListProps<T>) => {
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
		(node: HTMLDivElement | null) => {
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
		defaultOrder: SortDirection.DESC,
	});

	return (
		<Box>
			<SortControls sortOrder={sortOrder} onSortChange={changeSortOrder} />

			<ScrollArea
				style={{
					height: '80vh',
					margin: '15px 0',
					borderRadius: '8px',
					backgroundColor: 'rgba(255, 255, 0, 0.4)',
				}}
				classNames={classes}
			>
				<List style={{ listStyle: 'none', margin: 0, padding: '10px 20px' }}>
					{sortedData.map((item, index) => {
						const isLast = sortedData.length === index + 1;

						return (
							<ListItemComponent
								ref={isLast ? lastNoderef : null}
								key={item.id}
								item={item}
								path={itemPath}
								displayField="name"
								additionalField="created"
							/>
						);
					})}
				</List>
				{isLoading && <Loader />}
				{error && <ErrorComponent />}
			</ScrollArea>
		</Box>
	);
};
