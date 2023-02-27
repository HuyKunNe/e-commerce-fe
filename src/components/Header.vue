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
            <div class="icon">
                <div class="search-icon">
                    <img
                        src="../assets/images/search-icon.png"
                        alt=""
                        class="search-icon-img"
                        style="height: 40px; width: 40px"
                        @click="handleModalSearchOpen()"
                    />
                </div>
            </div>
            <!-- Search Modal -->
            <div class="search-modal" v-if="isSearchModalOpen">
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
                    <div class="search-modal search-wrapper search-filed">
                        <input
                            class="search-modal search-wrapper search-field-input"
                            type="text"
                            placeholder="Search"
                            @keyup.enter="handleSearch"
                        />
                    </div>
                    <div class="search-modal search-wrapper search-btn-field">
                        <button class="search-btn">Search</button>
                    </div>
                </div>
            </div>

            <!-- Cart -->
            <div class="icon">
                <div class="cart-icon">
                    <img
                        src="../assets/images/cart.png"
                        alt=""
                        class="search-icon-img"
                        style="height: 40px; width: 40px"
                    />
                </div>
            </div>
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
</template>

<script>
export default {
    name: "HeaderComponent",
    data() {
        return {
            isSearchModalOpen: true,
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
        };
    },
    methods: {
        handleModalSearchOpen() {
            this.isSearchModalOpen = !this.isSearchModalOpen;
            this.displayModalOpen = this.isSearchModalOpen ? "block" : "none";
        },
        handleModalSearchClose() {
            if (this.isSearchModalOpen) {
                this.isSearchModalOpen = false;
                this.displayModalOpen = this.isSearchModalOpen
                    ? "block"
                    : "none";
            }
        },
    },
    setup() {},
};
</script>
<style>
.header {
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 231.5px;
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
.search-icon {
    height: 55px;
    position: relative;
}
.search-modal {
    position: absolute;
    background-color: white;
    height: 480px;
    width: calc(100% - 40px);
    margin: 0 20px;
    left: 0;
    top: 100px;
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
.cart-icon {
    height: 55px;
}
.account-icon {
    height: 55px;
}
.icon:hover {
    height: 70%;
    cursor: pointer;
    border-bottom: 2px solid #333;
}
</style>
