<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
html,
body {
    height: 100%;
    width: calc(100vw);
    margin: 0;
    overflow-x: hidden;
}
.v-overlay__scrim {
    background: transparent !important;
}
.swiper-button-prev,
.swiper-button-next {
    color: black !important;
}
.swiper-button-next::after,
.swiper-button-prev::after {
    font-size: 24px !important;
    font-weight: 700 !important;
}
#app {
    margin: 0;
    width: calc(100vw);
    position: relative;
    margin-top: -3px;
    margin-right: -8px;
    font-family: "Cousine", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
