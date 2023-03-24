<template>
    <div class="test">
        <ToastMessage :toast="toast"></ToastMessage>
    </div>
</template>

<script>
import ToastMessage from '@/components/ToastMessage.vue';

export default {
    components: {
        ToastMessage,
    },
    name: "TestComponent",
    data() {
        return {
            toast: {
                status: "Success",
                title: "Success",
                msg: "Login Successfully",
            },
        };
    },
};
</script>
