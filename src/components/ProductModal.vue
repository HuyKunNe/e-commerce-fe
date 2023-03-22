<template>
    <v-dialog
        v-model="dialogVisible"
        :transition="dialogTransition"
        width="500px"
        height="350px"
        class="dialog"
    >
        <v-card
            width="100%"
            height="100%"
            class="card-loader"
            variant="outlined"
        >
            <swiper
                :navigation="true"
                :modules="modules"
                :loop="true"
                class="modal-image"
            >
                <swiper-slide
                    class="image-content"
                    v-for="image in product.imageUrl"
                    :key="image.id"
                >
                    <img :src="image" alt="" />
                </swiper-slide>
            </swiper>
            <div class="modal-content">
                <div class="detail">
                    <div class="detail--name">
                        <h3>{{ product.productName }}</h3>
                    </div>
                    <div class="detail--price">
                        <div class="price" v-if="product.salePercent > 0">
                            <del>{{ currencyVND(product.price) }}</del>
                        </div>
                        <div class="sale-price">
                            <h5>
                                {{
                                    currencyVND(
                                        priceSale(
                                            product.price,
                                            product.salePercent
                                        )
                                    )
                                }}
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="break-line"></div>
                <div class="order">
                    <div class="size">
                        <span>Size: </span>
                        <button class="size-btn">S</button
                        ><button class="size-btn">M</button
                        ><button class="size-btn">L</button>
                    </div>
                    <div class="size-choosing">
                        <a href="">HƯỚNG DẪN CHỌN SIZE</a>
                    </div>
                    <div class="add-to-cart">
                        <button class="add-btn">Thêm vào giỏ</button>
                    </div>
                    <div class="logo-small">
                        <div class="logo-image">
                            <img
                                src="../assets/images/MiddleLogo.png"
                                alt=""
                                class="logo-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { useSwiper } from "swiper/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/grid";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, {
    Keyboard,
    Pagination,
    Navigation,
    Parallax,
    Grid,
} from "swiper";
SwiperCore.use([Navigation, Parallax]);
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        value: {
            type: Boolean,
            required: true,
        },
        product: {
            type: Object,
            default: () => ({}),
        },
        dialogTransition: {
            type: String,
            default: "0.3 ease",
        },
    },
    data() {
        return {
            dialogVisible: this.value,
        };
    },
    methods: {
        closeDialog() {
            this.dialogVisible = false;
            this.$emit("update:value", false);
        },
        priceSale(price, salePercent) {
            if (salePercent) {
                return price * (100 - salePercent) * 0.01;
            } else {
                return price;
            }
        },
        currencyVND(value) {
            if (value) {
                return value.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                });
            }
        },
    },
    watch: {
        value(val) {
            this.dialogVisible = val;
        },
        dialogVisible(val) {
            this.$emit("update:value", val);
        },
    },
    setup() {
        const swiper = useSwiper();
        return {
            swiper,
            modules: [Keyboard, Pagination, Navigation, Grid],
        };
    },
    computed: {
        localData() {
            return {
                ...this.product,
            };
        },
    },
};
</script>
<style lang="scss" scoped>
.dialog {
    border: 2px solid #000;
    font-family: "Cousine", monospace;
    box-shadow: none;
    .card-loader {
        width: 500px;
        height: 350px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        box-shadow: none;

        .modal-image {
            height: 100%;
            width: 60%;
            background-color: white;

            .image-content {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40%;
                height: auto;

                img {
                    width: 90%;
                    height: auto;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }

        .modal-content {
            height: 100%;
            width: 40%;
            background-color: white;
            padding-right: 10px;
            display: flex;
            justify-content: left;
            flex-direction: column;

            .detail {
                margin-top: 20px;
                display: flex;
                justify-content: left;
                align-items: center;
                flex-direction: column;
                width: 100%;
                height: 30%;

                .detail--name {
                    margin-top: 5px;
                    height: 60%;
                    width: 100%;

                    h3 {
                        font-weight: 700;
                        text-transform: uppercase;
                    }
                }

                .detail--price {
                    height: 40%;
                    width: 100%;
                    display: flex;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    flex-direction: column;
                    .sale-price {
                        h5 {
                            font-weight: 700;
                            text-transform: uppercase;
                            font-size: 14px;
                            color: var(--primary-color);
                        }
                        width: 100%;
                        height: 50%;
                    }
                    .price {
                        del {
                            font-size: 14px;
                            text-transform: uppercase;
                            font-weight: 700;
                        }
                        height: 50%;
                        width: 100%;
                    }
                }
            }

            .break-line {
                width: 100%;
                height: 5%;
                border-bottom: 3px solid #000;
            }

            .order {
                width: 100%;
                height: 57%;
                display: flex;
                justify-content: left;
                // align-items: center;
                flex-direction: column;

                .size {
                    width: 70%;
                    height: 20%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    span {
                        text-transform: uppercase;
                        font-size: 14px;
                        color: #000;
                        font-weight: 700;
                    }

                    .size-btn {
                        width: fit-content;
                        padding: 0 4px;
                        border: 1px solid var(--primary-text);
                        border-radius: 4px;
                        font-size: 12px;

                        &:hover {
                            background-color: #000;
                            color: white;
                        }
                    }
                }

                .size-choosing {
                    width: 100%;
                    height: 30%;

                    a {
                        text-decoration: none;
                        color: var(--primary-color);
                        font-weight: 700;
                    }
                }

                .add-to-cart {
                    width: 80%;
                    height: 20%;

                    .add-btn {
                        border: none;
                        background-color: var(--primary-color);
                        font-size: 14px;
                        font-weight: 600;
                        width: 90%;
                        border-radius: 4px;
                        padding: 5px;

                        &:hover {
                            opacity: 0.9;
                        }
                    }
                }

                .logo-small {
                    height: 30%;
                    width: 100%;

                    .logo-image {
                        height: 100%;
                        width: 100%;

                        .logo-img {
                            height: 100%;
                            width: auto;
                            object-fit: cover;
                            object-position: center;
                        }
                    }
                }
            }
        }
    }
}
</style>
