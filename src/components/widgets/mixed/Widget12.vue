<template>
    <!--begin::Mixed Widget 12-->
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
                    >Evolution des alertes de sécurité</a
                >
                <!--end::Title-->

                <!--begin::Chart-->
                <apexchart
                    class="mixed-widget-13-chart"
                    v-if="alertsLoaded"
                    :options="chartOptions"
                    :series="series"
                    :height="chartHeight"
                    type="area"
                ></apexchart>
                <!--end::Chart-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Stats-->
            <div class="pt-5">
                <!--begin::Number-->
                <template v-if="alertsLoaded">
                    <span class="text-dark fw-bolder fs-2x me-2 lh-0"
                        >{{ countAlerts }} Alertes</span
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
        <!--end::Body-->
    </div>
    <!--end::Mixed Widget 12-->
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/AnalyticsEnums";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import { AnalyticsInfo } from "@/store/modules/AnalyticsModule";

export default defineComponent({
    name: "widget-12",
    props: {
        widgetClasses: String,
        widgetColor: String,
        chartHeight: String,
    },

    setup(props) {
        const store = useStore();
        const labelColor = getCSSVariableValue("--bs-" + "gray-800");
        const strokeColor = getCSSVariableValue("--bs-" + "gray-300");

        const alertsLoaded = computed<AnalyticsInfo["alertsLoaded"]>(() => {
            return store.state.AnalyticsModule.alertsLoaded;
        });
        const alertsState = computed<AnalyticsInfo["alertsState"]>(() => {
            return store.state.AnalyticsModule.alertsState;
        });

        const countAlerts = computed<AnalyticsInfo["alertsState"]["count"]>(
            () => {
                return alertsState.value.count;
            }
        );

        const chartOptions = computed(() => {
            return {
                grid: {
                    show: false,
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    },
                },
                chart: {
                    fontFamily: "inherit",
                    type: "area",
                    height: props.chartHeight,
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                    sparkline: {
                        enabled: true,
                    },
                },
                plotOptions: {},
                legend: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        opacityFrom: 0.4,
                        opacityTo: 0,
                        stops: [20, 120, 120, 120],
                    },
                },
                stroke: {
                    curve: "smooth",
                    show: true,
                    width: 3,
                    colors: ["#FFFFFF"],
                },
                xaxis: {
                    categories: alertsState.value.labels,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: "12px",
                        },
                    },
                    crosshairs: {
                        show: false,
                        position: "front",
                        stroke: {
                            color: strokeColor,
                            width: 1,
                            dashArray: 3,
                        },
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                yaxis: {
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: "12px",
                        },
                    },
                },
                states: {
                    normal: {
                        filter: {
                            type: "none",
                            value: 0,
                        },
                    },
                    hover: {
                        filter: {
                            type: "none",
                            value: 0,
                        },
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: "none",
                            value: 0,
                        },
                    },
                },
                tooltip: {
                    style: {
                        fontSize: "12px",
                    },
                    y: {
                        formatter: function (val) {
                            return val + " incidents";
                        },
                    },
                },
                colors: ["#ffffff"],
                markers: {
                    colors: [labelColor],
                    strokeColor: [strokeColor],
                    strokeWidth: 3,
                },
            };
        });

        const series = computed(() => {
            return [
                {
                    name: "Alertes",
                    data: alertsState.value.values,
                },
            ];
        });

        onMounted(() => {
            if (!alertsLoaded.value) store.dispatch(Actions.GET_ALERTS_STATE);
        });

        return {
            alertsLoaded,
            countAlerts,
            series,
            chartOptions,
        };
    },
});
</script>
