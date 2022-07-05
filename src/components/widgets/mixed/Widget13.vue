<template>
    <!--begin::Mixed Widget 13-->
    <div
        :class="widgetClasses"
        class="card"
        :style="`background-color: ${widgetColor}`"
    >
        <!--begin::Body-->
        <div class="card-body d-flex flex-column">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1">
                <!--begin::Title-->
                <a href="#" class="text-dark text-hover-primary fw-bolder fs-3"
                    >Evolution des Réponses aux incidents</a
                >
                <!--end::Title-->

                <!--begin::Chart-->
                <apexchart
                    class="mixed-widget-14-chart"
                    v-if="responseLoaded"
                    :options="chartOptions"
                    :series="series"
                    :height="chartHeight"
                    type="bar"
                ></apexchart>
                <!--end::Chart-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Stats-->
            <div class="pt-5">
                <template v-if="responseLoaded">
                    <span class="text-dark fw-bolder fs-2x me-2 lh-0"
                        >{{ countResponses }} Réponses</span
                    >
                    <!--end::Number-->

                    <!--begin::Text-->
                    <span class="text-dark fw-bolder fs-6 lh-0"
                        >- dans les 7 derniers jours</span
                    >
                </template>
                <template v-else>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <span class="text-dark fw-bolder fs-2x me-2 lh-0"
                        >Loading alerts...</span
                    >
                </template>
                <!--end::Text-->
            </div>
            <!--end::Stats-->
        </div>
    </div>
    <!--end::Mixed Widget 13-->
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/AnalyticsEnums";
import { AnalyticsInfo } from "@/store/modules/AnalyticsModule";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
    name: "widget-13",
    props: {
        widgetClasses: String,
        widgetColor: String,
        chartHeight: String,
    },
    setup(props) {
        const store = useStore();
        const labelColor = getCSSVariableValue("--bs-" + "gray-800");

        const responseLoaded = computed<AnalyticsInfo["responseLoaded"]>(() => {
            return store.state.AnalyticsModule.responseLoaded;
        });
        const responsesState = computed<AnalyticsInfo["responsesState"]>(() => {
            return store.state.AnalyticsModule.responsesState;
        });

        const countResponses = computed<
            AnalyticsInfo["responsesState"]["count"]
        >(() => {
            return responsesState.value.count;
        });

        const chartOptions = computed(() => {
            return {
                chart: {
                    fontFamily: "inherit",
                    height: props.chartHeight,
                    type: "bar",
                    toolbar: {
                        show: false,
                    },
                },
                grid: {
                    show: false,
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    },
                },
                colors: ["#ffffff"],
                plotOptions: {
                    bar: {
                        borderRadius: 2.5,
                        dataLabels: {
                            position: "top", // top, center, bottom
                        },
                        columnWidth: "20%",
                    },
                },
                dataLabels: {
                    enabled: false,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: "12px",
                        colors: ["#304758"],
                    },
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    categories: responsesState.value.labels,
                    position: "top",
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    crosshairs: {
                        show: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                yaxis: {
                    show: false,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                        background: labelColor,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + " Réponses";
                        },
                    },
                },
            };
        });

        const series = computed(() => {
            return [
                {
                    name: "Réponses",
                    data: responsesState.value.values,
                },
            ];
        });

        onMounted(() => {
            if (!responseLoaded.value)
                store.dispatch(Actions.GET_RESPONSES_STATE);
        });

        return {
            responseLoaded,
            countResponses,
            series,
            chartOptions,
        };
    },
});
</script>
