<template>
    <div class="timeline-item">
        <div class="timeline-line w-40px"></div>
        <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
            <div class="symbol-label bg-light">
                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                    <inline-svg
                        src="/media/icons/duotune/communication/com004.svg"
                    />
                </span>
            </div>
        </div>
        <div class="timeline-content mb-10 mt-n1">
            <div class="pe-3 mb-5">
                <div class="fs-5 fw-bold mb-2">
                    Il y a {{ items.length }} nouvelles alertes de sécurité pour
                    vous au sein de votre infrastructure :
                </div>
            </div>
            <div class="overflow-auto pb-5">
                <EventItem
                    v-for="(item, idx) in items"
                    :key="idx"
                    :title="item.title"
                    :status="item.status"
                    :time="item.time"
                    :typeVulnerability="item.typeVulnerability"
                    :img="item.img"
                    type="db"
                    :hideDetail="true"
                    :index="idx"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import EventItem from "@/views/repports-attacks/EventItem.vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "item-1",
    components: {
        EventItem,
    },
    setup() {
        const store = useStore();
        const items = computed(() => {
            return store.state.EventModule.notifications;
        });
        return {
            items,
        };
    },
});
</script>
