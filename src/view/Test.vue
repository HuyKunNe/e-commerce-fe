<template>
    <div class="test">
        <button @click="showToast(toast)">show Toast</button>
    </div>
    <ToastMessage
        v-for="toast in toasts"
        :key="toast.id"
        :toast="toast"
        @close="removeToast(toast.id)"
    ></ToastMessage>
</template>

<script>
import ToastMessage from "@/components/ToastMessage.vue";

export default {
    components: {
        ToastMessage,
    },
    name: "TestComponent",
    data() {
        return {
            toasts: [],
            toast: {
                status: "Success",
                title: "Toast Title",
                msg: "Toast Message",
            },
            toastId: 0,
        };
    },
    methods: {
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
            }, 3000);
        },
        removeToast(id) {
            this.toasts = this.toasts.filter((toast) => toast.id !== id);
        },
    },
};
</script>
