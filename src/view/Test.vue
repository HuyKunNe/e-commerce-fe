<template>
    <div class="test">
        <button @click="click()">show Toast</button>
    </div>
    <header-bottom-nav></header-bottom-nav>
    <ToastMessage
        v-for="(toast, index) in toasts"
        :key="toast.id"
        :toast="toast"
        @close="removeToast(toast.id)"
        :spacing="100 * index"
    ></ToastMessage>
</template>

<script>
import ToastMessage from "@/components/ToastMessage.vue";
import HeaderBottomNav from "@/components/HeaderBottomNav.vue";
export default {
    components: {
        ToastMessage,
        HeaderBottomNav,
    },
    name: "TestComponent",
    data() {
        return {
            toasts: [],
            toastId: 0,
        };
    },
    methods: {
        click() {
            this.showToast({
                status: "Success",
                title: "Success",
                msg: "Login success",
            });
        },
        showToast(item) {
            const toast = {
                id: this.toastId++,
                status: item.status,
                title: item.title,
                msg: item.msg,
            };
            this.toasts.push(toast);
            setTimeout(() => {
                this.removeToast(toast.id);
            }, 2500);
        },
        removeToast(id) {
            this.toasts = this.toasts.filter((toast) => toast.id !== id);
        },
    },
};
</script>
<style lang="scss">
#toast + #toast {
    transform: translateX("20px");
}
</style>
