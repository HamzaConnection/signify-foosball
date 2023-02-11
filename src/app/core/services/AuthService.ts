import { AxiosResponse } from 'axios';
import { MessageResponse } from '../../models/errros/response.dto';
import { LoginDTO } from '../../models/user/LoginDTO';
import User from '../../models/user/user';
import signifyFoosballApi from '../axios.config.signifyFoosballApi';

const CONTROLLER_ENDPOINT = '/authentication';

const routes = {
    authenticate: () => `${CONTROLLER_ENDPOINT}`,
};

const AuthService = () => {
    const logOut = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    const authenticate = async (dto: LoginDTO): Promise<User | undefined> => {
        const response = await signifyFoosballApi().post<User>(
            routes.authenticate(),
            dto,
        );
        return response.data as User; // Hamza
    };

    return {
        logOut,
        authenticate,
    };
};

export default AuthService;