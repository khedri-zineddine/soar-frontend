<template>
    <!--begin::Toolbar wrapper-->
    <div class="d-flex align-items-stretch flex-shrink-0">
        <div class="topbar d-flex align-items-stretch flex-shrink-0">
            <!--begin::Search-->
            <!--end::Search-->

            <!--begin::Activities-->
            <div class="d-flex align-items-center ms-1 ms-lg-3">
                <!--begin::drawer toggle-->
                <div
                    class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-40px h-40px position-relative"
                    id="kt_activities_toggle"
                >
                    <span class="svg-icon svg-icon-1">
                        <inline-svg
                            src="/media/icons/duotune/general/gen007.svg"
                        />
                    </span>
                    <template v-if="notificationCount">
                        <span
                            class="bullet bullet-dot bg-danger h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
                        ></span>
                        <span
                            class="badge badge-sm badge-circle badge-danger custom-bg-css"
                            >{{ notificationCount }}</span
                        >
                    </template>
                </div>
                <!--end::drawer toggle-->
            </div>
            <!--end::Activities-->

            <button
                class="btn btn-icon btn-active-icon-primary w-40px h-40px d-xxl-none ms-2 me-n2"
                id="kt_sidebar_toggler"
            >
                <span class="svg-icon svg-icon-2x">
                    <inline-svg src="/media/icons/duotune/coding/cod001.svg" />
                </span>
            </button>
        </div>
    </div>
    <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "layout-topbar",
    setup() {
        const store = useStore();
        const notificationCount = computed(() => {
            return store.state.EventModule.notifications.length;
        });
        return {
            notificationCount,
        };
    },
});
</script>
<style lang="scss">
.custom-bg-css {
    position: absolute !important;
    top: -8px !important;
    right: -10px;
}
</style>
