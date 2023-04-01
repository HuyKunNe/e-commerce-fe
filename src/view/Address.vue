<template>
    <Header></Header>
    <HeaderBottomNav></HeaderBottomNav>
    <section class="section-address" id="section-address">
        <div class="layout-address">
            <div class="container">
                <div class="wrapper-heading">
                    <div class="wapper-heading--text">THÔNG TIN ĐỊA CHỈ</div>
                </div>
                <div class="wrapper-content">
                    <div class="account-sidebar">
                        <h3 class="title-sidebar">Tài khoản</h3>
                        <div class="account-content">
                            <div class="account-list">
                                <ul class="list-content">
                                    <li class="item-content">
                                        <a @click="viewProfile()"> Thông tin tài khoản </a>
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
                    <div class="address-main">
                        <div class="infor-address">
                            <div class="address" v-for="(address) in addresses" :key="address.id">
                                <div class="address-title">
                                    <p class="text">{{ address.name }}</p>
                                    <p class="address_actions ">
                                        <span class="action_link action_edit">
                                            <a href="#" onclick="#">
                                                <font-awesome-icon :icon="['far', 'pen-to-square']" />
                                            </a>
                                        </span>
                                        <span class="action_link action_delete">
                                            <a href="#" onclick="#">
                                                <font-awesome-icon :icon="['fas', 'trash-can']" />
                                            </a>
                                        </span>
                                    </p>
                                </div>
                                <div class="address-content">
                                    <div class="full-name">{{ address.name }}</div>
                                    <div class="address-row">
                                        <div class="lb-left"><b>Công ty:</b> </div>
                                        <div class="lb-right">
                                            <p>{{ address.company }}</p>
                                        </div>
                                    </div>
                                    <div class="address-row">
                                        <div class="lb-left"><b>Địa chỉ</b> </div>
                                        <div class="lb-right">
                                            <p>{{ address.no }} {{ address.street }}</p>
                                            <p>{{ address.ward }}</p>
                                            <p>{{ address.district }}</p>
                                            <p>{{ address.city }}, {{ address.nationality }}</p>
                                        </div>
                                    </div>
                                    <div class="address-row">
                                        <div class="lb-left"><b>Số điện thoại:</b> </div>
                                        <div class="lb-right">
                                            <p>{{ address.phoneNumber }}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="add-address">
                            <div class="address">
                                <div class="address-title" @click="isShowAddForm = !isShowAddForm">
                                    <p class="text">Nhập địa chỉ mới</p>
                                </div>
                                <div class="add-form" v-if="isShowAddForm">
                                    <div class="input-group">
                                        <span class="input-ico"></span>
                                        <input type="text" class="text-box" placeholder="Họ">
                                    </div>
                                    <div class="input-group">
                                        <span class="input-ico"></span>
                                        <input type="text" class="text-box" placeholder="Tên">
                                    </div>
                                    <div class="input-group">
                                        <span class="input-ico"></span>
                                        <input type="text" class="text-box" placeholder="Công ty">
                                    </div>
                                    <div class="input-group">
                                        <span class="input-ico"></span>
                                        <input type="text" class="text-box" placeholder="Đường">
                                    </div>
                                    <div class="input-group">
                                        <span class="input-ico"></span>
                                        <input type="text" class="text-box" placeholder="Huyện">
                                    </div>
                                    <div class="input-group">
                                        <span class="input-ico"></span>
                                        <input type="text" class="text-box" placeholder="Thành Phố">
                                    </div>
                                    <div class="input-group">
                                        <span class="input-ico"></span>
                                        <select v-model="selected" class="select-form">
                                            <option disabled value="">-- Please select --</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                        </select>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-ico"></span>
                                        <input type="text" class="text-box" placeholder="Số điện thoại">
                                    </div>
                                    <div class="input-group--checkbox">
                                        <input type="checkbox" class="check-box">
                                        <p class="check-box--text">Đặt làm địa chỉ mặc định.</p>
                                    </div>
                                    <div class="action">
                                        <div class="add-new">
                                            <button class="add-btn">Thêm mới</button>
                                        </div>
                                        <p>hoặc</p>
                                        <a class="cancel" @click="isShowAddForm = false">
                                            Hủy
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
    <GoToTop></GoToTop>
</template>

<script>
import Header from "@/components/Header.vue";
import HeaderBottomNav from "@/components/HeaderBottomNav.vue";
import Footer from "@/components/Footer.vue";
import { globals } from "@/globals";
import GoToTop from "@/components/GoToTop.vue";
import api from "@/api";
export default {
    name: "AddressPage",
    data() {
        return {
            selected: "",
            isShowAddForm: false,
            addresses: [],
        }
    },
    components: {
        Header,
        HeaderBottomNav,
        Footer,
        GoToTop,
    }, methods: {
        async viewAddress() {
            await this.$router.push({ name: "Address" });
        },
        async viewProfile() {
            await this.$router.push({ name: "Profile" });
        },
        async logOut() {
            await localStorage.removeItem("user-info");
            await this.$router.push({ name: "Home" });
        },
    },
    setup() {
        const userInfor = globals.userInfor;
        return {
            userInfor,
        }
    },
    mounted() {
        api.get(`http://localhost:3000/address/getByCustomer?id=${this.$store.state.userLogin.customerId}`)
            .then((res) => {
                this.addresses = res.data.data.addresses
                console.log(res.data.data.addresses);
            })
            .catch((err) => {
                console.error(err)
            })
    }
};
</script>

<style lang="scss" scoped>
#section-address.section-address {
    font-family: "Cousine", monospace;
    padding: 48px 0;

    .layout-address {
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
                justify-content: space-between;
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

                .address-main {
                    width: 80%;
                    height: 100%;
                    border-left: 1px solid black;
                    padding-left: 60px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;

                    .infor-address {
                        height: fit-content;
                        width: 47%;

                        .address {
                            height: fit-content;
                            width: 100%;
                            font-size: 14px;

                            .address-title {
                                width: 100%;
                                background-color: #f8ad78;
                                border: var(--primary-color);
                                margin-bottom: 0;
                                font-size: 15px;
                                font-weight: 500;
                                display: flex;
                                padding: 10px;
                                align-items: center;
                                flex-direction: row;

                                .text {
                                    width: 80%;
                                    height: 100%;
                                }

                                .address_actions {
                                    width: 20%;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: right;

                                    .action_link {
                                        width: 40%;
                                        font-size: 16px;
                                        color: black;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;

                                        a {
                                            text-decoration: none;
                                            color: black;

                                            &:visited {
                                                color: black;
                                            }
                                        }
                                    }
                                }
                            }

                            background: #fbfbfb;
                            padding-bottom: 10px;

                            .address-content {
                                height: 100%;
                                width: 90%;
                                margin: auto;

                                .full-name {
                                    margin-top: 10px;
                                }

                                div {
                                    padding: 5px 0;
                                }

                                .address-row {
                                    display: flex;
                                    align-items: flex-start;
                                    justify-content: space-between;
                                    flex-direction: row;

                                    .lb-left {
                                        width: 40%;
                                        font-family: 'Courier New', Courier, monospace !important;
                                    }

                                    .lb-right {
                                        width: 60%;
                                        padding: 5px 0;

                                    }
                                }
                            }
                        }

                        .address+.address {
                            margin-top: 40px;
                        }
                    }

                    .add-address {
                        height: fit-content;
                        width: 47%;

                        .address {
                            height: fit-content;
                            width: 100%;
                            font-size: 14px;

                            .address-title {
                                width: 100%;
                                margin-bottom: 0;
                                font-size: 15px;
                                display: flex;
                                padding: 10px;
                                align-items: center;
                                justify-content: center;
                                background: #323232;

                                &:hover {
                                    cursor: pointer;
                                }

                                .text {
                                    font-weight: 600;
                                    color: #fff !important;
                                    text-transform: uppercase;
                                }
                            }

                            .add-form {
                                background: #fbfbfb;

                                .input-group {
                                    width: 95%;
                                    padding: 10px 0;
                                    justify-content: center;
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    margin: auto;

                                    .input-ico {
                                        width: 35px;
                                        height: 34px;
                                        line-height: 34px;
                                        text-align: center;
                                        border-radius: 0;
                                        color: #DAD9D9;
                                        background-color: #ebebeb;
                                    }

                                    .text-box,
                                    .select-form {
                                        width: calc(100% - 35px);
                                        height: 34px;
                                        font-size: 13px;
                                        background-color: #fff;
                                        border: 1px solid #ebebeb;
                                        padding-left: 10px;

                                        &:focus {
                                            outline: none;
                                        }
                                    }


                                }

                                .input-group--checkbox {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    height: 34px;
                                    width: 100%;

                                    .check-box {
                                        width: 10%;

                                        &:hover {
                                            cursor: pointer;
                                        }
                                    }

                                    .check-box--text {
                                        height: 100%;
                                        width: 89%;
                                        font-size: 12px;
                                        display: flex;
                                        align-items: center;
                                    }
                                }

                                .action {
                                    display: flex;
                                    align-items: center;
                                    justify-content: left;
                                    margin: auto;
                                    padding: 10px;
                                    width: 90%;

                                    .add-new {

                                        width: 35%;

                                        .add-btn {
                                            text-transform: uppercase;
                                            background: #323232;
                                            font-size: 14px;
                                            font-weight: 400;
                                            color: #fff;
                                            padding: 8px 18px;
                                        }
                                    }

                                    .cancel {
                                        cursor: pointer;
                                        font-size: 15px;
                                        padding-left: 10px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
