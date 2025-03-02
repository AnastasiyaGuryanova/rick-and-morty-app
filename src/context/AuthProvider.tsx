import { createContext, FC, useState } from 'react';
import { SigninUserType, AuthContextType, AuthProviderProps } from '../types';
import {
	getUserFromLocalStorage,
	saveUserToLocalStorage,
	removeUserFromLocalStorage,
} from '../helpers';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<SigninUserType | null>(() =>
		getUserFromLocalStorage()
	);

	const signin = (newUser: SigninUserType, callback: VoidFunction) => {
		setUser(newUser);
		saveUserToLocalStorage(newUser);
		callback();
	};

	const signout = (callback: VoidFunction) => {
		setUser(null);
		removeUserFromLocalStorage();
		callback();
	};

	const value: AuthContextType = {
		user,
		signin,
		signout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
