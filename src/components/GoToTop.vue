<template>
    <h5 class="go-top" id="go-top" @click="goToTop()">"Trở lại đầu trang"</h5>
</template>

<script>
export default {
    name: "goToTop",
    methods: {
        goToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
        },
    },
};
</script>

<style lang="scss" scoped>
#go-top.go-top {
    writing-mode: vertical-rl;
    z-index: 998;
    position: fixed;
    bottom: 20px;
    padding: 8px;
    right: 0;
    background-color: transparent;
}

.go-top:hover {
    cursor: pointer;
}
</style>
