<template>
    <!--begin::Timeline item-->
    <div class="timeline-item">
        <!--begin::Timeline line-->
        <div class="timeline-line w-40px"></div>
        <!--end::Timeline line-->

        <!--begin::Timeline icon-->
        <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
            <div class="symbol-label bg-light">
                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                    <inline-svg
                        src="/media/icons/duotune/communication/com009.svg"
                    />
                </span>
            </div>
        </div>
        <!--end::Timeline icon-->
        <!--begin::Timeline content-->
        <div class="timeline-content mb-10 mt-n1">
            <!--begin::Timeline heading-->
            <div class="pe-3 mb-5">
                <!--begin::Title-->
                <div class="fs-5 fw-bold mb-2">
                    Attaques qui nécessitent une investigation humaine :
                </div>
                <!--end::Title-->

                <!--begin::Description-->
                <div class="d-flex align-items-center mt-1 fs-6">
                    <!--begin::Info-->
                    <div class="text-muted me-2 fs-7">
                        Dernière alerte à 5:23 PM
                    </div>
                    <!--end::Info-->
                </div>
                <!--end::Description-->
            </div>
            <!--end::Timeline heading-->

            <!--begin::Timeline details-->
            <div class="overflow-auto pb-5">
                <!--begin::Record-->
                <div
                    class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5"
                >
                    <!--begin::Title-->
                    <a
                        href="#"
                        class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px"
                        >DHCP Spoofing</a
                    >
                    <!--end::Title-->

                    <!--begin::Label-->
                    <div class="min-w-175px pe-2">
                        <span class="badge badge-light text-muted"
                            >Vulnérabilité réseau</span
                        >
                    </div>
                    <!--end::Label-->

                    <!--begin::Users-->
                    <div
                        class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"
                    >
                        <!--begin::User-->
                        <div class="symbol symbol-circle symbol-40px">
                            <img src="/media/avatars/server.png" alt="img" />
                        </div>
                        <!--end::User-->
                    </div>
                    <!--end::Users-->

                    <!--begin::Action-->
                    <a
                        href="#"
                        class="btn btn-sm btn-light btn-active-light-primary"
                        >Détails</a
                    >
                    <!--end::Action-->
                </div>
                <!--end::Record-->
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
    name: "item-1",
    components: {},
});
</script>
