<template>
    <div class="pagination" id="pagination">
        <div class="pagination-bar">
            <div
                class="s-button-prev"
                @click="goToPreviousPage"
                v-if="currentPage !== 1"
            >
                <button class="btn-prev">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512"
                        style="enable-background: new 0 0 512 512"
                        xml:space="preserve"
                        class="prev-icon"
                    >
                        <g transform="matrix(-1,0,0,1,511.9997901916504,0)">
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="m468.8 235.007-401.359-231.73a24.2 24.2 0 0 0 -12.087-3.285h-.07a24.247 24.247 0 0 0 -12.094 3.287 24 24 0 0 0 -12.11 20.992v463.456a24.186 24.186 0 0 0 36.36 20.994l401.36-231.731a24.238 24.238 0 0 0 0-41.983z"
                                fill-rule="evenodd"
                                fill="#000000"
                                data-original="#000000"
                                class=""
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>
            <button
                v-for="(button, index) in displayedPages"
                :key="index"
                :class="{ active: button === currentPage }"
                @click="goToPage(button)"
            >
                {{ button }}
            </button>
            <div
                class="s-button-next"
                @click="goToNextPage"
                v-if="currentPage !== totalPages"
            >
                <button class="btn-next">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.com/svgjs"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512"
                        style="enable-background: new 0 0 512 512"
                        xml:space="preserve"
                        class="next-icon"
                    >
                        <g>
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="m468.8 235.007-401.359-231.73a24.2 24.2 0 0 0 -12.087-3.285h-.07a24.247 24.247 0 0 0 -12.094 3.287 24 24 0 0 0 -12.11 20.992v463.456a24.186 24.186 0 0 0 36.36 20.994l401.36-231.731a24.238 24.238 0 0 0 0-41.983z"
                                fill-rule="evenodd"
                                fill="#000000"
                                data-original="#000000"
                                class=""
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "PaginationBar",
    data() {
        return {
            pageButtons: [],
        };
    },
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        modelValue: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        displayedPages() {
            let buttons = [];
            let total = this.totalPages;
            if (total <= 5) {
                buttons = Array.from({ length: total }, (_, i) => i + 1);
            } else if (this.currentPage <= 3) {
                buttons = [1, 2, 3, 4, "...", total];
            } else if (this.currentPage >= total - 2) {
                buttons = [1, "...", total - 3, total - 2, total - 1, total];
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
        localData() {
            return {
                ...this.totalPages,
            };
        },
    },
    methods: {
        // goToPage(pageNumber) {
        //     if (pageNumber > 0) this.currentPage = pageNumber;
        // },
        // goToPreviousPage() {
        //     if (this.currentPage > 1) {
        //         this.currentPage--;
        //     }
        // },
        // goToNextPage() {
        //     if (this.currentPage < this.totalPages) {
        //         this.currentPage++;
        //     }
        // },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        const currentPage = ref(props.modelValue);

        const setCurrentPage = (n) => {
            currentPage.value = n;
            emit("update:modelValue", currentPage.value);
        };

        const goToNextPage = () => {
            if (currentPage.value < props.totalPages) {
                currentPage.value++;
                emit("update:modelValue", currentPage.value);
            }
        };

        const goToPreviousPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
                emit("update:modelValue", currentPage.value);
            }
        };
        const goToPage = (pageNumber) => {
            if (pageNumber > 0) currentPage.value = pageNumber;
            emit("update:modelValue", currentPage.value);
        };
        return {
            currentPage,
            setCurrentPage,
            goToNextPage,
            goToPreviousPage,
            goToPage,
        };
    },
};
</script>
<style lang="scss">
#pagination.pagination {
    width: 100%;
    height: fit-content;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-bottom: 10px;
    .pagination-bar {
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        button:hover {
            cursor: pointer;
        }
        .active {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            color: white;
        }
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px;
            border-radius: 3px;
            svg {
                height: 20px;
                width: 20px;
            }

            background-color: transparent;
            border: none;
            margin-right: 5px;
        }
    }
}
</style>
