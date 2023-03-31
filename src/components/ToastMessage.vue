<template>
    <div id="toast" :style="{ top: `${spacing}px` }">
        <div class="toast" :style="{ color: color }">
            <div class="toast__icon">
                <font-awesome-icon
                    :icon="['fas', 'circle-check']"
                    v-if="toast.status === 'Success'"
                />
                <font-awesome-icon
                    :icon="['fas', 'circle-exclamation']"
                    v-if="toast.status === 'Warning'"
                />
                <font-awesome-icon
                    :icon="['fas', 'circle-info']"
                    v-if="toast.status === 'Info'"
                />
                <font-awesome-icon
                    :icon="['fas', 'circle-xmark']"
                    v-if="toast.status === 'Error'"
                />
            </div>
            <div class="toast__body">
                <h3 class="toast__title">{{ toast.title }}</h3>
                <p class="toast__msg">{{ toast.msg }}</p>
            </div>
            <!-- <div class="toast__close">
                <font-awesome-icon :icon="['fas', 'fa-times']" />
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "ToastMessage",
    props: {
        toast: {
            type: Object,
            default: () => {},
        },
        spacing: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            color: "",
        };
    },
    mounted() {
        if (this.toast.status == "Success") {
            this.color = "#47d864";
        } else if (this.toast.status == "Warning") {
            this.color = "#ffc021";
        } else if (this.toast.status == "Error") {
            this.color = "#ff623d";
        } else this.color = "#2f86eb";
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
#toast {
    // z-index: 9999;
    // position: absolute;
    // display: flex;
    // justify-content: right;
    // align-items: center;
    // right: 32px;
    // margin-top: 100px;
    position: fixed;
    top: 120px;
    right: 32px;
    display: flex;
    margin-top: 100px;
    justify-content: right;
    align-items: center;
    z-index: 9999;
    .toast {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 380px;
        padding: 10px 10px;
        background-color: #fff;
        border-radius: 4px;
        border-left: 6px solid;
        box-shadow: 0 5px 8px rgba(0, 0, 0, 0.8);
        animation: slideInLeft ease 0.3s, fadeOut linear 1s 2.5s forwards;

        .toast__icon {
            font-size: 20px;
            width: 15%;
        }

        .toast__body {
            color: black;
            width: 85%;
            display: flex;
            flex-direction: column;
            justify-content: left;

            .toast__title {
                color: #333;
                font-size: 16px;
                font-weight: 600;
                line-height: 1.5;
            }

            .toast__msg {
                padding-top: 5px;
                font-size: 14px;
                word-wrap: break-word;
                color: #888;
            }
        }

        // .toast__close {
        //     display: flex;
        //     justify-content: left;
        //     width: 5%;
        //     color: rgba(0, 0, 0, 0.3);

        //     &:hover {
        //         cursor: pointer;
        //     }
        // }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(calc(100% + 32px));
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeOut {
        to {
            opacity: 0;
        }
    }
}
</style>
