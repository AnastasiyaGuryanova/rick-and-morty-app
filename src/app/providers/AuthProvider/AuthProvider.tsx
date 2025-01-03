import { FC, useState } from 'react';
import {
	AuthContextType,
	AuthProviderProps,
	authStorage,
	AuthContext,
} from 'features/auth';
import { SigninUserType } from 'shared/types';

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<SigninUserType | null>(() =>
		authStorage.getUserFromLocalStorage()
	);

	const signin = (newUser: SigninUserType, callback: VoidFunction) => {
		setUser(newUser);
		authStorage.saveUserToLocalStorage(newUser);
		callback();
	};

	const signout = (callback: VoidFunction) => {
		setUser(null);
		authStorage.removeUserFromLocalStorage();
		callback();
	};

	const value: AuthContextType = {
		user,
		signin,
		signout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
