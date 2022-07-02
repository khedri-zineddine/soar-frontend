<template>
    <div
        class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
    >
        <!--begin::Title-->
        <a
            href="#"
            class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
            >{{ title }}</a
        >
        <!--end::Title-->

        <!--begin::Time-->
        <div class="min-w-175px pe-2">
            <span class="badge badge-light text-muted">{{
                new Date(time).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            }}</span>
        </div>
        <!--end::Time-->
        <!--begin::Label-->
        <div class="min-w-175px pe-2">
            <span class="badge badge-light text-muted"
                >Vulnérabilité {{ typeVulnerability }}</span
            >
        </div>
        <!--end::Label-->

        <!--begin::Users-->
        <div
            class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
        >
            <!--begin::User-->
            <div class="symbol symbol-circle symbol-40px">
                <img :src="'media/avatars/' + img" alt="avatar" />
            </div>
            <!--end::User-->
        </div>
        <!--end::Users-->

        <!--begin::Progress-->
        <div class="min-w-125px pe-2">
            <span v-if="isNewEvent()" class="badge badge-light-danger"
                >New</span
            >
        </div>
        <div class="min-w-125px pe-2">
            <span :class="'badge badge-light-' + getClass()">{{ status }}</span>
        </div>
        <!--end::Progress-->

        <!--begin::Action-->
        <a
            href="#"
            @click="onShowDetails"
            class="btn btn-sm btn-light btn-active-light-primary"
            >Détails</a
        >
        <!--end::Action-->
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "event-item",
    props: {
        status: String,
        title: String,
        img: String,
        typeVulnerability: String,
        time: String,
        onDetail: Function,
    },
    setup() {
        onMounted(() => {
            console.log("component mounted");
        });
    },
    methods: {
        getClass() {
            return this.status === "Terminé" ? "success" : "primary";
        },
        isNewEvent() {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() - 1);
            /*console.log(
                (new Date(this.time).getTime() - tomorrow.getTime()) /
                    (3600000 * 24)
            );*/
            return (
                (new Date(this.time).getTime() - tomorrow.getTime()) /
                    (3600000 * 24) >=
                0
            );
        },
        onShowDetails: function (event) {
            if (this.onDetail) this.onDetail(event);
        },
    },
});
</script>
