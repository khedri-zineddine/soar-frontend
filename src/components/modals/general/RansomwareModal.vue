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
        <!--begin::Modal dialog-->
        <div class="modal-dialog modal-dialog-centered mw-800px">
            <!--begin::Modal content-->
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
                    <!--end::Close-->
                </div>
                <!--begin::Modal header-->

                <!--begin::Modal body-->
                <div class="modal-body scroll-y pt-0 pb-15">
                    <!--begin::Wrapper-->
                    <div class="mw-lg-800px mx-auto">
                        <!--begin::Heading-->
                        <div class="mb-13 text-center">
                            <!--begin::Title-->
                            <h1 class="mb-3">Attaque de ransomware détectée</h1>
                        </div>
                        <div class="mb-5" v-if="data">
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
                            <div class="mt-5">
                                <a
                                    href="#"
                                    style="font-size: 16px"
                                    class="link-primary fw-bolder"
                                >
                                    Fichiers ajouter et supprimer</a
                                >
                                <div
                                    class="d-flex"
                                    style="gap: 20px; margin-top: 10px"
                                >
                                    <div style="width: 50%">
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            >{{
                                                data.details.asyschecks.length
                                            }}
                                            Fichiers ajouter</span
                                        >
                                        <template
                                            v-for="(item, idx) in data.details
                                                .asyschecks"
                                        >
                                            <span
                                                :key="idx"
                                                class="fs-7 fw-bold text-gray-400 d-block"
                                                style="
                                                    word-break: break-all;
                                                    margin-top: 5px;
                                                "
                                                v-if="idx <= 10"
                                                >{{ item.path }}</span
                                            >
                                        </template>
                                    </div>
                                    <div style="width: 50%">
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            >{{
                                                data.details.dsyschecks.length
                                            }}
                                            Fichiers supprimer</span
                                        >
                                        <template
                                            v-for="(item, idx) in data.details
                                                .dsyschecks"
                                        >
                                            <span
                                                :key="idx"
                                                class="fs-7 fw-bold text-gray-400 d-block"
                                                style="
                                                    word-break: break-all;
                                                    margin-top: 5px;
                                                "
                                                v-if="idx <= 10"
                                                >{{ item.path }}</span
                                            >
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>
    <!--end::Modal - Share & Earn-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ransomware-modal",
    components: {},
    props: {
        show: { type: Boolean, default: false },
        data: {} as any,
    },
    updated: function () {
        console.log("ransomware data is displayed ", this.data);
    },
    computed: {
        modalStyle() {
            return {
                display: this.show ? "block" : "none",
            };
        },
    },

    methods: {
        onClick: function (event) {
            this.$emit("clicked", false);
        },
    },
});
</script>
