<template>
    <div class="pagination">
        <pagination-button :total-pages="totalPages"></pagination-button>
    </div>
</template>

<script>
import PaginationButton from "@/components/TestComponent.vue";

export default {
    components: {
        PaginationButton,
    },
    name: "TestComponent",
    data() {
        return {
            totalPages: 10,
        };
    },
};
</script>
