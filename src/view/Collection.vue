<template>
    <div>Collection</div>
</template>

<script>
import axios from "axios";
export default {
    name: "CollectionPage",
    data() {
        return {
            collectionName: "",
            collection: [],
        };
    },
    methods: {
        async fetchCollectionData(id) {
            const result = await axios.get(
                `http://localhost:3000/collections/${id}`
            );
            console.warn(result.data);
            this.collection = result.data;
        },
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                this.collectionName = this.$route.params.collectionName;
                this.fetchCollectionData();
            },
        },
    },
};
</script>

<style lang="scss" scoped></style>
