import axios from "axios";

const apiUrl = "http://localhost:3000/";

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

// api.interceptors.request.use(
//     (config) => {
//         const token = this.$store.state.userLogin?.token;
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

export default api;
