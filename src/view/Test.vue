<template>
    <div class="pagination">
        <button @click="goToPreviousPage">Prev</button>
        <button
            v-for="(button, index) in displayedPages"
            :key="index"
            :class="{ active: button === currentPage }"
            @click="goToPage(button)"
        >
            {{ button }}
        </button>
        <button @click="goToNextPage">Next</button>
    </div>
</template>

<script>

export default {
    name: "TestComponent",
    data() {
        return {
            currentPage: 1,
            totalPages: 0,
            pageButtons: [],
        };
    },
    computed: {
        displayedPages() {
            let buttons = [];
            let total = this.totalPages;

            if (total <= 4) {
                buttons = Array.from({ length: total }, (_, i) => i + 1);
            } else if (this.currentPage <= 2) {
                buttons = [1, 2, 3, 4, "...", total];
            } else if (this.currentPage >= total - 1) {
                buttons = [1, "...", total - 2, total - 1, total];
            } else {
                buttons = [
                    1,
                    "...",
                    this.currentPage - 1,
                    this.currentPage,
                    this.currentPage + 1,
                    "...",
                    total,
                ];
            }

            return buttons;
        },
    },
    methods: {
        goToPage(pageNumber) {
            this.currentPage = pageNumber;
        },

        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },

        goToNextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
    },
};
</script>
