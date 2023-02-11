import User from '../../models/user/user';
import UserContext from '../context/userContext';

type AuthProviderProps = {
    userState: {
        user: User | undefined;
        setUser(user: User): void;
    };
    children: React.ReactNode;
};

const AuthProvider = ({
    userState,
    children,
}: AuthProviderProps): JSX.Element => {
    return (
        <UserContext.Provider value={userState}>{children}</UserContext.Provider>
    );
};

export default AuthProvider;
