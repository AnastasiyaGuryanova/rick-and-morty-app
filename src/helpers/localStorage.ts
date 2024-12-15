import { SigninUserType } from '../types';
import { LOCAL_STORAGE_USER_KEY } from '../constants';

export const getUserFromLocalStorage = (): SigninUserType | null => {
	const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
	return storedUser ? JSON.parse(storedUser) : null;
};

export const saveUserToLocalStorage = (user: SigninUserType) => {
	localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
	localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
};
