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
                        >
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header-banner--full">
                <img
                    src="https://file.hstatic.net/1000351433/file/banner_chinh_op2_3cc94f6e60e5428da2af88be216269d0.png"
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
                    src="https://file.hstatic.net/1000351433/file/bad_welcome_3eb6f344cd464c1f8783c0d4cf3a6881.jpg"
                    alt=""
                    class="image-bar-code"
                />
            </div>
        </div>
    </section>
    <section class="section-scroll-one" id="section-scroll-one">
        <div class="container">
            <div class="list-banner">
                <div class="banner-left">
                    <div class="banner-left banner-up">
                        <img
                            src="https://file.hstatic.net/1000351433/file/vuong_2_bb2b2b8aa0ea468d8e7e2536953a66cc.png"
                            alt=""
                            class="banner-img"
                        />
                        <div class="image-cap">MOST WANTED</div>
                    </div>
                    <div class="banner-left banner-down">
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
                    <div class="banner">
                        <img
                            class="banner-img"
                            alt="BASIC COLLECTION"
                            src="https://file.hstatic.net/1000351433/file/1_0847b4b2f2474940a893e027baf28f9f.png"
                        />
                        <div class="image--cap">
                            <p>BASIC COLLECTION</p>
                        </div>
                    </div>
                    <div class="banner">
                        <img
                            class="banner-img"
                            alt="BASIC COLLECTION"
                            src="https://file.hstatic.net/1000351433/file/2_041897f230494ffd9bb7cc142c581057.png"
                        />
                        <div class="image--cap">
                            <p>BASIC COLLECTION</p>
                        </div>
                    </div>
                    <div class="banner">
                        <img
                            class="banner-img"
                            alt="BASIC COLLECTION"
                            src="https://file.hstatic.net/1000351433/file/3_7f1b0dc5df624b31a527a04993e4222b.png"
                        />
                        <div class="image--cap">
                            <p>BASIC COLLECTION</p>
                        </div>
                    </div>
                    <div class="banner">
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
    <Footer></Footer>
</template>

<script>
import Header from "./Header.vue";
import HeaderBottomNav from "./HeaderBottomNav.vue";
import Footer from "./Footer.vue";
export default {
    name: "HomePage",
    components: {
        Header,
        Footer,
        HeaderBottomNav,
    },
    data() {
        return {
            sideBar: [
                "BEST SELLER",
                "BASIC LINE",
                "TẤT CẢ SẢN PHẨM",
                "ÁO THUN",
                "ÁO SƠMI",
                "ÁO KHOÁC",
                "QUẦN",
                "PHỤ KIỆN",
                "OUTLET SALE",
            ],
        };
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
    background-image: url("https://file.hstatic.net/1000351433/file/nen_6f76fa87e6674465901546d144f50b5b.png");
    background-size: cover;
    background-position: center;
    // position: absolute;
    height: calc(1080px - 250px + 160px);
    padding: 100px 0;
    margin: 50px 0;
    .container {
        width: calc(100% - 493px);
        padding: 0 15px;
        height: calc(100% - 30px);
        margin: auto;
        .list-banner {
            width: calc(100% - 564px);
            height: 100%;
            display: flex;
            justify-content: center;
            margin: auto;
            align-items: center;
            .banner-left {
                // margin-left: 46px;
                height: 100%;
                width: calc(50% - 46px - 6px);
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
                width: calc(50% - 46px - 6px);
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
        width: calc(75% - 30px);
        margin: auto;
        height: 100%;
        padding: 0 15px;
        .list-banner {
            width: calc(80%);
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
</style>
