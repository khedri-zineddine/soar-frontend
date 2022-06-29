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
                    <div class="mw-lg-600px mx-auto">
                        <!--begin::Heading-->
                        <div class="mb-13 text-center">
                            <!--begin::Title-->
                            <h1 class="mb-3">Share & Earn</h1>
                            <!--end::Title-->

                            <!--begin::Description-->
                            <div class="text-gray-400 fw-bold fs-5">
                                If you need more info, please check
                                <a href="#" class="link-primary fw-bolder"
                                    >Author Commision</a
                                >.
                            </div>
                            <!--end::Description-->
                        </div>
                        <!--end::Heading-->

                        <!--begin::Input group-->
                        <div class="mb-10">
                            <!--begin::Title-->
                            <h4 class="fs-5 fw-bold text-gray-800">
                                Share my referral link with friends
                            </h4>
                            <!--end::Title-->

                            <!--begin::Title-->
                            <div class="d-flex">
                                <input
                                    ref="inputRef"
                                    id="kt_share_earn_link_input"
                                    type="text"
                                    class="form-control form-control-solid me-3 flex-grow-1"
                                    name="search"
                                    value="https://keenthemes.com/?ref=skitechnology"
                                />

                                <button
                                    ref="copyButtonRef"
                                    id="kt_share_earn_link_copy_button"
                                    class="btn btn-light fw-bolder flex-shrink-0"
                                    data-clipboard-target="#kt_share_earn_link_input"
                                >
                                    Copy Link
                                </button>
                            </div>
                            <!--end::Title-->
                        </div>
                        <!--end::Input group-->
                        <!--end::Actions-->

                        <!--begin::Input group-->
                        <div class="d-flex align-items-center mt-10">
                            <!--begin::Label-->
                            <div class="flex-grow-1">
                                <span class="fs-6 fw-bold text-gray-800 d-block"
                                    >Adding Users by Team Members</span
                                >

                                <span class="fs-7 fw-bold text-gray-400"
                                    >If you need more info, please check budget
                                    planning</span
                                >
                            </div>
                            <!--end::Label-->
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
    name: "event-modal",
    components: {},
    props: {
        show: { type: Boolean, default: false },
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
