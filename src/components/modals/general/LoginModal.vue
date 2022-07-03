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
        <div class="modal-dialog modal-dialog-centered mw-600px">
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
                    <div class="mw-lg-600px mx-auto">
                        <!--begin::Heading-->
                        <div class="mb-13 text-center">
                            <!--begin::Title-->
                            <h1 class="mb-3">
                                Anomalie d'authentification au service SSH
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
                            <div class="mt-5">
                                <a
                                    href="#"
                                    style="font-size: 16px"
                                    class="link-primary fw-bolder"
                                >
                                    Résultat de renseignement</a
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Utilisateur</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.username }}</span
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Adresse IP</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.ip }}</span
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Ville</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.city }}</span
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Région</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.region }}</span
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Pays</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.country }}</span
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Fuseau horaire</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.timezone }}</span
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Location</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.loc }}</span
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Organisation</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.org }}</span
                                >
                            </div>
                            <div
                                class="d-flex flex-grow-1 mt-5"
                                style="gap: 10px"
                            >
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Code postale</span
                                >

                                <span
                                    class="fs-7 fw-bold text-gray-400"
                                    style="word-break: break-all"
                                    >{{ data.details.result.postal }}</span
                                >
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
    name: "login-modal",
    components: {},
    props: {
        show: { type: Boolean, default: false },
        data: {} as any,
    },
    computed: {
        modalStyle() {
            return {
                display: this.show ? "block" : "none",
            };
        },
    },
    updated: function () {
        console.log("component data login");
        console.log(this.data);
    },
    methods: {
        onClick: function (event) {
            this.$emit("clicked", false);
        },
    },
});
</script>
