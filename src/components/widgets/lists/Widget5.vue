<template>
    <!--begin::List Widget 5-->
    <div class="card" :class="widgetClasses">
        <!--begin::Header-->
        <div class="card-header align-items-center border-0 mt-4">
            <h3 class="card-title align-items-start flex-column">
                <span class="fw-bolder mb-2 text-dark">Activités</span>
                <span class="text-muted fw-bold fs-7"
                    >15 incidents de sécurité ce jour</span
                >
            </h3>

            <div class="card-toolbar">
                <!--begin::Menu-->
                <button
                    type="button"
                    class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    data-kt-menu-flip="top-end"
                >
                    <span class="svg-icon svg-icon-2">
                        <inline-svg
                            src="media/icons/duotune/general/gen024.svg"
                        />
                    </span>
                </button>
                <Dropdown1></Dropdown1>
                <!--end::Menu-->
            </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body pt-5">
            <!--begin::Timeline-->
            <div class="timeline-label">
                <!--begin::Item-->
                <div class="timeline-item">
                    <!--begin::Label-->
                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        08:42
                    </div>
                    <!--end::Label-->

                    <!--begin::Badge-->
                    <div class="timeline-badge">
                        <i class="fa fa-genderless text-success fs-1"></i>
                    </div>
                    <!--end::Badge-->

                    <!--begin::Text-->
                    <div class="timeline-content d-flex">
                        <span class="fw-bolder text-gray-800 ps-3"
                            >Réponse à l'incident HSRP Attack</span
                        >
                    </div>
                    <!--end::Text-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="timeline-item">
                    <!--begin::Label-->
                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        10:00
                    </div>
                    <!--end::Label-->

                    <!--begin::Badge-->
                    <div class="timeline-badge">
                        <i class="fa fa-genderless text-danger fs-1"></i>
                    </div>
                    <!--end::Badge-->

                    <!--begin::Content-->
                    <div class="timeline-content d-flex">
                        <span class="fw-bolder text-gray-800 ps-3"
                            >HSRP Active Router Attack</span
                        >
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="timeline-item">
                    <!--begin::Label-->
                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        14:37
                    </div>
                    <!--end::Label-->

                    <!--begin::Badge-->
                    <div class="timeline-badge">
                        <i class="fa fa-genderless text-success fs-1"></i>
                    </div>
                    <!--end::Badge-->

                    <!--begin::Text-->
                    <div class="timeline-content d-flex">
                        <span class="fw-bolder text-gray-800 ps-3"
                            >Réponse à l'incident STP DOS</span
                        >
                    </div>
                    <!--end::Text-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="timeline-item">
                    <!--begin::Label-->
                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        16:50
                    </div>
                    <!--end::Label-->

                    <!--begin::Badge-->
                    <div class="timeline-badge">
                        <i class="fa fa-genderless text-danger fs-1"></i>
                    </div>
                    <!--end::Badge-->

                    <!--begin::Content-->
                    <div class="timeline-content d-flex">
                        <span class="fw-bolder text-gray-800 ps-3"
                            >Spanning-tree DOS Attack</span
                        >
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Item-->
                <!--begin::Item-->
                <div class="timeline-item">
                    <!--begin::Label-->
                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        17:23
                    </div>
                    <!--end::Label-->

                    <!--begin::Badge-->
                    <div class="timeline-badge">
                        <i class="fa fa-genderless text-warning fs-1"></i>
                    </div>
                    <!--end::Badge-->

                    <!--begin::Content-->
                    <div class="timeline-content d-flex">
                        <span class="fw-bolder text-gray-800 ps-3"
                            >DHCP Spoofing
                        </span>
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Item-->
            </div>
            <!--end::Timeline-->
        </div>
        <!--end: Card Body-->
    </div>
    <!--end: List Widget 5-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
    name: "kt-widget-5",
    props: {
        widgetClasses: String,
    },
    components: {
        Dropdown1,
    },
});
</script>
