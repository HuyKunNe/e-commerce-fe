/* eslint-disable no-use-before-define */
<template>
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
            <Popper>
                <div class="icon">
                    <div class="search-icon">
                        <img
                            src="../assets/images/search-icon.png"
                            class="search-icon-img"
                            style="height: 40px; width: 40px"
                        />
                    </div>
                </div>
                <!-- Search Modal -->
                <template #content>
                    <div class="search-modal">
                        <div class="search-modal category">
                            <button
                                class="search-modal category btn"
                                v-for="item in category"
                                :key="item.id"
                            >
                                {{ item }}
                            </button>
                        </div>
                        <div class="search-modal search-wrapper">
                            <div
                                class="search-modal search-wrapper search-filed"
                            >
                                <input
                                    class="search-modal search-wrapper search-field-input"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                            <div
                                class="search-modal search-wrapper search-btn-field"
                            >
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
                </template>
            </Popper>
            <!-- Cart -->
            <div class="icon">
                <div
                    class="cart-icon"
                    @click="
                        isOpened = true;
                        calculatePrice();
                    "
                >
                    <img
                        src="../assets/images/cart.png"
                        alt=""
                        class="search-icon-img"
                        style="height: 40px; width: 40px"
                    />
                    <div class="cart-icon-count">
                        <p class="">0</p>
                    </div>
                </div>
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
                        <div class="cart list-item item">
                            <div class="item-image">
                                <a
                                    href="https://levents.asia/product/levents-wash-tee/levents-wash-tee-off-white/?attribute_pa_size=size-1"
                                >
                                    <img
                                        class="item-image--img"
                                        src="https://levents.asia/wp-content/uploads/2022/10/z3809177331705_cdfaae50251a4d9e50ac691d815112fd-2048x2048.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div class="item-info">
                                <div class="item-info--title">
                                    <div class="item-infor--title title">
                                        <a
                                            class="item-link"
                                            href="https://levents.asia/product/levents-wash-tee/levents-wash-tee-off-white/?attribute_pa_size=size-1"
                                            >Levents® Wash Tee/ Ivory White</a
                                        >
                                    </div>
                                    <div class="item-infor--title remove-btn">
                                        <button class="remove-btn">x</button>
                                    </div>
                                </div>
                                <div
                                    class="item-info--size"
                                    style="font-size: 18px"
                                >
                                    <span>size SIZE 1</span>
                                </div>
                                <div class="item-info--price">
                                    <div class="item-info--quantity">
                                        <button
                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                            @click="calculatePrice()"
                                        ></button>
                                        <input
                                            class="quantity-btn--counter"
                                            min="0"
                                            id="quantity-item"
                                            placeholder="0"
                                            name="quantity"
                                            value="1"
                                            type="number"
                                        />
                                        <button
                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                            @click="calculatePrice()"
                                            class="plus"
                                        ></button>
                                    </div>
                                    <div class="item-info--totalprice">
                                        <input
                                            type="text"
                                            class="price-item"
                                            readonly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-break"></div>
                        <div class="cart list-item item">
                            <div class="item-image">
                                <a
                                    href="https://levents.asia/product/levents-wash-tee/levents-wash-tee-off-white/?attribute_pa_size=size-1"
                                >
                                    <img
                                        class="item-image--img"
                                        src="https://levents.asia/wp-content/uploads/2022/10/z3809177331705_cdfaae50251a4d9e50ac691d815112fd-2048x2048.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div class="item-info">
                                <div class="item-info--title">
                                    <div class="item-infor--title title">
                                        <a
                                            class="item-link"
                                            href="https://levents.asia/product/levents-wash-tee/levents-wash-tee-off-white/?attribute_pa_size=size-1"
                                            >Levents® Wash Tee/ Ivory White</a
                                        >
                                    </div>
                                    <div class="item-infor--title remove-btn">
                                        <button class="remove-btn">x</button>
                                    </div>
                                </div>
                                <div
                                    class="item-info--size"
                                    style="font-size: 18px"
                                >
                                    <span>size SIZE 1</span>
                                </div>
                                <div class="item-info--price">
                                    <div class="item-info--quantity">
                                        <button
                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                            @click="calculatePrice()"
                                        ></button>
                                        <input
                                            class="quantity-btn--counter"
                                            min="0"
                                            id="quantity-item"
                                            placeholder="0"
                                            name="quantity"
                                            value="1"
                                            type="number"
                                        />
                                        <button
                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                            class="plus"
                                            @click="calculatePrice()"
                                        ></button>
                                    </div>
                                    <div class="item-info--totalprice">
                                        <input
                                            type="text"
                                            class="price-item"
                                            readonly
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
                            <input type="text" class="payment-price" readonly />
                        </div>
                        <div class="cart payment-description">
                            <p class="payment-description--text">
                                Các loại phí khác sẽ được tính trong phần thanh
                                toán
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
                                <div class="list-products-item">
                                    <div class="item-img">
                                        <a
                                            href="https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/"
                                        >
                                            <img
                                                src="https://levents.asia/wp-content/uploads/2023/01/z4114159853574_727c49c4a01c10f3d562dcf4f852c0ff-150x150.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div class="item-info">
                                        <a
                                            href="https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/"
                                            class="title"
                                            >Levents® Pepper Salt Long Sleeve
                                            Polo/ Grey</a
                                        >
                                        <div class="price">430,000VNĐ</div>
                                        <a
                                            href="https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/"
                                            class="detail"
                                            >Xem chi tiết</a
                                        >
                                    </div>
                                </div>
                                <div
                                    class="line-break"
                                    style="
                                        margin-left: 30px;
                                        margin-bottom: 20px;
                                    "
                                ></div>
                                <div class="list-products-item">
                                    <div class="item-img">
                                        <a
                                            href="https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/"
                                        >
                                            <img
                                                src="https://levents.asia/wp-content/uploads/2023/01/z4114159853574_727c49c4a01c10f3d562dcf4f852c0ff-150x150.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div class="item-info">
                                        <a
                                            href="https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/"
                                            class="title"
                                            >Levents® Pepper Salt Long Sleeve
                                            Polo/ Grey</a
                                        >
                                        <div class="price">430,000VNĐ</div>
                                        <a
                                            href="https://levents.asia/product/levents-pepper-salt-long-sleeve-polo/levents-pepper-salt-long-sleeve-polo-grey/"
                                            class="detail"
                                            >Xem chi tiết</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="car-recommend-bottom">
                            <button class="view-more">Xem thêm</button>
                        </div>
                    </div>
                </template>
            </VueSidePanel>
            <div class="icon">
                <div class="account-icon">
                    <img
                        src="../assets/images/account.png"
                        alt=""
                        class="search-icon-img"
                        style="height: 40px; width: 40px"
                    />
                </div>
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
</template>

<script>
import Popper from "vue3-popper";
import { VueSidePanel } from "vue3-side-panel";
import "vue3-side-panel/dist/vue3-side-panel.css";
import { ref } from "vue";
export default {
    name: "HeaderComponent",
    components: {
        Popper,
        VueSidePanel,
    },
    data() {
        return {
            isSearchModalOpen: false,
            displayModalOpen: this.isSearchModalOpen ? "block" : "none",
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
            price: 375000,
        };
    },
    methods: {
        calculatePrice() {
            //Get selected data
            var sum = 0;
            var elt = document.getElementsByClassName("cart list-item");
            for (var i = 1; i < elt.length; i++) {
                var price = this.price;
                var quantity = elt[i].querySelector(".item-info--quantity");
                var quantityValue = quantity.querySelector(
                    ".quantity-btn--counter"
                );
                var totalPrice = price * quantityValue.value;
                sum += totalPrice;

                elt[i].querySelector(".price-item").value =
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(totalPrice);
            }
            // console.log(sum);
            document.getElementsByClassName("payment-price")[0].value =
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                }).format(sum);
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
.header {
    height: 100px;
    width: calc(100% -231.5*2);
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
.left-logo{
    width: 40%;
    height: auto;
    .left-logo-img{
        max-width: 100%;
    }
}
.middle-logo{
    width: 20%;
}
.header-icon{
    width: 35%;
}
.search-icon {
    height: 55px;
    position: relative;
}
.search-modal {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    background-color: white;
    height: 480px;
    width: calc(100% - 40px);
    margin: 0 20px;
    left: 0;
    /* top: 100px; */
    border-radius: 5px;
    box-shadow: 1px 5px 5px 5px rgba(0, 0, 0, 0.5);
}
.search-modal .category {
    top: 0;
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    width: 85%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    flex-wrap: wrap;
    box-shadow: none;
    margin-bottom: 20px;
}
.search-modal .category .btn {
    width: fit-content;
    height: fit-content;
    padding: 10px 30px;
    margin: 0 20px;
    font-size: 15px;
    font-weight: 600;
    color: var(--primary-text);
    background-color: rgba(214, 213, 211, 0.1);
}
.search-modal .category .btn:hover {
    cursor: pointer;
    opacity: 0.8;
    background-color: var(--primary-color);
}
.search-wrapper {
    position: relative;
    width: 70%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 0;
    box-shadow: none;
}
.search-field {
    height: 50px;
    width: 70%;
}
.search-field-input {
    display: inline-block;
    position: absolute;
    width: 100%;
    padding-left: 20px;
    height: 50px;
    font-size: 17px;
}
.search-btn-field {
    height: 50px;
    width: 20%;
    margin: calc(15%-50px) 0;
    background-color: var(--primary-color);
}
.search-btn {
    border: none;
    background-color: transparent;
    font-size: 20px;
    height: 100%;
    width: 100%;
    font-weight: 600;
}
.search-btn-field:hover {
    opacity: 0.8;
    background-color: var(--primary-color);
}
.search-btn:hover {
    cursor: pointer;
}
.popular {
    position: relative;
    margin: 40px 0 auto;
    width: 940px;
    height: 200px;
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
}
.account-icon {
    height: 55px;
}
.icon:hover {
    cursor: pointer;
}
.cart-icon {
    position: relative;
    height: 55px;
}
.cart-icon-count {
    position: absolute;
    top: -5px;
    right: 12px;
    font-size: 14px;
    font-weight: 600;
}
.cart.list-item {
    width: 100%;
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
.quantity-btn--counter {
    outline: none;
}
.item-info--quantity {
    display: flex;
    align-items: center;
    position: relative;
    width: 50%;
}
.item-infor--quantity,
.item-info--quantity * {
    box-sizing: border-box;
}

.item-info--quantity button {
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    margin: 0;
    position: relative;
}

.item-info--quantity button:before,
.item-info--quantity button:after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 1rem;
    height: 2px;
    background-color: #383838;
    transform: translate(-50%, -50%);
}
.item-info--quantity button.plus:after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.item-info--quantity input[type="number"] {
    font-family: sans-serif;
    max-width: 3rem;
    padding: 0.5rem;
    border: none;
    font-size: 18px;
    border-width: 0 2px;
    text-align: center;
}

.item-info--price {
    display: flex;
    justify-content: left;
    width: 100%;
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
    color: var(--primary-color);
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
    background-color: var(--primary-color);
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
            width: calc(100% - 150px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: left;
            a {
                text-decoration: none;
            }
            .title {
                color: var(--primary-color);
            }
            .title:visited {
                color: var(--primary-color);
            }
            .detail {
                height: 24px;
                width: 158px;
                border: 1px solid var(--primary-color);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                padding: 5px 2px;
                color: white;
                background-color: var(--primary-color);
            }
            .detail:hover {
                opacity: 0.85;
            }
        }
    }
    .car-recommend-bottom {
        width: calc(100% - 60px);
        margin: 0 30px auto;
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
            background-color: var(--primary-color);
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
    width: calc(100% + 8px);
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
