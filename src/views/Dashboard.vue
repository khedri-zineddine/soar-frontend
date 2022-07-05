<template>
    <!--begin::Row-->
    <div>
        <!--begin::Col-->
        <div>
            <MixedWidget12
                widget-classes="card-xl-stretch mb-xl-10"
                widget-color="#F7D9E3"
                chart-height="100"
            />
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div>
            <MixedWidget13
                widget-classes="card-xxl-stretch mb-xl-10"
                widget-color="#CBF0F4"
                chart-height="100"
            />
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->

    <!--begin::Row-->
    <div class="row gy-5 g-xl-10">
        <!--begin::Col-->
        <div class="col-xxl-12">
            <ListsWidget5 widget-classes="card-xl-stretch mb-xl-10" />
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import MixedWidget12 from "@/components/widgets/mixed/Widget12.vue";
import MixedWidget13 from "@/components/widgets/mixed/Widget13.vue";
import MixedWidget14 from "@/components/widgets/mixed/Widget14.vue";
import ListsWidget5 from "@/components/widgets/lists/Widget5.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
    name: "main-dashboard",
    components: {
        MixedWidget12,
        MixedWidget13,
        MixedWidget14,
        ListsWidget5,
    },
    setup() {
        onMounted(() => {
            setCurrentPageTitle("Dashboard");
        });
    },
});
</script>
