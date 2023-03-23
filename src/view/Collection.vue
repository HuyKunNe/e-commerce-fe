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
                            <div class="overlay-img">
                                <img
                                    alt=""
                                    class="item-img--lazyload"
                                    :src="item.imageUrl[1]"
                                />
                                <div class="overlay-btn">
                                    <button class="view">
                                        Xem
                                        <font-awesome-icon
                                            icon="fa-regular fa-eye"
                                        />
                                    </button>
                                    <button
                                        class="quick-view"
                                        @click="ShowproductModal(item)"
                                    >
                                        Xem nhanh
                                        <font-awesome-icon
                                            icon="fa-regular fa-eye"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div class="card-tag" v-if="item.status !== ''">
                                <div class="car-tag--text">
                                    {{ item.status }}
                                </div>
                            </div>
                            <div
                                class="sale-label"
                                v-if="
                                    item.salePercent !== 0 &&
                                    item.salePercent !== undefined
                                "
                            >
                                {{ item.salePercent }}% OFF
                            </div>
                        </div>
                        <div class="item-description">
                            <div class="item-name">
                                {{ item.productName }}
                            </div>
                            <div class="item-price">
                                <del
                                    class="cost"
                                    v-if="
                                        item.salePercent !== 0 &&
                                        item.salePercent !== undefined
                                    "
                                    >{{
                                        currencyVND(
                                            item.price *
                                                ((100 - item.salePercent) *
                                                    0.01)
                                        )
                                    }}
                                </del>
                                <span class="price-sale">
                                    {{ currencyVND(item.price) }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <product-modal
                        v-model="isShowproductModal"
                        @click="getProductPaging()"
                        :product="productInModal"
                    />
                </div>
            </div>
        </div>
        <pagination-bar
            :total-pages="totalPage"
            v-model="currentPage"
            @click="getProductPaging()"
        ></pagination-bar>
    </div>
    <Footer></Footer>
    <GoToTop></GoToTop>
</template>

<script>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import GoToTop from "@/components/GoToTop.vue";
import Header from "@/components/Header.vue";
import HeaderBottomNav from "@/components/HeaderBottomNav.vue";
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";
import { globals } from "../globals";
import ProductModal from "@/components/ProductModal.vue";
import PaginationBar from "@/components/PaginationBar.vue";

export default {
    name: "CollectionPage",
    components: {
        Header,
        HeaderBottomNav,
        GoToTop,
        Sidebar,
        Footer,
        ProductModal,
        PaginationBar,
    },
    data() {
        return {
            collectionName: "",
            collection: [],
            productPaging: [],
            productInModal: {},
            isShowproductModal: false,
            itemInShowProductModal: 0,
            totalPage: 0,
            pageSize: 5,
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
                    this.totalPage = Math.floor(
                        this.collection.length / this.pageSize
                    );

                    if (this.totalPage * this.pageSize < this.collection.length)
                        this.totalPage++;
                    this.currentPage = 1;
                    this.getProductPaging();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        currencyVND(value) {
            return value.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
            });
        },
        logItem(item) {
            console.log(item);
        },
        ShowproductModal(item) {
            this.productInModal = item;
            this.isShowproductModal = true;
        },
        getProductPaging() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            var endIndex = startIndex + this.pageSize - 1;
            if (endIndex > this.collection.length)
                endIndex = this.collection.length;
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
        const currentPage = ref(1);
        return {
            categories,
            currentPage,
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

                        .overlay-img {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: 0.3s ease;
                            opacity: 0;
                            .item-img--lazyload {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                        &:hover {
                            cursor: pointer;
                        }
                        .overlay-btn {
                            height: 100%;
                            width: 70%;
                            margin-left: -30px;
                            // margin: 0 20%;
                            margin: auto;
                            top: 0;
                            right: 0;
                            left: 0;
                            bottom: 0;
                            position: absolute;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;

                            .view {
                                width: 40%;
                            }

                            .quick-view {
                                width: 55%;
                            }

                            button {
                                border-radius: 5px;
                                height: 30px;
                                border: 2px solid black;
                                padding: 2px 5px;
                                background-color: white;
                                text-transform: uppercase;
                                font-weight: 700;
                            }

                            button:hover {
                                background-color: black;
                                color: white;
                                cursor: pointer;
                            }
                        }
                        .card-tag {
                            position: absolute;
                            top: 0;
                            left: 20px;
                            font-size: 10px;
                            font-weight: 700;
                            text-transform: uppercase;
                            padding: 3px 8px;
                            background-color: var(--primary-color);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .sale-label {
                            position: absolute;
                            bottom: 30px;
                            right: 30px;
                            background-image: url(https://file.hstatic.net/1000351433/file/label-sale_778ce78ae28d436c92f2d6de66effd3b.png);
                            height: 9%;
                            width: 22%;
                            font-size: 12px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-size: cover;
                            background-position: center;
                            text-transform: uppercase;
                            font-weight: 700;
                        }
                    }
                    .item-image:hover .overlay-img {
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
                            .cost {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 12px;
                                padding-right: 30px;
                            }
                            .price-sale {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: var(--primary-color);
                            }
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
