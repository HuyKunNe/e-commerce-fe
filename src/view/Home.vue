<template>
    <div class="header-index" id="header-index">
        <Header></Header>
        <div class="header-panner">
            <div class="header-sidebar--left">
                <div class="side-bar">
                    <ul class="side-bar-menu">
                        <li
                            class="side-bar-item"
                            v-for="item in sideBar"
                            :key="item.id"
                            :title="item"
                            @click="viewCollection(item.collectionName)"
                        >
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header-banner--full">
                <img
                    src="../assets/images/banner_chinh.png"
                    alt=""
                    class="first-banner--img"
                />
            </div>
        </div>
    </div>
    <HeaderBottomNav></HeaderBottomNav>
    <section class="section-bar-code" id="section-bar-code">
        <div class="container">
            <div class="banner">
                <img
                    src="../assets/images/bar-code.png"
                    alt=""
                    class="image-bar-code"
                />
            </div>
        </div>
    </section>
    <section
        class="section-scroll-one"
        id="section-scroll-one"
        :style="{
            'background-image': `url(${require('../assets/images/section-scroll-1.png')})`,
        }"
    >
        <div class="container">
            <div class="list-banner">
                <div class="banner-left">
                    <div
                        class="banner-left banner-up"
                        @click="viewCollection('all-products')"
                    >
                        <img
                            src="https://file.hstatic.net/1000351433/file/vuong_2_bb2b2b8aa0ea468d8e7e2536953a66cc.png"
                            alt=""
                            class="banner-img"
                        />
                        <div class="image-cap">MOST WANTED</div>
                    </div>
                    <div
                        class="banner-left banner-down"
                        @click="viewCollection('all-products')"
                    >
                        <img
                            src="https://file.hstatic.net/1000351433/file/vuong_1_4435f62d0e4744eea32fa306afe9c12d.png"
                            alt=""
                            class="banner-img"
                        />
                        <div class="image-cap">NEW ARRIVAL</div>
                    </div>
                </div>
                <div class="banner-right">
                    <img
                        src="https://file.hstatic.net/1000351433/file/doc_f885cfaf2fb54589a49f993ecaf6ce4d.png"
                        alt=""
                        class="banner-right--img"
                    />
                    <div class="image-cap">NEW ARRIVAL</div>
                </div>
            </div>
        </div>
    </section>
    <secttion class="section-banner-one" id="section-banner-one">
        <div class="container">
            <div class="list-banner">
                <div class="row">
                    <div
                        class="banner"
                        @click="viewCollection('basic-collection')"
                    >
                        <img
                            class="banner-img"
                            alt="BASIC COLLECTION"
                            src="https://file.hstatic.net/1000351433/file/1_0847b4b2f2474940a893e027baf28f9f.png"
                        />
                        <div class="image--cap">
                            <p>BASIC COLLECTION</p>
                        </div>
                    </div>
                    <div
                        class="banner"
                        @click="viewCollection('basic-collection')"
                    >
                        <img
                            class="banner-img"
                            alt="BASIC COLLECTION"
                            src="https://file.hstatic.net/1000351433/file/2_041897f230494ffd9bb7cc142c581057.png"
                        />
                        <div class="image--cap">
                            <p>BASIC COLLECTION</p>
                        </div>
                    </div>
                    <div
                        class="banner"
                        @click="viewCollection('basic-collection')"
                    >
                        <img
                            class="banner-img"
                            alt="BASIC COLLECTION"
                            src="https://file.hstatic.net/1000351433/file/3_7f1b0dc5df624b31a527a04993e4222b.png"
                        />
                        <div class="image--cap">
                            <p>BASIC COLLECTION</p>
                        </div>
                    </div>
                    <div
                        class="banner"
                        @click="viewCollection('basic-collection')"
                    >
                        <img
                            class="banner-img"
                            alt="BASIC COLLECTION"
                            src="https://file.hstatic.net/1000351433/file/6_fab8c3692f804893aec0adb171258775.png"
                        />
                        <div class="image--cap">
                            <p>BASIC COLLECTION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </secttion>
    <section class="section-best-seller" id="section-best-seller">
        <div class="container">
            <div class="s-title">
                <span class="s-title--text">BEST-SELLING ITEM</span>
                <span class="s-title--symbol down-arrow"
                    ><font-awesome-icon icon="fa-solid fa-caret-down"
                /></span>
            </div>
            <div class="s-content">
                <div class="s-content-wrapper">
                    <swiper
                        :slidesPerView="3"
                        :spaceBetween="30"
                        :loop="true"
                        :keyboard="{
                            enabled: true,
                        }"
                        :navigation="{
                            nextEl: '.btn-next',
                            prevEl: '.btn-prev',
                        }"
                        :modules="modules"
                        class="mySwiper"
                    >
                        <swiper-slide
                            class="card"
                            v-for="product in products"
                            :key="product.id"
                        >
                            <div class="card-image">
                                <img
                                    :src="product.imageUrl[0]"
                                    alt=""
                                    class="card-img"
                                />
                                <div class="overlay-image">
                                    <img
                                        :src="
                                            product.imageUrl[1] === null
                                                ? product.imageUrl[0]
                                                : product.imageUrl[1]
                                        "
                                        alt=""
                                        class="overlay-img"
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
                                            @click="ShowproductModal(product)"
                                        >
                                            Xem nhanh
                                            <font-awesome-icon
                                                icon="fa-regular fa-eye"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="card-tag"
                                    v-if="product.status === 'best seller'"
                                >
                                    <div class="car-tag--text">Best seller</div>
                                </div>
                                <div
                                    class="sale-label"
                                    v-if="product.salePercent !== 0"
                                >
                                    {{ product.salePercent }}% OFF
                                </div>
                            </div>
                            <div class="description">
                                <div class="description-title">
                                    {{ product.productName }}
                                </div>
                                <div class="description-price">
                                    <del
                                        class="cost"
                                        v-if="product.salePercent !== 0"
                                    >
                                        {{ currencyVND(product.price) }}
                                    </del>
                                    <span class="price-sale">
                                        {{
                                            currencyVND(
                                                product.price *
                                                    ((100 -
                                                        product.salePercent) *
                                                        0.01)
                                            )
                                        }}
                                    </span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="s-button">
                <div class="s-button-prev">
                    <button class="btn-prev">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="prev-icon"
                        >
                            <g transform="matrix(-1,0,0,1,511.9997901916504,0)">
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    d="m468.8 235.007-401.359-231.73a24.2 24.2 0 0 0 -12.087-3.285h-.07a24.247 24.247 0 0 0 -12.094 3.287 24 24 0 0 0 -12.11 20.992v463.456a24.186 24.186 0 0 0 36.36 20.994l401.36-231.731a24.238 24.238 0 0 0 0-41.983z"
                                    fill-rule="evenodd"
                                    fill="#000000"
                                    data-original="#000000"
                                    class=""
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="s-button-next">
                    <button class="btn-next">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="next-icon"
                        >
                            <g>
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    d="m468.8 235.007-401.359-231.73a24.2 24.2 0 0 0 -12.087-3.285h-.07a24.247 24.247 0 0 0 -12.094 3.287 24 24 0 0 0 -12.11 20.992v463.456a24.186 24.186 0 0 0 36.36 20.994l401.36-231.731a24.238 24.238 0 0 0 0-41.983z"
                                    fill-rule="evenodd"
                                    fill="#000000"
                                    data-original="#000000"
                                    class=""
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <product-modal v-model="isShowproductModal" :product="productInModal" />
    </section>
    <section class="section-banner-two" id="section-banner-two">
        <div class="container">
            <img src="../assets/images/banner2.png" alt="" class="banner-img" />
        </div>
    </section>
    <section class="section-end-of-year" id="section-end-of-year">
        <div class="container">
            <div class="s-title">
                <h2>
                    <a href="/collections/sale-end-season"> END OF SEASON </a>
                </h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    width=""
                    height=""
                    x="0"
                    y="0"
                    viewBox="0 0 490.677 490.677"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class="arrows"
                >
                    <g>
                        <g xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path
                                    d="M489.272,37.339c-1.92-3.307-5.44-5.333-9.259-5.333H10.68c-3.819,0-7.339,2.027-9.259,5.333    c-1.899,3.307-1.899,7.36,0.021,10.667l234.667,405.333c1.899,3.307,5.419,5.333,9.237,5.333s7.339-2.027,9.237-5.333    L489.251,48.005C491.149,44.72,491.149,40.645,489.272,37.339z"
                                    fill="#000000"
                                    data-original="#000000"
                                    class=""
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="s-content">
                <swiper
                    :slidesPerView="3"
                    :spaceBetween="30"
                    :loop="false"
                    :slidesPerGroup="1"
                    :grid="{
                        rows: 2,
                    }"
                    :keyboard="{
                        enabled: true,
                    }"
                    :navigation="{
                        nextEl: '.btn-next',
                        prevEl: '.btn-prev',
                    }"
                    :modules="modules"
                    class="swiper"
                >
                    <swiper-slide
                        class="card"
                        v-for="product in productCollection"
                        :key="product.id"
                    >
                        <div class="card-image-wrapper">
                            <div class="card-image">
                                <img
                                    :src="product.imageUrl[0]"
                                    alt=""
                                    class="card-img"
                                />
                                <div class="overlay_loader">
                                    <img
                                        :src="
                                            product.imageUrl[1] === null
                                                ? product.imageUrl[0]
                                                : product.imageUrl[1]
                                        "
                                        alt=""
                                        class="lazy_loader"
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
                                            @click="ShowproductModal(product)"
                                        >
                                            Xem nhanh
                                            <font-awesome-icon
                                                icon="fa-regular fa-eye"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-description">
                            <div class="description-name">
                                <h4>
                                    <a
                                        :title="product.name"
                                        href="/products/acid-corduroy"
                                        >{{ product.name }}</a
                                    >
                                </h4>
                            </div>
                            <div class="description-price">
                                <div class="sale-label">
                                    {{ product.salePercent }}% OFF
                                </div>
                                <div class="price">
                                    <del
                                        class="cost"
                                        v-if="product.salePercent !== 0"
                                        >{{ currencyVND(product.price) }}
                                    </del>
                                    <span class="price-sale"
                                        >{{
                                            currencyVND(
                                                product.price *
                                                    ((100 -
                                                        product.salePercent) *
                                                        0.01)
                                            )
                                        }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="s-button">
                <div class="s-button-prev">
                    <button class="btn-prev">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="prev-icon"
                        >
                            <g transform="matrix(-1,0,0,1,511.9997901916504,0)">
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    d="m468.8 235.007-401.359-231.73a24.2 24.2 0 0 0 -12.087-3.285h-.07a24.247 24.247 0 0 0 -12.094 3.287 24 24 0 0 0 -12.11 20.992v463.456a24.186 24.186 0 0 0 36.36 20.994l401.36-231.731a24.238 24.238 0 0 0 0-41.983z"
                                    fill-rule="evenodd"
                                    fill="#000000"
                                    data-original="#000000"
                                    class=""
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="s-button-next">
                    <button class="btn-next">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.com/svgjs"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                            class="next-icon"
                        >
                            <g>
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    d="m468.8 235.007-401.359-231.73a24.2 24.2 0 0 0 -12.087-3.285h-.07a24.247 24.247 0 0 0 -12.094 3.287 24 24 0 0 0 -12.11 20.992v463.456a24.186 24.186 0 0 0 36.36 20.994l401.36-231.731a24.238 24.238 0 0 0 0-41.983z"
                                    fill-rule="evenodd"
                                    fill="#000000"
                                    data-original="#000000"
                                    class=""
                                ></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <GoToTop></GoToTop>
    <Footer></Footer>
</template>

<script>
import { useSwiper } from "swiper/vue";
import GoToTop from "@/components/GoToTop.vue";
import Header from "../components/Header.vue";
import HeaderBottomNav from "../components/HeaderBottomNav.vue";
import Footer from "../components/Footer.vue";
import ProductModal from "@/components/ProductModal.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/grid";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { globals } from "@/globals";
// import required modules
import SwiperCore, {
    Keyboard,
    Pagination,
    Navigation,
    Parallax,
    Grid,
} from "swiper";
import axios from "axios";
SwiperCore.use([Navigation, Parallax]);

export default {
    name: "HomePage",
    components: {
        Header,
        Footer,
        HeaderBottomNav,
        Swiper,
        ProductModal,
        SwiperSlide,
        GoToTop,
    },
    methods: {
        handleShowModal(id) {
            this.isShowModal = true;
            this.productShowInModal = this.products.find(
                (item) => item.id === id
            );
            console.log("product: ", this.productShowInModal);
        },
        priceSale(i) {
            return (
                this.productCollection[i].price *
                (100 - this.productCollection[i].salePercent) *
                0.01
            );
        },
        currencyVND(value) {
            return value.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
            });
        },
        handleShowModalCollection(id) {
            this.isShowModalCollection = true;
            this.productCollectionShow = this.productCollection[id];
            console.log(this.productCollectionShow);
        },
        async viewCollection(path) {
            await this.$router.push({
                name: "Collection",
                params: { collectionName: path },
            });
        },
        ShowproductModal(item) {
            this.productInModal = item;
            this.isShowproductModal = true;
            console.log(item);
        },
    },
    data() {
        return {
            products: [],
            productCollection: [],
            isShowModalCollection: false,
            productCollectionShow: {},
            productInModal: {},
            isShowproductModal: false,
            itemInShowProductModal: 0,
        };
    },
    computed: {},
    setup() {
        const swiper = useSwiper();
        const sideBar = globals.categories;
        return {
            swiper,
            modules: [Keyboard, Pagination, Navigation, Grid],
            sideBar,
        };
    },
    mounted() {
        axios
            .get(`http://localhost:3000/collections?path_like=best-seller`)
            .then((res) => {
                this.products = res.data[0].products;
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get(`http://localhost:3000/collections?path_like=sale-end-season`)
            .then((res) => {
                this.productCollection = res.data[0].products;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>
<style lang="scss" scoped>
section {
    width: calc(100vw);
    height: calc(1080px);
}

#header-index.header-index {
    position: relative;
    width: 100%;
    height: calc(1080px);

    .header-panner {
        width: 100%;
        height: calc(100% - 125px);
        position: relative;
        margin: 0;

        .header-sidebar--left {
            position: absolute;
            margin: 0 auto;
            z-index: 1;
            width: 30%;
            top: 200px;
            height: calc(100% -200px);
            display: flex;
            align-items: center;
            // justify-content: center;
            flex-direction: column;

            .side-bar {
                .side-bar-menu {
                    padding: 10px;
                    margin: 0;

                    .side-bar-item {
                        list-style-type: none;
                        color: white;
                        list-style-position: outside;
                        font-size: 22px;
                        font-weight: 700;
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        margin-bottom: 10px;
                        width: fit-content;
                    }

                    .side-bar-item:hover {
                        cursor: pointer;
                        opacity: 0.7;
                    }
                }
            }
        }

        .header-banner--full {
            position: absolute;
            width: 100%;
            height: 100%;

            .first-banner--img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

#section-bar-code.section-bar-code {
    position: relative;
    width: 100%;
    height: 250px;
    background-color: transparent;

    .container {
        width: 70%;
        height: 100%;
        margin: 0 auto;

        .banner {
            width: 100%;
            height: 100%;

            .image-bar-code {
                // object-fit: fit;
                width: 100%;
                height: auto;
            }
        }
    }
}

#section-scroll-one.section-scroll-one {
    background-size: cover;
    background-position: center;
    height: calc(1080px - 250px + 160px);
    width: 100%;
    padding: 100px 0;
    margin: 50px 0;
    width: 100%;

    .container {
        width: calc(72%);
        padding: 0 15px;
        height: calc(100% - 30px);
        margin: auto;

        .list-banner {
            width: calc(72%);
            height: 100%;
            display: flex;
            justify-content: center;
            margin: auto;
            align-items: center;

            .banner-left {
                // margin-left: 46px;
                height: 100%;
                width: calc(91%);
                padding-right: 46px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                margin: auto;

                .banner-up {
                    height: 40%;
                    position: relative;
                    width: 100%;
                    margin-bottom: 65px;
                }

                .banner-down {
                    position: relative;
                    height: 40%;
                    width: 100%;
                }

                .banner-img {
                    width: 100%;
                    height: 100%;
                    object-fit: fixed;
                }

                .banner-left:hover .image-cap {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    top: 0;
                    position: absolute;
                    color: white;
                    font-size: 20px;
                    text-transform: uppercase;
                    font-weight: 600;
                    margin: auto;
                    width: 100%;
                    height: 100%;
                }
            }

            .image-cap {
                // display: flex;
                display: none;
            }

            .banner-right {
                height: calc(100% - 80px);
                width: calc(91%);

                padding-left: 46px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                position: relative;
                margin: auto;

                .banner-right--img {
                    width: 100%;
                    height: 100%;
                }
            }

            .banner-right:hover .image-cap {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                top: 0;
                position: absolute;
                color: white;
                font-size: 20px;
                text-transform: uppercase;
                font-weight: 600;
                margin: auto;
                width: 100%;
                height: 100%;
            }
        }
    }
}

#section-banner-one.section-banner-one {
    display: block;
    width: 100%;
    height: 980px;
    position: relative;
    margin: 50px 0;

    .container {
        width: calc(90%);
        margin: auto;
        height: 100%;
        padding: 0 15px;

        .list-banner {
            width: calc(80% + 30px);
            margin: auto;
            height: 100%;

            .row {
                margin: 0 -15px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                flex-wrap: wrap;
                width: 100%;
                height: 100%;

                .banner {
                    margin: auto;
                    height: 45%;
                    width: 45%;
                    position: relative;

                    .banner-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .image--cap {
                        display: none;
                    }
                }

                .banner:hover .image--cap {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    top: 0;
                    position: absolute;
                    color: white;
                    font-size: 20px;
                    text-transform: uppercase;
                    font-weight: 600;
                    margin: auto;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

@keyframes slide1 {
    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(0, 10px);
    }
}

#section-best-seller.section-best-seller {
    display: block;
    width: 100%;
    height: 900px;
    position: relative;
    margin: auto;

    .container {
        background-color: white;
        width: 75%;
        height: calc(90%);
        margin: auto;
        display: flex;
        justify-content: left;
        flex-direction: column;

        .s-title {
            height: 15%;
            width: 300px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;

            .s-title--text {
                font-size: 24px;
                font-weight: 700;
            }

            .s-title--symbol {
                font-size: 38px;
                font-weight: 700;
            }

            .down-arrow {
                // rest of the styles from above
                animation: slide1 1s ease-in-out infinite;
                margin-top: -9px;
            }
        }

        .s-content {
            height: 75%;
            width: 100%;
            margin: auto;

            .s-content-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                width: 100%;

                .card {
                    width: 33%;
                    height: fit-content;
                    position: relative;

                    .card-image {
                        height: 450px;
                        width: 450px;
                        position: relative;

                        .card-img {
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                            object-position: center;
                        }

                        .overlay-image {
                            width: 450px;
                            height: 450px;
                            position: absolute;
                            top: 0;
                            right: 0;
                            opacity: 0;
                            transition: 0.5s ease;

                            .overlay-img {
                                height: 100%;
                                width: 100%;
                                object-fit: cover;
                                object-position: center;
                            }

                            .overlay-btn {
                                height: 100%;
                                width: 60%;
                                margin: 0 20%;
                                top: 0;
                                right: 0;
                                left: 0;
                                bottom: 0;
                                position: absolute;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                button {
                                    width: 48%;
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
                        }

                        .card-tag {
                            position: absolute;
                            border: none;
                            background-color: var(--primary-color);
                            height: 22px;
                            top: 0;
                            right: 100px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            z-index: 3;

                            .car-tag--text {
                                font-size: 10px;
                                font-weight: 700;
                                padding: 2px 7px 0 7px;
                                text-transform: uppercase;
                            }
                        }
                    }

                    .card-image:hover {
                        cursor: pointer;
                    }

                    .card-image:hover .overlay-image {
                        opacity: 1;
                    }

                    .overlay {
                        top: 0;
                        right: 0;
                        position: absolute;
                        -webkit-transform: translate(-50%, -50%);
                        -ms-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                    }

                    .description {
                        height: 50px;
                        width: 450px;
                        text-transform: uppercase;
                        font-size: 14px;
                        font-weight: 700;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        position: relative;

                        .description-title {
                            height: 50%;
                            &hover {
                                cursor: pointer;
                                color: var(--primary-color);
                            }
                        }
                        .description-price {
                            height: 50%;
                            width: 50%;
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
                    .sale-label {
                        position: absolute;
                        bottom: 30px;
                        right: 30px;
                        background-image: url(https://file.hstatic.net/1000351433/file/label-sale_778ce78ae28d436c92f2d6de66effd3b.png);
                        height: 9%;
                        width: 18%;
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
            }
        }
    }
}

.s-button {
    margin-top: -20px;
    height: 10%;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;

    button:hover {
        cursor: pointer;
    }

    button {
        svg {
            height: 20px;
            width: 20px;
        }

        background-color: transparent;
        border: none;
        margin-right: 5px;
    }
}

#section-banner-two.section-banner-two {
    width: 100%;
    height: 1080px;
    margin-bottom: 50px;

    .container {
        width: 100%;
        height: 100%;

        .banner-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

#section-end-of-year.section-end-of-year {
    width: 100%;
    height: 1080px;
    margin-bottom: 50px;

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        cursor: pointer;
    }

    .container {
        width: 75%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: left;
        align-items: left;
        flex-direction: column;

        .s-title {
            width: 25%;
            height: 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2 {
                font-size: 24px;
                font-weight: 700;
                text-transform: uppercase;

                a {
                    text-decoration: none;
                    color: black;
                }
            }

            .arrows {
                width: 25px;
                height: 25px;
                animation: slide1 1s ease-in-out infinite;
                margin-top: -9px;
            }
        }

        .s-content {
            width: 100%;
            height: 80%;

            // display: flex;
            // justify-content: space-between;
            // flex-wrap: wrap;
            // align-items: center;
            .swiper {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .card {
                    height: 47%;
                    width: 32%;
                    position: relative;

                    .card-image-wrapper {
                        height: 80%;
                        width: 95%;
                        position: relative;

                        .card-image {
                            width: 350px;
                            height: 350px;
                            position: relative;

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                object-position: center;
                            }

                            .overlay_loader {
                                position: absolute;
                                background-color: red;
                                width: 100%;
                                height: 100%;
                                top: 0;
                                opacity: 0;
                                right: 0;

                                .lazy_loader {
                                    position: absolute;
                                    // top: 0;
                                    // right: 0;
                                    // opacity: 0;
                                    transition: 0.5s ease;
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
                                    justify-content: space-between;
                                    align-items: center;

                                    .view {
                                        width: 40%;
                                    }

                                    .quick-view {
                                        width: 50%;
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
                            }
                        }

                        .card-image:hover .overlay_loader {
                            opacity: 1;
                            cursor: pointer;
                        }
                    }

                    .card-description {
                        padding-top: 2%;
                        margin-left: -30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        width: 95%;
                        height: 20%;

                        .description-name {
                            height: 60%;
                            width: 100%;
                            margin: auto;
                            text-align: center;
                            text-transform: uppercase;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0 auto;

                            :hover {
                                color: var(--primary-color);
                            }
                        }

                        .description-price {
                            width: 100%;
                            height: 40%;
                            padding: 0;

                            .sale-label {
                                position: absolute;
                                background-image: url(https://file.hstatic.net/1000351433/file/label-sale_778ce78ae28d436c92f2d6de66effd3b.png);
                                height: 9%;
                                width: 21%;
                                font-size: 12px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background-size: cover;
                                background-position: center;
                                text-transform: uppercase;
                                font-weight: 700;
                                bottom: 16%;
                                right: 9%;
                            }

                            .price {
                                width: 100%;
                                margin: auto;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding-top: 10px;

                                .cost {
                                    font-size: 12px;
                                    width: fit-content;
                                    margin: 0 12px;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                }

                                .price-sale {
                                    font-size: 14px;
                                    margin: 0 12px;
                                    width: fit-content;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    color: var(--primary-color);
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
