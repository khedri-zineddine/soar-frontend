<template>
    <!--begin::Activities drawer-->
    <div
        id="kt_activities"
        class="bg-white"
        data-kt-drawer="true"
        data-kt-drawer-name="activities"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_activities_toggle"
        data-kt-drawer-close="#kt_activities_close"
    >
        <div class="card shadow-none">
            <!--begin::Header-->
            <div class="card-header" id="kt_activities_header">
                <h3 class="card-title fw-bolder text-dark">
                    Alertes de sécurité
                </h3>

                <div class="card-toolbar">
                    <button
                        type="button"
                        class="btn btn-sm btn-icon btn-active-light-primary me-n5"
                        id="kt_activities_close"
                    >
                        <span class="svg-icon svg-icon-1">
                            <inline-svg
                                src="/media/icons/duotune/arrows/arr061.svg"
                            />
                        </span>
                    </button>
                </div>
            </div>
            <!--end::Header-->

            <!--begin::Body-->
            <div class="card-body position-relative" id="kt_activities_body">
                <!--begin::Content-->
                <div
                    id="kt_activities_scroll"
                    class="position-relative scroll-y me-n5 pe-5"
                    data-kt-scroll="true"
                    data-kt-scroll-height="auto"
                    data-kt-scroll-wrappers="#kt_activities_body"
                    data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
                    data-kt-scroll-offset="5px"
                >
                    <!--begin::Timeline items-->
                    <div class="timeline">
                        <Item1></Item1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Item1 from "@/layout/header/partials/activity-timeline/Item1.vue";

export default defineComponent({
    name: "kt-activity-drawer",
    components: {
        Item1,
    },
});
</script>
