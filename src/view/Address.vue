<template>
    <Header></Header>
    <HeaderBottomNav></HeaderBottomNav>
    <section class="section-address" id="section-address">Address</section>
    <Footer></Footer>
    <GoToTop></GoToTop>
</template>

<script>
import Header from "@/components/Header.vue";
import HeaderBottomNav from "@/components/HeaderBottomNav.vue";
import Footer from "@/components/Footer.vue";
import GoToTop from "@/components/GoToTop.vue";
export default {
    name: "AddressPage",
    components: {
        Header,
        HeaderBottomNav,
        Footer,
        GoToTop,
    },
};
</script>

<style lang="scss" scoped></style>
