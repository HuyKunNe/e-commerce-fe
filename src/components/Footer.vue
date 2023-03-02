<template>
    <div class="footer">
        <div class="footer-top">
            <div class="container">
                <h2>"BAD HABITS DIGITAL RETAIL STORE"</h2>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="footer-block">
                        <div class="footer-title">
                            <h4>THEO DÕI BAD HABITS® TẠI:</h4>
                        </div>
                        <div class="footer-social-list">
                            <div class="social-item instagram">
                                <font-awesome-icon
                                    icon="fa-brands fa-instagram"
                                />
                            </div>
                            <div class="social-item facebook">
                                <font-awesome-icon
                                    icon="fa-brands fa-facebook"
                                />
                            </div>
                            <div class="social-item tiktok">
                                <font-awesome-icon icon="fa-brands fa-tiktok" />
                            </div>
                            <div class="social-item youtube">
                                <font-awesome-icon
                                    icon="fa-brands fa-youtube"
                                />
                            </div>
                        </div>
                        <div class="footer-title">
                            <h4>ĐĂNG KÝ ĐỂ NHẬN NHIỀU ƯU ĐÃI</h4>
                        </div>
                        <div class="register-form">
                            <div class="input-group">
                                <input
                                    type="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    placeholder="Email address"
                                    aria-label="Email Address"
                                    class="input-group-text"
                                />
                                <button type="submit" class="input-group-btn">
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                        <div class="hotline">
                            <h4>HOTLINE: 0902.638.020 - 0931.610.291</h4>
                        </div>
                    </div>
                    <div class="footer-content">
                        <div class="footer-title">
                            <h4>CHI NHÁNH CỬA HÀNG:</h4>
                        </div>
                        <ul class="address-list">
                            <li><b> SÀI GÒN </b></li>
                            <li>1. 93 Rạch Bùng Binh,Phường 9, Quận 3</li>
                            <li>
                                2. 117 Trần Đình Xu, phường Nguyễn Cư Trinh,
                                Quận 1
                            </li>
                            <li>
                                3. 57 Nguyễn Gia Trí phường 25, quận Bình Thạnh
                            </li>
                            <li>4. 26 Lý Tự Trọng, Phường Bến Nghé, Quận 1</li>
                            <li><b>HÀ NỘI</b></li>
                            <li>
                                5. 21B Phố Lò Đúc, Phường Ngô Thì Nhậm, Quận Hai
                                Bà Trưng, Hà Nội
                            </li>
                            <li><b>CẦN THƠ</b></li>
                            <li>
                                6. 7 Trần Văn Hoài, Phường Xuân Khánh, Quận Ninh
                                Kiều, Cần Thơ
                            </li>
                        </ul>
                        <div class="copyright">
                            <b>© 2023</b>
                            <a href="#"><b> BAD HABBIT OFFICAL STORE </b></a>
                            <b> ALL RIGHT RESERVED</b>
                        </div>
                    </div>
                    <div class="footer-menu">
                        <ul class="menu-list">
                            <li>TÌM SẢN PHẨM</li>
                            <li>BLOG</li>
                            <li>ĐỔI TRẢ SẢN PHẨM</li>
                            <li>CHÍNH SÁCH ĐỔI TRẢ</li>
                            <li>THÔNG TIN LIÊN HỆ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
    position: absolute;
    height: 400px;
    width: calc(100% + 6px);
    overflow-x: hidden;
    bottom: 0;
    .footer-top {
        padding: 20px 0;
        margin: 0 -10px;
        border: 2px solid black;
        margin-bottom: 30px;
        .container {
            text-align: center;
            h2 {
                margin: 0;
            }
        }
    }
    .footer-bottom {
        width: calc(100% - 231.5*2);
        height: 200px;
        .container {
            margin: 0 150px auto;
            height: 100%;
            .row {
                display: flex;
                justify-content: space-between;
                height: 100%;
                .footer-block {
                    width: 450px;
                    padding: 0 15px;
                    height: 100%;
                    h4 {
                        margin: 0 0 20px 0;
                    }
                    .footer-social-list {
                        width: 224px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        font-size: 41px;
                        margin-bottom: 30px;
                        .social-item:hover {
                            cursor: pointer;
                            color: var(--primary-color);
                        }
                    }
                    .register-form {
                        width: 365px;
                        .input-group {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin: 1%;
                            width: 100%;
                            margin-bottom: 20px;
                            .input-group-text {
                                font-size: 14px;
                                width: 60%;
                                padding: 5px;
                                border: 2px solid var(--solid-text);
                                border-radius: 5px;
                            }
                            .input-group-text:focus {
                                border: 2px solid var(--primary-color);
                            }
                            .input-group-btn {
                                font-size: 14px;
                                width: 30%;
                                font-weight: 500;
                                padding: 7px;
                                border-radius: 5px;
                                background-color: var(--primary-color);
                                border: 0 solid var(--solid-text);
                            }
                            .input-group-btn:hover {
                                opacity: 0.8;
                                cursor: pointer;
                            }
                        }
                    }
                }
                .footer-content {
                    height: 100%;
                    h4 {
                        margin: 0;
                        margin-bottom: 10px;
                    }
                    ul {
                        list-style-type: none;
                        padding-left: 0;
                        list-style-position: outside;
                        font-family: 'Cousine', monospace;
                        text-align: left;
                    }
                    .address-list {
                        margin-top: 0;
                        font-family: 'Cousine', monospace;
                        li {
                            b{
                                font-size: 14px;
                            }
                            font-size: 14px;
                            font-weight: 600;
                            height: 21px;
                        }
                    }
                    .copyright{
                        a{
                            text-decoration: none;
                            color: var(--primary-text);
                        }
                    }
                    a:visited{
                        background-color: var(--primary-text);
                    }
                    a:hover{
                        color: var(--primary-color);
                    }
                }
                .footer-menu{
                    display: flex;
                    justify-content: center;
                    align-items: start;
                    ul{
                        margin: 0;
                        list-style-type: none;
                        list-style-position: outside;
                    }
                    .menu-list{
                        li{
                            margin-bottom: 25px;
                            height: 21px;
                            font-weight: 600;
                        }
                        li:hover{
                            cursor: pointer;
                            color: var(--primary-color);
                        }
                    }
                }
            }
        }
    }
}
</style>
