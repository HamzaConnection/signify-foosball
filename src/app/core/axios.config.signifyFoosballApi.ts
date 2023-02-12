import axios, { AxiosRequestConfig } from 'axios';


// const BASE_URL = `${process.env.REACT_APP_API_URL}`;
const BASE_URL = `${"http://localhost:5000"}`;

const standardConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    timeout: 10000,
};

const signifyFoosballApi = (config?: AxiosRequestConfig) => {
    const instance = axios.create({
        ...config,
        ...standardConfig,
    });
    instance.interceptors.request.use(
        (request) => {
            return request;
        },
        (error) => {
            return error;
        },
    );
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return error
        },
    );
    return instance;
};

export default signifyFoosballApi;