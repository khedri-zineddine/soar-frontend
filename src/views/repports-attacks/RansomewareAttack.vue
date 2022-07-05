<template>
    <RansomwareModal
        v-if="showDetail"
        :show="showDetail"
        @clicked="onEventModalClicked"
        :data="items[detailId]"
    />
    <EventItem
        v-for="(item, idx) in items"
        :key="idx"
        :title="item.title"
        :status="item.status"
        :time="item.time"
        :typeVulnerability="item.typeVulnerability"
        :img="item.img"
        :onDetail="onShowDetail"
        type="db"
        :index="idx"
    />
</template>
<script lang="ts">
import { defineComponent, onMounted, computed, ref } from "vue";
import { Actions } from "@/store/enums/EventEnums";
import RansomwareModal from "@/components/modals/general/RansomwareModal.vue";
import { useStore } from "vuex";
import EventItem from "./EventItem.vue";
export default defineComponent({
    name: "RansomewareAttack",
    components: {
        EventItem,
        RansomwareModal,
    },
    setup() {
        const store = useStore();
        const showDetail = ref(null);
        const detailId = ref(null);
        const itemKey = "ransomware_col";
        const items = computed(() => {
            return store.state.EventModule.eventData[itemKey] || [];
        });
        function onShowDetail(type, index, eventType) {
            showDetail.value = true;
            detailId.value = index;
        }
        function onEventModalClicked() {
            showDetail.value = false;
        }
        onMounted(() => {
            store.dispatch(Actions.GET_ATTACK_EVENTS, itemKey);
        });
        return {
            items,
            onShowDetail,
            onEventModalClicked,
            showDetail,
            detailId,
        };
    },
});
</script>
