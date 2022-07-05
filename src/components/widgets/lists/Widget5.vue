<template>
    <div class="card" :class="widgetClasses">
        <div class="card-header align-items-center border-0 mt-4">
            <h3 class="card-title align-items-start flex-column">
                <span class="fw-bolder mb-2 text-dark">Activités</span>
                <span class="text-muted fw-bold fs-7"
                    >derniers incidents de sécurité</span
                >
            </h3>
        </div>
        <div class="card-body pt-5">
            <div class="timeline-label">
                <div
                    class="timeline-item"
                    v-for="(event, index) in lastEvents"
                    :key="index"
                >
                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        {{ event.time }}
                    </div>
                    <div class="timeline-badge">
                        <i
                            :class="`fa fa-genderless text-${event.dotColor} fs-1`"
                        ></i>
                    </div>
                    <div class="timeline-content d-flex flex-column">
                        <span class="fw-bolder text-gray-800 ps-4">
                            {{ event.title }}
                        </span>
                        <span class="text-gray-800 ps-4">{{ event.date }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { Actions } from "@/store/enums/AnalyticsEnums";
import { AnalyticsInfo } from "@/store/modules/AnalyticsModule";
import { useStore } from "vuex";

export default defineComponent({
    name: "kt-widget-5",
    props: {
        widgetClasses: String,
    },
    setup() {
        const store = useStore();

        const lastEvents = computed<AnalyticsInfo["lastEvents"]>(() => {
            return store.state.AnalyticsModule.lastEvents;
        });
        const eventsLoaded = computed<AnalyticsInfo["eventsLoaded"]>(() => {
            return store.state.AnalyticsModule.eventsLoaded;
        });
        onMounted(() => {
            if (!eventsLoaded.value) store.dispatch(Actions.GET_LAST_EVENTS);
        });

        return {
            lastEvents,
            eventsLoaded,
        };
    },
});
</script>
