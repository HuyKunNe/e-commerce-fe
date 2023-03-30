import { createStore } from "vuex";

export default createStore({
    state: {
        token: null,
        user: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        async login({ commit }, credentials) {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            commit("setUser", data.data);
            commit("setToken", data.data.token);
        },
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
    },
});
