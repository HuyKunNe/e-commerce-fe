<template>
    <Header></Header>
    <HeaderBottomNav></HeaderBottomNav>
    <div class="list-products" id="list-products">
        <Sidebar class="sidebar-product"></Sidebar>
        <div class="products-layout">
            <div class="container">
                <div class="collection-list">
                    <div
                        class="collection-item"
                        v-for="item in collection"
                        :key="item.id"
                    >
                        <div class="item-image">
                            <img
                                alt=""
                                class="item-img"
                                :src="item.imageUrl[0]"
                            />
                            <img
                                alt=""
                                class="item-img--lazyload"
                                :src="item.imageUrl[1]"
                            />
                        </div>
                        <div class="item-description">
                            <div class="item-name">
                                {{ item.productName }}
                            </div>
                            <div class="item-price">
                                {{ formatNumber(item.price) }} VND
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    <GoToTop></GoToTop>
</template>

<script>
import Footer from "@/components/Footer.vue";
import GoToTop from "@/components/GoToTop.vue";
import Header from "@/components/Header.vue";
import HeaderBottomNav from "@/components/HeaderBottomNav.vue";
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";
import { globals } from "../globals";
export default {
    name: "CollectionPage",
    components: {
        Header,
        HeaderBottomNav,
        GoToTop,
        Sidebar,
        Footer,
    },
    data() {
        return {
            collectionName: "",
            collection: [],
            product: {},
        };
    },
    methods: {
        async fetchCollectionData() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
            await axios
                .get(
                    `http://localhost:3000/collections?path_like=${this.collectionName}`
                )
                .then((res) => {
                    this.collection = res.data[0].products;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        formatNumber(number) {
            return number.toLocaleString("vi-VN");
        },
    },
    mounted() {
        this.collectionName = this.$route.params.collectionName;
        this.fetchCollectionData();
    },
    watch: {
        $route: {
            handler() {
                this.collectionName = this.$route.params.collectionName;
                this.fetchCollectionData();
            },
        },
    },
    setup() {
        const categories = globals.categories;
        return {
            categories,
        };
    },
};
</script>

<style lang="scss" scoped>
#list-products.list-products {
    min-height: 500px;
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    justify-content: right;
    align-items: center;
    .sidebar-product {
        height: 100%;
        width: 20%;
        position: absolute;
    }
    .products-layout {
        right: 0;
        height: fit-content;
        width: 80%;
        .container {
            padding: 0 20px;
            height: fit-content;

            width: 100%;
            .collection-list {
                display: flex;
                align-items: flex-start;
                flex-wrap: wrap;
                height: fit-content;
                width: 100%;
                margin: auto;
                padding: 20px;
                .collection-item {
                    height: 455px;
                    width: 24%;
                    .item-image {
                        height: fit-content;
                        width: 100%;
                        position: relative;
                        .item-img {
                            width: 100%;
                            height: auto;
                            object-fit: cover;
                            object-position: center;
                        }
                        .item-img--lazyload {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            width: 100%;
                            height: auto;
                            opacity: 0;
                        }
                        &:hover {
                            cursor: pointer;
                        }
                    }
                    .item-image:hover .item-img--lazyload {
                        opacity: 1;
                    }
                    .item-description {
                        display: flex;
                        width: 100%;
                        margin-top: -10px;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        color: #000;
                        font-weight: 600;
                        font-size: 15px;
                        line-height: 20px;
                        .item-name {
                            width: 100%;
                            height: 30%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .item-price {
                            width: 100%;
                            height: 30%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }
    .sidebar-product {
        height: 100%;
        width: 15%;
    }
}
</style>
