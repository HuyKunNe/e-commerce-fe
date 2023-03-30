import api from "@/api";


class AuthService {
    login(loginDTO) {
        return api
            .post("auth/login", {
                email: loginDTO.email,
                password: loginDTO.password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    // register(user) {
    //     return axios.post(`auth/register`, {
    //         username: user.username,
    //         email: user.email,
    //         password: user.password,
    //     });
    // }
}

export default new AuthService();
