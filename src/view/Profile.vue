<template>
    <Header></Header>
    <HeaderBottomNav></HeaderBottomNav>
    <section class="section-profile" id="section-profile">
        <div class="layout-profile">
            <div class="container">
                <div class="wrapper-heading">
                    <div class="wapper-heading--text">Tài khoản của bạn</div>
                </div>
                <div class="wrapper-content">
                    <div class="account-sidebar">
                        <h3 class="title-sidebar">Tài khoản</h3>
                        <div class="account-content">
                            <div class="account-list">
                                <ul class="list-content">
                                    <li class="item-content">
                                        <a href=""> Thông tin tài khoản </a>
                                    </li>
                                    <li class="item-content">
                                        <a @click="viewAddress()">
                                            Thông tin địa chỉ
                                        </a>
                                    </li>
                                    <li class="item-content">
                                        <a @click="logOut()"> Đăng xuất </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="account-main">
                        <div class="infor-account">
                            <p class="title-detail">Thông tin tài khoản</p>
                            <h2 class="name">Dinh Quang Huy</h2>
                            <p class="email">dinhquanghuydt@gmail.com</p>
                            <div class="address">
                                <div class="street">176/4 Le Van Sy</div>
                                <div class="district">Phu Nhuan</div>
                                <div class="city">Ho Chi Minh</div>
                                <div class="phone-number">0888465559</div>
                                <a @click="viewAddress()">Xem địa chỉ</a>
                            </div>
                        </div>
                        <div class="order-account">
                            <div class="order-heading">
                                DANH SÁCH ĐƠN HÀNG MỚI NHẤT
                            </div>
                            <div class="order-content">
                                <div
                                    class="empty-alert"
                                    v-if="orders.length === 0"
                                >
                                    <p>Bạn chưa đặt mua sản phẩm.</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
    name: "ProfilePage",
    components: {
        Header,
        Footer,
        HeaderBottomNav,
    },
    data() {
        return {
            orders: [],
        };
    },
    methods: {
        async viewAddress() {
            // let user = localStorage.getItem("user-login");
            // if (!user) {
            //     this.$router.push({ name: "Login" });
            // } else this.$router.push({ name: "Address" });
        },
        async logOut() {
            this.$router.push({ name: "Home" });
            localStorage.removeItem("user-login");
        },
    },
};
</script>

<style lang="scss" scoped>
#section-profile.section-profile {
    font-family: "Cousine", monospace;
    // height: 540px;
    padding: 48px 0;
    .layout-profile {
        height: fit-content;
        margin: auto;
        .container {
            width: calc(75%);
            height: 100%;
            margin: auto;
            .wrapper-heading {
                height: 20%;
                width: 100%;
                text-align: right;
                .wapper-heading--text {
                    font-size: 25px;
                    font-weight: 700;
                    text-transform: uppercase;
                    padding: 20px 0;
                    padding-right: 20px;
                }
            }
            .wrapper-content {
                height: 80%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                .account-sidebar {
                    width: 18%;
                    height: 100%;
                    padding: 0 15px;
                    .title-sidebar {
                        font-size: 15px;
                        font-weight: 700;
                        letter-spacing: 1px;
                        width: 100%;
                        text-transform: uppercase;
                        padding-bottom: 10px;
                    }
                    .account-content {
                        width: 100%;
                        height: 70%;
                        .account-list {
                            height: 100%;
                            width: 100%;
                            .list-content {
                                .item-content {
                                    padding-left: 10px;
                                    padding-bottom: 10px;
                                    list-style-position: inside;
                                    list-style: none;
                                    a {
                                        text-decoration: none;
                                        color: black;
                                        font-size: 14px;
                                        font-weight: 400;
                                        &:hover {
                                            cursor: pointer;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .account-main {
                    width: 80%;
                    height: 100%;
                    border-left: 1px solid black;
                    padding-left: 30px;
                    .infor-account {
                        height: 100%;
                        width: 100%;
                        .title-detail {
                            padding-bottom: 8px;
                            margin-bottom: 3px;
                            font-size: 15px;
                            text-transform: uppercase;
                            line-height: 24px;
                            letter-spacing: 1px;
                            font-weight: 700;
                        }
                        .name {
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 21px;
                            margin: 10px 0 5px;
                            display: block;
                        }
                        .email {
                            margin-bottom: 3px;
                            line-height: 24px;
                            font-weight: 400;
                            font-size: 14px;
                        }
                        .address {
                            width: 100%;
                            height: 30%;
                            line-height: 24px;
                            font-size: 14px;
                            margin-bottom: 3px;
                            font-weight: 400;
                            div {
                                margin-bottom: 3px;
                            }
                            a {
                                color: black;
                                cursor: pointer;
                                text-decoration: underline;
                            }
                            margin-bottom: 30px;
                        }
                    }
                    .order-account {
                        width: 100%;
                        .order-heading {
                            text-transform: uppercase;
                            font-size: 15px;
                            font-weight: 700;
                            letter-spacing: 1px;
                            position: relative;
                            padding-bottom: 8px;
                        }
                        .empty-alert {
                            position: relative;
                            padding: 0.75rem 1.25rem;
                            margin-bottom: 1rem;
                            border: 1px solid transparent;
                            border-radius: 0.25rem;
                            line-height: 24px;
                            font-size: 14px;
                            background: #d4d4d4;
                        }
                    }
                }
            }
        }
    }
}
</style>
