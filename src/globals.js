import { reactive } from "@vue/reactivity";

export const globals = reactive({
    categories: [
        { name: "BEST SELLER", collectionName: "best-seller", id: 1 },
        {
            name: "BASIC LINE",
            collectionName: "basic-collection",
            id: 3,
        },
        {
            name: "TẤT CẢ SẢN PHẨM",
            collectionName: "all-products",
            id: 2,
        },
        { name: "ÁO THUN", collectionName: "tshirt", id: 1 },
        { name: "ÁO SƠMI", collectionName: "shirt", id: 4 },
        { name: "ÁO KHOÁC", collectionName: "outerwear", id: 7 },
        { name: "QUẦN", collectionName: "pants", id: 5 },
        { name: "PHỤ KIỆN", collectionName: "accessories", id: 6 },
        {
            name: "OUTLET SALE",
            collectionName: "sale-end-season",
            id: 8,
        },
    ],
    userInfor: localStorage.getItem("user-info"),
    toastStatus_SUCCESS: "Success",
    toastStatus_ERROR: "Error",
    toastStatus_WARNING: "Warning",
});
