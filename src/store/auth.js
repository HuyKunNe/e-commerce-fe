import api from "@/api";
export default {
    state: {
        isLoggedIn: false,
        userLogin: null,
        showLoginToast: 0,
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.userLogin;
        },
        showLoginToast(state){
            return state.showLoginToast;
        }
    },
    mutations: {
        login(state, user) {
            state.isLoggedIn = true;
            state.userLogin = user;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userLogin = null;
        },
        initializeStore(state) {
            if (localStorage.getItem("email")) {
                state.email = localStorage.getItem("email");
            }
        },
    },
    actions: {
        login({ commit }, loginDTO) {
            // Here you can make an API request to authenticate the user
            // and return a promise that resolves with the user data.
            // For example, using axios:
            return api.post("/auth/login", loginDTO).then((response) => {
                const res = response;
                commit("login", res);
                return res;
            });
        },
        logout({ commit }) {
            // Here you can make an API request to log out the user.
            // For example, using axios:
            return api.post("/api/logout").then(() => {
                commit("logout");
            });
        },
        
    },
    modules: {},
};
