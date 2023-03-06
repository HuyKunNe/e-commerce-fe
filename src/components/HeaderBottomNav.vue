<template>
    <div class="header-bot-bar" id="header-bot-bar">
        <div class="header-bot-nav">
            <ul class="header-list">
                <li>
                    <a href="">BEST SELLER
                        <div class="header-list--hover"></div>
                    </a>
                </li>
                <li>
                    <a href="" class="menu">SẢN PHẨM
                        <font-awesome-icon icon="fa-solid fa-caret-down" />
                        <div class="menu-dropdown">
                            <ul class="menu-list">
                                <li class="menu-item" v-for="product in products" :key="product.id">
                                    {{ product }}
                                </li>
                            </ul>
                        </div>
                        <div class="header-list--hover"></div>
                    </a>
                </li>
                <li class="menu">
                    <a href="">BỘ SƯU TẬP
                        <font-awesome-icon icon="fa-solid fa-caret-down" />
                        <div class="menu-dropdown">
                            <ul class="menu-list">
                                <li class="menu-item" v-for="colection in colections" :key="colection.id">
                                    {{ colection }}
                                </li>
                            </ul>
                        </div>
                        <div class="header-list--hover"></div>
                    </a>
                </li>
                <li>
                    <a href="">BASIC LINE
                        <div class="header-list--hover"></div>
                    </a>
                </li>
                <li>
                    <a href="">MAKE YOUR STYLE
                        <div class="header-list--hover"></div>
                    </a>
                </li>
                <li>
                    <a href="">OUTLET SALE
                        <div class="header-list--hover"></div>
                    </a>
                </li>
                <li>
                    <a href="">BAD RABBIT CLUB®
                        <div class="header-list--hover"></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: "HeaderBotBar",
    components: { FontAwesomeIcon },
    data() {
        return {
            products: [
                "TẤT CẢ SẢN PHẨM",
                "ÁO THUN",
                "ÁO SƠMI",
                "ÁO KHOÁC",
                "QUẦN",
                "PHỤ KIỆN",
            ],
            colections: [
                "BỘ SƯU TẬP BASIC",
                "BỘ SƯU TẬP LUCKY YEAR",
                "BỘ SƯU TẬP #STEPOUT",
                "BỘ SƯU TẬP REMAKE",
                "BỘ SƯU TẬP NỮ",
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
#header-bot-bar.header-bot-bar {
    z-index: 9999;
    background-color: white;
    position: sticky;
    width: 100%;
    height: 87px;
    margin: 0 auto;
    border-bottom: 1px solid #333;
    left: 0;
    top: 0;

    .header-bot-nav {
        height: 100%;
        width: calc(100% - 263px);
        margin: auto;

        .header-list {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            list-style-type: none;
            width: calc(100%);
            margin: auto;
            padding: 30px 0;

            li {
                width: fit-content;
                height: auto;
                font-size: 18px;
                text-align: center;

                a {
                    position: relative;
                    text-align: center;
                    font-weight: 800;
                    text-decoration: none;
                    color: var(--primary-text);
                }
            }

            a:hover .header-list--hover {
                display: block;
                cursor: pointer;
            }

            .header-list--hover {
                display: none;
                content: "";
                border-style: solid;
                border-width: 2px 30px;
                border-color: #000;
                position: absolute;
                bottom: -5px;
                left: 0;
                right: 0;
                width: fit-content;
                margin: auto;
            }

            .menu {
                position: relative;

                .menu-dropdown {
                    display: none;
                    position: absolute;
                    width: fit-content;
                    margin-top: 10px;
                    left: 50px;

                    .menu-list {
                        background-color: transparent;
                        padding: 0;
                        width: calc(100% + 19px);

                        .menu-item {
                            list-style-type: none;
                            list-style-position: outside;
                            background-color: white;
                            width: calc(100% - 19px);
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 21px;
                            text-align: left;
                            border: 3px solid #000;
                            margin: 5px 0;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            display: inherit;
                            border-radius: 5px;
                            padding: 3px 0px 0 10px;
                        }

                        .menu-item:hover {
                            cursor: pointer;
                            background-color: #000;
                            color: white;
                        }
                    }

                    .menu-list::before {
                        background-color: transparent;
                        content: "";
                        position: absolute;
                        top: 0;
                        left: -60px;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                    }
                }
            }

            .menu::before {
                content: "";
                position: absolute;
                top: 20px;
                right: 0px;
                width: 100%;
                height: 20px;
                z-index: 1;
            }

            .menu:hover .menu-dropdown {
                display: block;
            }
        }
    }
}
</style>
