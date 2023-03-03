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
#app {
    margin: 0;
    width: calc(100vw);
    margin-top: -3px;
    margin-right: -8px;
    font-family: 'Cousine', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
