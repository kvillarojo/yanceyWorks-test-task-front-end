import _ from "lodash";
import cookies from "js-cookie";
import { AuthService } from "@/services/AuthService";
import { UserService } from "@/services/UserService";

const initialState = () => {
    return {
        auth_token: {
            token: null
        },
        user: {}
    };
};

export default {
    namespaced: true,
    state: initialState(),
    getters: {
        isAuthenticated: state => {
            return !_.isEmpty(state.auth_token) && !_.isEmpty(state.user);
        }
    },
    actions: {
        init: ({ commit }) => {
            const authToken = cookies.getJSON("auth_token");
            const user = cookies.getJSON("user");

            if (!_.isEmpty(authToken)) {
                commit("setAuthToken", { auth_token: authToken });
            }

            if (!_.isEmpty(user)) {
                commit("setCurrentUser", { user });
            }
        },
        login: async ({ commit }, payload) => {
            try {
                const authenticate = await AuthService.login(payload);
                const authenticated = _.get(authenticate.data, "data");

                const { token, user } = authenticated;

                commit("setAuthToken", {
                    auth_token: { token }
                });

                commit("setCurrentUser", { user });

                return authenticated;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        currentUser: ({ commit }) => {
            const authToken = cookies.getJSON("auth_token");

            UserService.currentUser(authToken).then(response => {
                const user = _.get(response.data.data, "user", {});

                commit("setCurrentUser", user);
            });
        },
        logout: ({ commit }) => {
            return AuthService.logout().then(() => {
                commit("invalidateAuthToken");

                _.each(cookies.get(), (item, index) => {
                    cookies.remove(index);
                });
            });
        }
    },
    mutations: {
        setAuthToken: (state, { auth_token }) => {
            if (!auth_token) {
                return;
            }

            cookies.set("auth_token", auth_token);
            state.auth_token = auth_token;
        },
        setCurrentUser: (state, { user }) => {
            cookies.set("user", user);
            state.user = user;
        },
        invalidateAuthToken: state => {
            _.each(cookies.get(), (item, index) => {
                cookies.remove(index);
            });

            _.each(initialState(), (item, index) => {
                state[index] = item;
            });
        },
        resetState: state =>
            _.each(initialState(), (item, index) => {
                state[index] = item;
            })
    }
};
