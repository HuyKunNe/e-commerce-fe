/* eslint-disable no-use-before-define */
<template>
    <div class="header-wrapper">
        <div class="header">
            <div class="left-logo">
                <router-link to="/">
                    <img
                        src="../assets/images/LeftLogo.png"
                        alt="Bad Habits Official Store"
                        class="left-logo-img"
                        style="height: 95px"
                    />
                </router-link>
            </div>
            <div class="middle-logo">
                <router-link to="/">
                    <img
                        src="../assets/images/MiddleLogo.png"
                        alt="Bad Habits Official Store"
                        class="middle-logo-img"
                        style="height: 95px"
                    />
                </router-link>
            </div>
            <div class="header-icon">
                <router-link to="/">
                    <div class="icon">
                        <div class="right-logo">
                            <img
                                src="../assets/images/RightLogo.png"
                                alt="Bad Habits Official Store"
                                class="right-logo-img"
                                style="height: 55px; width: 40px"
                            />
                        </div>
                    </div>
                </router-link>

                <!-- Search -->
                <div class="icon">
                    <div class="search-icon" @click="handleShowSearchModal()">
                        <img
                            src="../assets/images/search-icon.png"
                            class="search-icon-img"
                            style="height: 40px; width: 40px"
                        />
                    </div>
                    <div class="icon--hover"></div>
                </div>
                <v-dialog
                    v-model="isShowSearchModal"
                    width="1860px"
                    height="540px"
                    class="dialog"
                >
                    <v-card
                        width="100%"
                        height="100%"
                        class="dialog-loader"
                        variant="outlined"
                    >
                        <div class="search-modal">
                            <div class="category">
                                <button
                                    class="category-btn"
                                    v-for="item in category"
                                    :key="item.id"
                                >
                                    {{ item }}
                                </button>
                            </div>
                            <div class="search-wrapper">
                                <div class="search-filed">
                                    <input
                                        class="search-field-input"
                                        type="text"
                                        placeholder="Search"
                                    />
                                </div>
                                <div class="search-btn-field">
                                    <button class="search-btn">Search</button>
                                </div>
                            </div>
                            <div class="popular">
                                <div class="popular-heading">
                                    <p class="popular-heading--text">POPULAR</p>
                                </div>
                                <div class="popular-list">
                                    <div
                                        class="popular-item"
                                        v-for="item in popular"
                                        :key="item.id"
                                    >
                                        <p class="popular-item--text">
                                            {{ item }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-dialog>
                <!-- Cart -->
                <div class="icon">
                    <div
                        class="cart-icon"
                        @click="
                            isOpened = true;
                            calcTotalPriceOnClick();
                        "
                    >
                        <img
                            src="../assets/images/cart.png"
                            alt=""
                            class="search-icon-img"
                            style="height: 40px; width: 40px"
                        />
                        <div class="cart-icon-count">
                            <p class="">{{ carts.length
                             }}</p>
                        </div>
                    </div>
                    <div class="icon--hover"></div>
                </div>
                <VueSidePanel
                    v-model="isOpened"
                    width="600px"
                    class="side-panel"
                    hide-close-btn
                >
                    <template #header>
                        <div style="text-align: left; height: 60px">
                            <h2
                                :style="{
                                    fontSize: '28px',
                                    margin: '30px 20px 0 30px',
                                }"
                            >
                                Giỏ hàng
                            </h2>
                        </div>
                        <div class="line-break"></div>
                    </template>
                    <template #default>
                        <div class="cart list-item">
                            <div
                                class="cart list-item--empty"
                                v-if="carts.length === 0"
                            >
                                Không có sản phẩm trong giỏ hàng
                            </div>
                            <div
                                class="cart list-item item"
                                v-for="item in carts"
                                :key="item.id"
                            >
                                <div class="item-image">
                                    <a :href="item.href">
                                        <img
                                            class="item-image--img"
                                            :src="item.imageUrl"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div class="item-info">
                                    <div class="item-info--title">
                                        <div class="item-infor--title title">
                                            <a
                                                class="item-link"
                                                :href="item.href"
                                                >{{ item.name }}</a
                                            >
                                        </div>
                                        <div
                                            class="item-infor--title remove-btn"
                                        >
                                            <button
                                                class="remove-btn"
                                                @click="
                                                    removeItemInCarts(item.id);
                                                    calcTotalPrice();
                                                "
                                            >
                                                x
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        class="item-info--size"
                                        style="font-size: 18px"
                                    >
                                        <span>size SIZE {{ item.size }}</span>
                                    </div>
                                    <div class="item-info--price">
                                        <div class="item-info--quantity">
                                            <button
                                                @click="
                                                    minus(item.id);
                                                    calculatePrice(item.id);
                                                "
                                            >
                                                <font-awesome-icon
                                                    icon="fa-solid fa-minus"
                                                />
                                            </button>
                                            <input
                                                class="quantity-btn--counter"
                                                id="quantity-item"
                                                placeholder="1"
                                                name="quantity"
                                                v-model.lazy="item.quantity"
                                                type="text"
                                                readonly
                                            />
                                            <button
                                                @click="
                                                    plus(item.id);
                                                    calculatePrice(item.id);
                                                "
                                                class="plus"
                                            >
                                                <font-awesome-icon
                                                    icon="fa-solid fa-plus"
                                                />
                                            </button>
                                        </div>
                                        <div class="item-info--totalprice">
                                            <input
                                                type="text"
                                                class="price-item"
                                                readonly
                                                v-model.lazy="item.priceFormat"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="line-break"></div>
                        </div>
                        <div class="cart payment">
                            <div class="cart payment--header">
                                <p class="payment-header--title">Tạm tính</p>
                                <input
                                    type="text"
                                    class="payment-price"
                                    v-model.lazy="totalPrice"
                                    @changed="formatNumber(totalPrice)"
                                    readonly
                                />
                            </div>
                            <div class="cart payment-description">
                                <p class="payment-description--text">
                                    Các loại phí khác sẽ được tính trong phần
                                    thanh toán
                                </p>
                            </div>
                            <div class="cart-payment--btn">
                                <button class="payment-btn">Thanh toán</button>
                            </div>
                        </div>
                        <div class="line-break"></div>
                        <div class="cart-recommend">
                            <div class="cart-recommend-top">
                                <p>Có thể bạn quan tâm</p>
                            </div>
                            <div class="cart-recommend content">
                                <div class="cart-recommend list-products">
                                    <div
                                        class="list-products-item"
                                        v-for="item in recommends"
                                        :key="item.id"
                                    >
                                        <div class="item-img">
                                            <a :href="item.href">
                                                <img
                                                    :src="item.imageUrl"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="item-info">
                                            <a
                                                :href="item.href"
                                                class="title"
                                                >{{ item.name }}</a
                                            >
                                            <div class="price">
                                                {{ formatNumber(item.price) }}
                                            </div>
                                            <a :href="item.href" class="detail"
                                                >Xem chi tiết</a
                                            >
                                        </div>
                                    </div>
                                    <div
                                        class="line-break"
                                        :style="{
                                            marginLeft: 30 + 'px',
                                            marginBottom: 20 + 'px',
                                        }"
                                    ></div>
                                </div>
                            </div>
                            <div class="car-recommend-bottom">
                                <button class="view-more">Xem thêm</button>
                            </div>
                        </div>
                    </template>
                </VueSidePanel>
                <div class="icon">
                    <div class="account-icon" @click="viewAccount">
                        <img
                            src="../assets/images/account.png"
                            alt=""
                            class="search-icon-img"
                            style="height: 40px; width: 40px"
                        />
                    </div>
                    <div class="icon--hover"></div>
                </div>
            </div>
        </div>
        <div class="header-mid-bar">
            <div class="marquee">
                <span> FREESHIP TOÀN QUỐC HÓA ĐƠN TỪ 800K</span>
                <span> FREESHIP TOÀN QUỐC HÓA ĐƠN TỪ 800K</span>
                <span> FREESHIP TOÀN QUỐC HÓA ĐƠN TỪ 800K</span>
                <span> FREESHIP TOÀN QUỐC HÓA ĐƠN TỪ 800K</span>
                <span> FREESHIP TOÀN QUỐC HÓA ĐƠN TỪ 800K</span>
                <span> FREESHIP TOÀN QUỐC HÓA ĐƠN TỪ 800K</span>
                <span> FREESHIP TOÀN QUỐC HÓA ĐƠN TỪ 800K</span>
                <span> FREESHIP TOÀN QUỐC HÓA ĐƠN TỪ 800K</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { VueSidePanel } from "vue3-side-panel";
import "vue3-side-panel/dist/vue3-side-panel.css";
export default {
    name: "HeaderComponent",
    components: {
        VueSidePanel,
    },
    data() {
        return {
            isShowSearchModal: false,
            category: [
                "KHÁC",
                "NEW ARRIVAL",
                "TẤT CẢ",
                "MY ANIMALS SERIES",
                "SPRING/SUMMER 2022",
                "POPULAR LOGO",
                "SLIDES",
                "DÉP (SLIPPER)",
                "DORAEMON | LEVENTS®",
                "TEE",
                "BAG",
                "PANT",
                "SHIRT",
                "SANDAL",
                "GIFT",
                "ÁO",
                "QUẦN",
                "BA LÔ",
                "PHỤ KIỆN",
                "OUTERWEAR",
                "SALE",
                "BST",
                "OTHER",
            ],
            popular: [
                "Clothing",
                "Short",
                "Blue",
                "Shirt",
                "Polo",
                "T-shirt",
                "Sweater",
                "Hoodie",
                "Jacket",
            ],
            totalPrice: "",
            carts: [
                {
                    id: 1,
                    name: "Levents® Wash Tee/ Ivory White",
                    price: 375000,
                    size: 1,
                    quantity: 1,
                    totalPrice: 375000,
                    priceFormat: 375000,
                    imageUrl:
                        "https://levents.asia/wp-content/uploads/2022/10/z3809177331705_cdfaae50251a4d9e50ac691d815112fd-2048x2048.jpg",
                    href: "#",
                },
                {
                    id: 2,
                    name: "Levents® Wash Tee/ Ivory White",
                    price: 37000,
                    size: 1,
                    quantity: 1,
                    totalPrice: 37000,
                    priceFormat: 37000,
                    imageUrl:
                        "https://levents.asia/wp-content/uploads/2022/10/z3809177331705_cdfaae50251a4d9e50ac691d815112fd-2048x2048.jpg",
                    href: "#",
                },
                {
                    id: 3,
                    name: "Levents® Wash Tee/ Ivory White",
                    price: 35000,
                    size: 1,
                    quantity: 1,
                    totalPrice: 35000,
                    priceFormat: 35000,
                    imageUrl:
                        "https://levents.asia/wp-content/uploads/2022/10/z3809177331705_cdfaae50251a4d9e50ac691d815112fd-2048x2048.jpg",
                    href: "#",
                },
            ],
            recommends: [
                {
                    id: 2,
                    href: "https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/",
                    imageUrl:
                        "https://levents.asia/wp-content/uploads/2023/01/z4114159853574_727c49c4a01c10f3d562dcf4f852c0ff-150x150.jpg",
                    name: "Levents® Pepper Salt Long Sleeve Polo/ Grey",
                    price: 430000,
                },
                {
                    id: 2,
                    href: "https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/",
                    imageUrl:
                        "https://levents.asia/wp-content/uploads/2023/01/z4114159853574_727c49c4a01c10f3d562dcf4f852c0ff-150x150.jpg",
                    name: "Levents® Pepper Salt Long Sleeve Polo/ Grey",
                    price: 430000,
                },
                {
                    id: 3,
                    href: "https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/",
                    imageUrl:
                        "https://levents.asia/wp-content/uploads/2023/01/z4114159853574_727c49c4a01c10f3d562dcf4f852c0ff-150x150.jpg",
                    name: "Levents® Pepper Salt Long Sleeve Polo/ Grey",
                    price: 430000,
                },
            ],
        };
    },
    methods: {
        async calculatePrice(id) {
            var product = this.carts.find((obj) => obj.id === id);
            product.totalPrice = product.price * product.quantity;
            product.priceFormat = this.formatNumber(product.totalPrice);
            this.calcTotalPrice();
        },
        async calcTotalPrice() {
            var totalPrice = 0;
            this.carts.forEach((product) => {
                totalPrice += product.price * product.quantity;
            });
            this.totalPrice = this.formatNumber(totalPrice);
        },
        async calcTotalPriceOnClick() {
            var totalPrice = 0;
            this.carts.forEach((product) => {
                totalPrice += product.price * product.quantity;
                product.priceFormat = this.formatNumber(
                    product.price * product.quantity
                );
            });
            this.totalPrice = this.formatNumber(totalPrice);
        },
        async viewAccount() {
            let user = localStorage.getItem("user-login");
            if (!user) {
                this.$router.push({ name: "Login" });
            }
        },
        removeItemInCarts(id) {
            console.log(id);
            var carts = this.carts.filter((item) => item.id !== id);
            console.log(carts);
            this.carts = carts;
            return this.carts;
        },
        minus(id) {
            if (this.carts.find((obj) => obj.id === id).quantity === 0) return;
            this.carts.find((obj) => obj.id === id).quantity--;
            console.log(
                id,
                " ",
                this.carts.find((obj) => obj.id === id).quantity
            );
        },
        plus(id) {
            this.carts.find((obj) => obj.id === id).quantity++;
            console.log(
                id,
                " ",
                this.carts.find((obj) => obj.id === id).quantity
            );
        },
        formatNumber(number) {
            return new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(number);
        },
        handleShowSearchModal() {
            this.isShowSearchModal = true;
        },
    },
    setup() {
        return {
            isOpened: ref(false),
        };
    },
};
</script>
<style lang="scss" scoped>
.dialog-loader {
    position: absolute;
    top: -100px;
}
.header-wrapper {
    width: (100%);
    height: 125px;
}

.header {
    width: calc(100% - 463px);
    display: flex;
    justify-content: space-evenly;
    margin: 0 231.5px;
    position: relative;
}

.header-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 30%;
}

.left-logo-img:hover {
    cursor: pointer;
}

.left-logo {
    width: 40%;
    height: auto;

    .left-logo-img {
        max-width: 100%;
    }
}

.middle-logo {
    width: 20%;
}

.header-icon {
    width: 35%;
}

.search-icon {
    height: 55px;
    position: relative;
}

.search-modal {
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    background-color: white;
    height: 100%;
    width: calc(100%);
    margin: 0 auto;
    left: 0;
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 1px 5px 5px 5px rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
.category {
    top: 0;
    position: relative;
    margin: 0 auto;
    width: 90%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    flex-wrap: wrap;
    box-shadow: none;
}
.category-btn {
    width: fit-content;
    height: fit-content;
    padding: 10px 30px;
    margin: 10px 20px;
    font-size: 15px;
    border-radius: 4px;
    font-weight: 600;
    color: var(--primary-text);
    background-color: rgba(214, 213, 211, 0.1);
}
.category-btn:hover {
    cursor: pointer;
    opacity: 0.8;
    background-color: var(--primary-color);
}

.search-wrapper {
    margin-top: 30px;
    position: relative;
    width: 60%;
    height: 10%;
    margin: auto;
    top: 0;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    .search-filed {
        height: 100%;
        width: 70%;
        .search-field-input {
            display: inline-block;
            width: 100%;
            padding-left: 20px;
            height: 100%;
            font-size: 17px;
        }
    }
    .search-btn-field {
        height: 100%;
        width: 20%;
        margin: calc(15%-50px) 0;
        background-color: var(--primary-color);
        .search-btn {
            border: none;
            background-color: transparent;
            font-size: 20px;
            height: 100%;
            width: 100%;
            font-weight: 600;
        }
    }
    .search-btn-field:hover {
        opacity: 0.8;
        background-color: var(--primary-color);
    }
}
.search-btn:hover {
    cursor: pointer;
}

.popular {
    position: relative;
    margin: 40px 0 auto;
    width: 70%;
    height: 40%;
    border: none;
    flex-wrap: wrap;
    left: 200px;
    /* box-shadow: none; */
}

.popular-list {
    margin-top: -20px;
    display: flex;
    width: 80%;
    height: 80%;
    display: flex;
    flex-wrap: wrap-reverse;
}

.popular-item {
    width: 30%;
    height: 20%;
    margin-top: -10px;
    font-size: 14px;
}

.popular-item--text {
    width: 50%;
}

.popular-item--text:hover {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    color: var(--primary-color);
}

.popular-heading--text {
    font-weight: 600;
    padding-bottom: 20px;
}

.account-icon {
    height: 55px;
}

.icon {
    position: relative;
}

.icon:hover {
    cursor: pointer;
}

.search-icon:hover + .icon--hover {
    display: block;
}

.cart-icon:hover + .icon--hover {
    display: block;
}

.account-icon:hover + .icon--hover {
    display: block;
}

.icon--hover {
    content: "";
    display: none;
    border-style: solid;
    border-width: 2px 10px;
    border-color: #000;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: auto;
}

.cart-icon {
    position: relative;
    height: 55px;
}

.cart-icon-count {
    position: absolute;
    top: 7px;
    right: 12px;
    font-size: 14px;
    font-weight: 600;
}

.cart.list-item {
    width: 100%;

    .cart.list-item--empty {
        margin-left: 30px;
        width: 540px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: italic;
        color: var(--solid-text);
    }
}

.cart.list-item.item {
    margin: 30px;
    width: 540px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-image {
    width: 30%;
}

.item-image--img {
    height: 130px;
    max-width: 300px;
    /* object-fit: none; */
}

.item-info {
    margin: 0 auto;
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.item-info--title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-infor--title.title {
    width: 90%;
}

.item-infor--title.remove-btn {
    text-align: right;
    width: 10%;
}

.remove-btn {
    border: none;
    background-color: transparent;
}

.remove-btn:hover {
    cursor: pointer;
}

.item-info--title a {
    text-decoration: none;
    font-size: 20px;
    height: 34%;
    width: 100%;
}

.item-info--size {
    height: calc(33%-10px);
    align-items: center;
    justify-content: left;
}

.item-info--price {
    display: flex;
    justify-content: left;
    width: 100%;

    .item-info--quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;

        button {
            width: 30%;
        }

        .quantity-btn--counter {
            width: 35%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 18px;

            &:focus-visible {
                border-top-style: hidden;
                border-right-style: hidden;
                border-left-style: hidden;
                border-bottom-style: hidden;
                outline: none;
            }
        }
    }
}

.item-info--totalprice {
    display: flex;
    justify-content: right;
    width: 50%;
}

.payment-price {
    border: none;
    font-size: 16px;
    color: var(--solid-text);
}

.line-break {
    align-items: center;
    border-bottom: 2px solid rgba(112, 112, 112, 0.3);
    margin: 0 30px auto;
}

.item-info--title a:visited {
    color: black;
}
.item-info--title {
    a:hover {
        color: var(--primary-color);
    }
}
.cart.payment {
    width: 540px;
    margin-bottom: 30px;
}

.cart.payment--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 30px 30px 30px 24px;
    /* margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 24px; */
}

.cart.payment--header input {
    text-align: right;
    outline: none;
}

.payment-header--title {
    width: 30%;
    color: var(--solid-text);
    font-size: 22px;
    height: 24px;
    margin: 0;
}

.price-item {
    border: none;
    outline: none;
    font-size: 16px;
    width: 60%;
    text-align: right;
}

.payment-description {
    width: 100%;
    margin: 0 30px auto;
    text-align: center;
}

.payment-description--text {
    width: 100%;
    font-size: 16px;
    color: var(--primary-text);
    font-style: italic;
}

.cart-payment--btn {
    width: 100%;
    margin: 20px 30px auto;
    text-align: center;
    height: 36px;
}

.payment-btn {
    width: 90%;
    height: 34px;
    font-size: 16px;
    font-weight: 500;
    padding: 5px;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #000;
}

.payment-btn:hover {
    cursor: pointer;
    opacity: 0.85;
}

.vsp.vsp--right-side.side-panel {
    height: calc(100vh - 2px);
    box-shadow: 1px 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.cart-recommend {
    width: 100%;
    margin: 20px 0;

    p {
        font-size: 16px;
        height: 19px;
        color: var(--primary-text);
    }

    .cart-recommend-top {
        margin-left: 30px;

        p {
            font-size: 18px;
            height: 19px;
            color: var(--primary-text);
        }
    }

    .list-products-item {
        height: 130px;
        margin-left: 30px;
        display: flex;
        margin-bottom: 20px;

        .item-img {
            height: 100%;
            margin-right: 20px;

            img {
                width: 130px;
            }
        }

        .item-info {
            font-size: 20px;
            width: calc(100% - 170px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: left;

            a {
                text-decoration: none;
            }
            .price {
                font-size: 16px;
            }
            .title {
                color: black;
            }
            .title:hover {
                color: var(--primary-color);
            }

            .detail {
                height: 24px;
                width: 158px;
                border: 1px solid #000;
                display: flex;
                font-size: 16px;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                padding: 15px 2px;
                color: white;
                background-color: #000;
            }

            .detail:hover {
                opacity: 0.85;
            }
        }
    }

    .car-recommend-bottom {
        width: calc(100% - 60px);
        margin: 0 30px auto;
        margin-top: 40px;
        height: 30px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        .view-more {
            border-radius: 5px;
            border: none;
            width: 484px;
            font-size: 16px;
            padding: 8px 0;
            background-color: #000;
            color: white;
        }

        .view-more:hover {
            opacity: 0.85;
            cursor: pointer;
        }
    }
}

.header-mid-bar {
    vertical-align: baseline;
    height: 25px;
    width: calc(100% + 16px);
    margin-right: -8px;
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    position: absolute;
    top: 100px;

    .marquee {
        background-color: #000;
        display: block;
        width: 200%;
        height: 25px;
        position: absolute;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: marquee 15s linear infinite;

        span {
            color: white;
            float: left;
            width: 12.5%;
        }
    }
}

@keyframes marquee {
    0% {
        left: 0;
    }

    100% {
        left: -100%;
    }
}
</style>
