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
        <div class="modal-dialog modal-dialog-centered mw-1000px">
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
                    <div class="mw-lg-1000px mx-auto">
                        <!--begin::Heading-->
                        <div class="mb-13 text-center">
                            <!--begin::Title-->
                            <h1 class="mb-3">Email de phishing est détecté</h1>
                            <!--end::Title-->
                        </div>
                        <div
                            v-if="data"
                            v-for="(eml, idx) in data.details"
                            :key="idx"
                        >
                            <div>
                                <a
                                    href="#"
                                    style="font-size: 16px"
                                    class="link-primary fw-bolder"
                                    >Contenu de l'email</a
                                >
                                <p class="mt-5" v-html="eml.html"></p>
                            </div>
                            <div
                                class="d-flex"
                                style="
                                    justify-content: space-between;
                                    gap: 30px;
                                "
                            >
                                <div style="width: 50%">
                                    <a
                                        href="#"
                                        style="font-size: 16px"
                                        class="link-primary fw-bolder"
                                        >pièces jointes</a
                                    >
                                    <div
                                        class="d-flex flex-grow-1"
                                        style="
                                            gap: 10px;
                                            align-items: center;
                                            margin-top: 5px;
                                        "
                                    >
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            style="width: 85%"
                                            >Chemin</span
                                        >
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            style="width: 7%"
                                            >Malicieuse</span
                                        >
                                    </div>
                                    <div
                                        class="mt-5"
                                        v-for="(item, idx) in eml.attachments"
                                        :key="idx"
                                    >
                                        <div
                                            class="d-flex flex-grow-1"
                                            style="
                                                gap: 10px;
                                                align-items: center;
                                            "
                                        >
                                            <span
                                                class="fs-7 fw-bold text-gray-400"
                                                style="
                                                    width: 85%;
                                                    word-break: break-all;
                                                "
                                                >{{
                                                    item.attachement_path
                                                }}</span
                                            >
                                            <span
                                                class="fs-7 fw-bold text-gray-400"
                                                style="width: 7%"
                                                v-if="item.malicious"
                                                >Oui</span
                                            >
                                            <span
                                                class="fs-7 fw-bold text-gray-400"
                                                style="width: 7%"
                                                v-else
                                                >Non</span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div style="width: 50%">
                                    <a
                                        href="#"
                                        style="font-size: 16px"
                                        class="link-primary fw-bolder"
                                        >Liens</a
                                    >
                                    <div
                                        class="d-flex flex-grow-1"
                                        style="gap: 10px; margin-top: 5px"
                                    >
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            style="width: 85%"
                                            >Lien</span
                                        >
                                        <span
                                            class="fs-6 fw-bold text-gray-800 d-block"
                                            style="width: 7%"
                                            >Malicieuse</span
                                        >
                                    </div>
                                    <div
                                        class="mt-5"
                                        v-for="(item, idx) in eml.scan_result
                                            .urls"
                                        :key="idx"
                                    >
                                        <div
                                            class="d-flex flex-grow-1"
                                            style="gap: 10px"
                                        >
                                            <span
                                                class="fs-7 fw-bold text-gray-400"
                                                style="
                                                    word-break: break-all;
                                                    width: 85%;
                                                "
                                                >{{ item.link }}</span
                                            >
                                            <span
                                                class="fs-7 fw-bold text-gray-400"
                                                style="width: 7%"
                                                v-if="item.malicious"
                                                >Oui</span
                                            >
                                            <span
                                                style="width: 7%"
                                                class="fs-7 fw-bold text-gray-400"
                                                v-else
                                                >Non</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end::Input group-->
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
    name: "email-modal",
    components: {},
    props: {
        show: { type: Boolean, default: false },
        data: {} as any,
    },
    updated: function () {
        console.log("component data");
        console.log(this.data.details);
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
