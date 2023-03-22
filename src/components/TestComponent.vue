<template>
    <nav>
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="previousPage()"
                    >Previous</a
                >
            </li>
            <li
                class="page-item"
                v-for="page in pageCount"
                :key="page"
                :class="{ active: currentPage === page }"
            >
                <a
                    class="page-link"
                    href="#"
                    @click.prevent="changePage(page)"
                    >{{ page }}</a
                >
            </li>
            <li
                class="page-item"
                :class="{ disabled: currentPage === pageCount }"
            >
                <a class="page-link" href="#" @click.prevent="nextPage()"
                    >Next</a
                >
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "PagingComponent",
    props: {
        currentPage: Number,
        pageSize: Number,
        totalItems: Number,
    },
    computed: {
        pageCount() {
            return Math.ceil(this.totalItems / this.pageSize);
        },
    },
    methods: {
        changePage(page) {
            this.$emit("page-changed", page);
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.$emit("page-changed", this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.pageCount) {
                this.$emit("page-changed", this.currentPage + 1);
            }
        },
    },
};
</script>
