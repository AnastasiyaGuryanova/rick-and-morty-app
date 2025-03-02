import { createTheme, Button, TextInput, PasswordInput } from '@mantine/core';

export const theme = createTheme({
	fontFamily:
		'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, sans-serif',

	components: {
		Button: Button.extend({
			defaultProps: {
				color: 'rgba(255, 165, 0, 0.7)',
				c: '#191970',
				size: 'lg',
			},
		}),

		TextInput: TextInput.extend({
			defaultProps: {
				size: 'md',
			},
		}),
		PasswordInput: PasswordInput.extend({
			defaultProps: {
				size: 'md',
			},
		}),
	},
});
