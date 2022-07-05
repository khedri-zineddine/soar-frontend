<template>
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
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { Actions } from "@/store/enums/EventEnums";
import { useStore } from "vuex";
import EventItem from "./EventItem.vue";
export default defineComponent({
    name: "HSRPAttack",
    components: {
        EventItem,
    },
    setup() {
        const store = useStore();
        const itemKey = "hsrp_attack";
        const items = computed(() => {
            return store.state.EventModule.eventData[itemKey] || [];
        });
        onMounted(() => {
            store.dispatch(Actions.GET_ATTACK_EVENTS, itemKey);
        });
        return {
            items,
        };
    },
});
</script>
