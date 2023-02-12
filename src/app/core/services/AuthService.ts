
import { LoginDTO } from '../../models/user/LoginDTO';
import User from '../../models/user/user';
import signifyFoosballApi from '../axios.config.signifyFoosballApi';

const CONTROLLER_ENDPOINT = 'http://localhost:5000/admin';

const routes = {
    authenticate: () => `${CONTROLLER_ENDPOINT}`,
    getAdmin: () => `${CONTROLLER_ENDPOINT}`,

};

const AuthService = () => {
    const logOut = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    const getAdmin = async () => {

        try {
            const response = await signifyFoosballApi().get<User>(routes.getAdmin(),)
            return response.data
        } catch (error) {
            // handle errors
            console.log(error)
        }

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
        getAdmin,
    };
};

export default AuthService;