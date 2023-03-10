<template>
    <Header></Header>
    <HeaderBottomNav :class="header - navbar"></HeaderBottomNav>
    <section class="customer" id="customer">
        <div class="container">
            <div class="customer-login">
                <div class="header-page">
                    <h3>Đăng nhập</h3>
                </div>
                <div class="content">
                    <div class="login-form">
                        <input
                            type="email"
                            name="email"
                            id="email-input"
                            class="email-input"
                            placeholder="Email"
                            v-model="email"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password-input"
                            class="password-input"
                            placeholder="Password"
                            v-model="password"
                        />
                    </div>
                    <div class="action">
                        <div class="description">
                            This site is protected by reCAPTCHA and the Google
                            Privacy Policy and Terms of Service apply.
                        </div>
                        <div class="button">
                            <button class="login-btn">Đăng nhập</button>
                            <div class="other-action">
                                <a href="#" @click="showRecovery()"
                                    >Quên mật khẩu?</a
                                >
                                <br />hoặc
                                <a href="/account/register" title="Đăng ký"
                                    >Đăng ký</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="recover-password" id="recover-password">
                    <div class="account-type">
                        <h2>Phục hồi đăng nhập</h2>
                    </div>
                    <form action="#" class="recovery">
                        <div class="input">
                            <input
                                type="email"
                                size="30"
                                name="email"
                                placeholder="Email"
                                id="recover-email"
                                class="recover-input"
                                v-model="email"
                            />
                        </div>
                        <div class="description">
                            This site is protected by reCAPTCHA and the Google
                            Privacy Policy and Terms of Service apply.
                        </div>
                        <div class="action">
                            <button class="submit">Gửi</button>
                            <a href="#" class="cancle" @click="hideRecovery()"
                                >Hủy</a
                            >
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeaderBottomNav from "@/components/HeaderBottomNav.vue";
export default {
    name: "LoginPage",
    components: {
        Header,
        Footer,
        HeaderBottomNav,
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        showRecovery() {
            document.getElementById("recover-password").style.display = "block";
        },
        hideRecovery() {
            document.getElementById("recover-password").style.display = "none";
        },
    },
};
</script>

<style lang="scss" scoped>
.header-bot-bar {
    position: relative !important;
    z-index: 1 !important;
}
#customer.customer {
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Courier New", Courier, monospace;
    .container {
        height: 80%;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        .customer-login {
            height: 80%;
            width: 50%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;

            .header-page {
                height: 10%;
                width: 100%;
                margin-bottom: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 25px;
                font-weight: 700;
                text-transform: uppercase;
            }
            .content {
                height: 80%;
                width: 100%;
                display: flex;
                justify-content: left;
                align-items: center;
                flex-direction: column;
                position: relative;
                .login-form {
                    height: 40%;
                    width: 100%;
                    input {
                        height: 45%;
                        width: 100%;
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        flex-direction: column;
                        margin-bottom: 20px;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 3px;
                        background-color: rgb(237, 237, 237);
                        font-size: 16px;
                    }
                }
                .action {
                    height: 60%;
                    width: 100%;
                    margin-top: 30px;
                    .description {
                        width: 100%;
                        height: 40%;
                        font-weight: 300;
                        letter-spacing: 2px;
                        border: 0;
                        font-size: 14px;
                        line-height: 1.5;
                        margin: 0;
                        outline: 0;
                        padding: 0;
                        vertical-align: baseline;
                        font-family: "Cousine Regular", sans-serif !important;
                    }
                    .button {
                        height: 40%;
                        width: 100%;
                        margin: auto;
                        margin-top: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .login-btn {
                            width: fit-content;
                            padding: 0 30px;
                            background-color: black;
                            border: 1px solid black;
                            color: white;
                            height: 90%;
                            font-size: 14px;
                            font-weight: 600;
                            text-transform: uppercase;
                            margin: 0 12px;
                        }
                        .other-action {
                            width: fit-content;
                            height: 90%;
                            margin: 0 12px;
                            text-align: center;
                            outline-color: initial;
                            font-size: 14px;
                            a {
                                font-weight: 600;
                                text-decoration: none;
                                color: rgba(0, 0, 0, 1);
                                &:hover {
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
            .recover-password {
                display: none;
                position: absolute;
                height: 85%;
                width: 100%;
                z-index: 1;
                bottom: 0;
                border: none;
                background-color: white;
                .account-type {
                    margin-top: 5px;
                }
                .recovery {
                    margin-top: 20px;
                    height: 70%;
                    width: 100%;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    flex-direction: column;
                    .input {
                        height: 35%;
                        width: 100%;
                        .recover-input {
                            height: 60%;
                            width: 100%;
                            padding: 10px 20px;
                            border: none;
                            border-radius: 3px;
                            background-color: rgb(237, 237, 237);
                            font-size: 16px;
                        }
                    }
                    .description {
                        width: 100%;
                        height: 35%;
                        font-weight: 300;
                        letter-spacing: 2px;
                        border: 0;
                        font-size: 14px;
                        line-height: 1.5;
                        margin: 0;
                        outline: 0;
                        padding: 0;
                        vertical-align: baseline;
                        font-family: "Cousine Regular", sans-serif !important;
                    }
                    .action {
                        width: 100%;
                        height: 30%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .submit {
                            height: 80%;
                            width: fit-content;
                            padding: 0 30px;
                            color: white;
                            background-color: black;
                            border: 1px solid black;
                            margin: 0 12px;
                            &:hover {
                                opacity: 0.8;
                            }
                        }
                        .cancle {
                            text-decoration: none;
                            color: black;
                            margin: 0 12px;
                            height: 80%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }
}
</style>
