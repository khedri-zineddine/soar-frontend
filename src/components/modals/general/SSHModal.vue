<template>
    <!--begin::Modal - Share & Earn-->
    <div
        class="modal fade"
        :class="show ? 'show' : ''"
        id="kt_modal_share_earn"
        tabindex="-1"
        aria-hidden="true"
        :style="modalStyle"
    >
        <div class="modal-dialog modal-dialog-centered mw-800px">
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header pb-0 border-0 justify-content-end">
                    <!--begin::Close-->
                    <div
                        class="btn btn-sm btn-icon btn-active-color-primary"
                        data-bs-dismiss="modal"
                        @click="onClick"
                    >
                        <span class="svg-icon svg-icon-1">
                            <inline-svg
                                src="media/icons/duotune/arrows/arr061.svg"
                            />
                        </span>
                    </div>
                </div>
                <div class="modal-body scroll-y pt-0 pb-15">
                    <!--begin::Wrapper-->
                    <div class="mw-lg-800px mx-auto">
                        <!--begin::Heading-->
                        <div class="mb-13 text-center">
                            <!--begin::Title-->
                            <h1 class="mb-3">
                                Attaque de service SSH par force brute
                            </h1>
                        </div>
                        <div class="mb-5" v-if="data">
                            <!--begin::Title-->
                            <div>
                                <a
                                    href="#"
                                    style="font-size: 16px"
                                    class="link-primary fw-bolder"
                                    >Point terminale</a
                                >
                                <div
                                    class="d-flex flex-grow-1 mt-5"
                                    style="gap: 10px"
                                >
                                    <span
                                        class="fs-6 fw-bold text-gray-800 d-block"
                                        >Adresse IP</span
                                    >

                                    <span
                                        class="fs-7 fw-bold text-gray-400"
                                        style="word-break: break-all"
                                        >{{ data.details.agent.ip }}</span
                                    >
                                </div>
                                <div
                                    class="d-flex flex-grow-1"
                                    style="gap: 10px"
                                >
                                    <span
                                        class="fs-6 fw-bold text-gray-800 d-block"
                                        >Nom du point terminale</span
                                    >

                                    <span
                                        class="fs-7 fw-bold text-gray-400"
                                        style="word-break: break-all"
                                        >{{ data.details.agent.name }}</span
                                    >
                                </div>
                            </div>
                            <div class="mt-10">
                                <a
                                    href="#"
                                    style="font-size: 16px"
                                    class="link-primary fw-bolder"
                                    >Attaquantes</a
                                >
                                <div class="mt-5">
                                    <div class="d-flex" style="gap: 20px">
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            style="width: 30%"
                                            >Nom utilisateur</span
                                        >
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            style="width: 30%"
                                            >Adresse IP</span
                                        >
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            style="width: 30%"
                                            >Port</span
                                        >
                                    </div>
                                    <div
                                        class="d-flex flex-grow-1"
                                        style="gap: 20px; margin-top: 4px"
                                        v-for="(item, idx) in data.details
                                            .uinfo"
                                        :key="idx"
                                    >
                                        <span
                                            class="fs-7 fw-bold text-gray-400"
                                            style="
                                                word-break: break-all;
                                                width: 30%;
                                            "
                                            >{{ item.dstuser }}</span
                                        >
                                        <span
                                            class="fs-7 fw-bold text-gray-400"
                                            style="
                                                word-break: break-all;
                                                width: 30%;
                                            "
                                            >{{ item.srcip }}</span
                                        >
                                        <span
                                            class="fs-7 fw-bold text-gray-400"
                                            style="
                                                word-break: break-all;
                                                width: 30%;
                                            "
                                            >{{ item.srcport }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "SSH-modal",
    components: {},
    props: {
        show: { type: Boolean, default: false },
        data: {} as any,
    },
    watch: {
        data(newdata, olddata) {
            console.log("old and new data ", newdata, olddata);
        },
    },
    computed: {
        modalStyle() {
            return {
                display: this.show ? "block" : "none",
            };
        },
    },
    updated: function () {
        console.log("component data ssh");
        console.log(this.data);
    },
    methods: {
        onClick: function (event) {
            this.$emit("clicked", false);
        },
    },
});
</script>
