import { ContextType, createContext, useContext } from 'react';
import User from '../../models/user/user';

type UserContextValue = {
    user: User | undefined;
    setUser(user: User): void;
};
const UserContext = createContext<UserContextValue>({
    user: {} as User,
    setUser: () => undefined,
});

export const useUserContext = (): ContextType<typeof UserContext> =>
    useContext(UserContext);

export default UserContext;
