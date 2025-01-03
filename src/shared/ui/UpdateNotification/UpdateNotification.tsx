import { useEffect, useState, FC } from 'react';
import { Notification, Text } from '@mantine/core';
import { Button } from 'shared/ui';
import { useRegisterSW } from 'virtual:pwa-register/react';

export const UpdateNotification: FC = () => {
	const { needRefresh: rawNeedRefresh, updateServiceWorker } = useRegisterSW();
	const [show, setShow] = useState<boolean>(false);

	const needRefresh = Array.isArray(rawNeedRefresh)
		? rawNeedRefresh[0]
		: rawNeedRefresh;

	useEffect(() => {
		if (needRefresh) setShow(true);
	}, [needRefresh]);

	if (!show) return null;

	return (
		<Notification
			color="rgba(255, 165, 0, 0.7)"
			title="Обновление доступно"
			onClose={() => setShow(false)}
			styles={{
				root: {
					position: 'fixed',
					bottom: '20px',
					right: '20px',
					zIndex: 1000,
					maxWidth: '400px',
				},
			}}
		>
			<Text>
				Доступно обновление приложения. Обновите страницу для загрузки новой
				версии.
			</Text>
			<Button
				onClick={async () => {
					await updateServiceWorker();
					setShow(false);
				}}
			>
				Обновить
			</Button>
		</Notification>
	);
};
