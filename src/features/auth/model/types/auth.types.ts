import { SigninUserType } from 'shared';

export interface AuthContextType {
	user: SigninUserType | null;
	signin: (newUser: SigninUserType, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}

export interface AuthProviderProps {
	children: React.ReactNode;
}
