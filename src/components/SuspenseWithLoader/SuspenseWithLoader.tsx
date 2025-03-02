import { Suspense, FC } from 'react';
import { Loader } from '../Loader/Loader';
import { SuspenseWithLoaderProps } from '../../types';

export const SuspenseWithLoader: FC<SuspenseWithLoaderProps> = ({ children }) => {
	return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
