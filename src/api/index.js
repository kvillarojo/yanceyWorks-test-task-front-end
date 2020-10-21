import axios from "axios";
import { config } from "@/config";
import store from "@/store";

const api = axios.create({
    baseURL: config.app_api_url
});

api.interceptors.request.use(
    function(config) {

        const accessToken = store.state.auth.auth_token.token;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default api;
