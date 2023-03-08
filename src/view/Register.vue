<template>
    <Header></Header>
    <HeaderBottomNav></HeaderBottomNav>
    <main class="register" id="register">
        <div class="layout-register">
            <div class="container">
                <div class="content-account">
                    <div class="header-page">TẠO TÀI KHOẢN</div>
                    <form action="#" class="register-form">
                        <input
                            type="text"
                            class="first-name"
                            placeholder="Họ"
                            v-model="firstName"
                        />
                        <input
                            type="text"
                            class="last-name"
                            placeholder="Tên"
                            v-model="lastName"
                        />
                        <div class="gender-radio">
                            <div class="radio">
                                <input
                                    type="radio"
                                    id="male"
                                    value="male"
                                    v-model="gender"
                                    class="radio-btn"
                                />
                                <label for="male">Nam</label>
                            </div>
                            <div class="radio">
                                <input
                                    type="radio"
                                    id="female"
                                    value="female"
                                    v-model="gender"
                                    class="radio-btn"
                                />
                                <label for="female">Nữ</label>
                            </div>
                        </div>
                        <input type="date" name="dob" id="dob" v-model="dob" />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="email"
                            placeholder="Email"
                            v-model="email"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            class="password"
                            placeholder="Password"
                            v-model="password"
                        />
                        <div class="description">
                            This site is protected by reCAPTCHA and the Google
                            Privacy Policy and Terms of Service apply.
                        </div>
                        <button class="register-btn">Đăng ký</button>
                        <a href="/" class="back-to-homepage"
                            >Quay lại trang chủ</a
                        >
                    </form>
                </div>
            </div>
        </div>
    </main>
    <GoToTop></GoToTop>
    <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeaderBottomNav from "@/components/HeaderBottomNav.vue";
import GoToTop from "@/components/GoToTop.vue";
export default {
    name: "RegisterPage",
    components: {
        Header,
        Footer,
        HeaderBottomNav,
        GoToTop,
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            email: "",
            password: "",
        };
    },
};
</script>

<style lang="scss" scoped>
#register.register {
    font-family: "Cousine", monospace;
    height: 800px;
    padding: 48px 0;
    .layout-register {
        height: 100%;
        width: 100%;
        .container {
            width: 70%;
            height: 100%;
            margin: auto;
            padding: 0 15px;
            .content-account {
                height: 100%;
                width: 40%;
                padding: 25px 30px;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                .header-page {
                    width: 100%;
                    height: 5%;
                    margin-bottom: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 25px;
                    font-weight: 700;
                    text-transform: uppercase;
                    outline: 0;
                    padding: 0;
                    line-height: initial;
                    vertical-align: baseline;
                }
                .register-form {
                    height: calc(95% - 10px);
                    width: 100%;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    flex-direction: column;
                    input {
                        padding: 5px 20px;
                        height: 7%;
                        font-size: 14px;
                        margin-bottom: 25px;
                        width: 100%;
                        background-color: rgb(237, 237, 237);
                        &:focus {
                            background-color: white;
                        }
                    }
                    .gender-radio {
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        flex-direction: row;
                        width: 100%;
                        height: 7%;
                        margin-bottom: 25px;
                        .radio {
                            width: 20%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            input[type="radio"],
                            input.radio {
                                height: 30%;
                                float: left;
                                clear: none;
                                margin: 2px 0 0 2px;
                            }
                            .radio-btn:hover {
                                cursor: pointer;
                            }
                        }
                    }
                    .description {
                        font-size: 14px;
                        font-weight: 400;
                        width: 100%;
                        margin-bottom: 25px;
                    }
                    .register-btn {
                        height: 7%;
                        background-color: black;
                        color: white;
                        width: fit-content;
                        padding: 0 30px;
                        border: 1px solid black;
                        margin-bottom: 25px;
                        font-size: 14px;
                        text-transform: uppercase;
                        font-weight: 600;
                        &:hover {
                            opacity: 0.9;
                        }
                    }
                    .back-to-homepage {
                        color: black;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>
