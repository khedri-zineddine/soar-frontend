<template>
    <!--begin::Timeline item-->
    <div class="timeline-item">
        <!--begin::Timeline line-->
        <div class="timeline-line w-40px"></div>
        <!--end::Timeline line-->

        <!--begin::Timeline icon-->
        <div class="timeline-icon symbol symbol-circle symbol-40px">
            <div class="symbol-label bg-light">
                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                    <inline-svg src="media/icons/duotune/coding/cod008.svg" />
                </span>
            </div>
        </div>
        <!--end::Timeline icon-->

        <!--begin::Timeline content-->
        <div class="timeline-content mb-10 mt-n1">
            <!--begin::Timeline heading-->
            <div class="mb-5 pe-3">
                <!--begin::Title-->
                <a
                    href="#"
                    class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                    >3 Dernier rapport d'attaques :</a
                >
                <!--end::Title-->

                <!--begin::Description-->
                <div class="d-flex align-items-center mt-1 fs-6">
                    <!--begin::Info-->
                    <div class="text-muted me-2 fs-7">
                        Dernier rapport à 5:23 PM
                    </div>
                    <!--end::Info-->
                </div>
                <!--end::Description-->
            </div>
            <!--end::Timeline heading-->

            <!--begin::Timeline details-->
            <div class="overflow-auto pb-5">
                <div
                    class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5"
                >
                    <!--begin::Item-->
                    <div class="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <!--begin::Icon-->
                        <img
                            alt=""
                            class="w-30px me-3"
                            src="media/svg/files/pdf.svg"
                        />
                        <!--end::Icon-->

                        <!--begin::Info-->
                        <div class="ms-1 fw-bold">
                            <!--begin::Desc-->
                            <a
                                href="#"
                                class="fs-6 text-hover-primary fw-bolder"
                                >STP-DOS Attack</a
                            >
                            <!--end::Desc-->

                            <!--begin::Number-->
                            <div class="text-gray-400">1.9mb</div>
                            <!--end::Number-->
                        </div>
                        <!--begin::Info-->
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <!--begin::Icon-->
                        <img
                            alt=""
                            class="w-30px me-3"
                            src="media/svg/files/pdf.svg"
                        />
                        <!--end::Icon-->

                        <!--begin::Info-->
                        <div class="ms-1 fw-bold">
                            <!--begin::Desc-->
                            <a
                                href="#"
                                class="fs-6 text-hover-primary fw-bolder"
                                >HSRP Active Router Attack</a
                            >
                            <!--end::Desc-->

                            <!--begin::Number-->
                            <div class="text-gray-400">18kb</div>
                            <!--end::Number-->
                        </div>
                        <!--end::Info-->
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="d-flex flex-aligns-center">
                        <!--begin::Icon-->
                        <img
                            alt=""
                            class="w-30px me-3"
                            src="media/svg/files/pdf.svg"
                        />
                        <!--end::Icon-->

                        <!--begin::Info-->
                        <div class="ms-1 fw-bold">
                            <!--begin::Desc-->
                            <a
                                href="#"
                                class="fs-6 text-hover-primary fw-bolder"
                                >DHCP Spoofing</a
                            >
                            <!--end::Desc-->

                            <!--begin::Number-->
                            <div class="text-gray-400">20mb</div>
                            <!--end::Number-->
                        </div>
                        <!--end::Icon-->
                    </div>
                    <!--end::Item-->
                </div>
            </div>
            <!--end::Timeline details-->
        </div>
        <!--end::Timeline content-->
    </div>
    <!--end::Timeline item-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "item-3",
    components: {},
});
</script>
