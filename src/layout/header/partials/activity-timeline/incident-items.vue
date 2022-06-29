<template>
    <!--begin::List Widget 5-->
    <EventModal :show="showDetail" @clicked="onEventModalClicked" />
    <div class="card" :class="widgetClasses">
        <!--begin::Header-->
        <div class="mt-7">
            <div>
                <!--begin::Timeline heading-->
                <div class="pe-3 mb-5">
                    <!--begin::Title-->
                    <div class="fs-5 fw-bold mb-2">
                        <div
                            class="timeline-icon symbol symbol-circle symbol-40px me-4"
                        >
                            <div class="symbol-label bg-light">
                                <span>
                                    <inline-svg
                                        src="media/icons/duotune/communication/com004.svg"
                                    />
                                </span>
                            </div>
                        </div>
                        Il y a 4 nouvelles alertes de sécurité pour vous au sein
                        de votre infrastructure :
                    </div>
                    <!--end::Title-->

                    <!--begin::Description-->
                    <div class="d-flex align-items-center mt-1 fs-6">
                        <!--begin::Info-->
                        <div class="text-muted me-2 fs-7">
                            Dernière alerte à 4:23 PM
                        </div>
                        <!--end::Info-->
                    </div>
                    <!--end::Description-->
                </div>
                <!--end::Timeline heading-->

                <!--begin::Timeline details-->
                <div class="overflow-auto pb-5">
                    <EventItem
                        v-for="(item, idx) in realTimeEvents"
                        :key="idx"
                        :title="item.title"
                        :status="item.status"
                        :time="item.time"
                        :typeVulnerability="item.typeVulnerability"
                        :img="item.img"
                        :onDetail="onShowDetail"
                    ></EventItem>
                    <!--end::Record-->
                </div>
                <!--end::Timeline details-->
            </div>
        </div>
        <!--end: Card Body-->
    </div>
    <!--end: List Widget 5-->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import EventItem from "./EventItem.vue";
import EventModal from "@/components/modals/general/EventModal.vue";

const API_URL = import.meta.env.VITE_SOAR_API_URL;
declare interface EventELem {
    status: string;
    title: string;
    img: string;
    typeVulnerability: string;
    time: string;
    details: any;
}
export default defineComponent({
    name: "incident-items",
    components: {
        EventItem,
        EventModal,
    },
    props: {},
    data() {
        return {
            showDetail: false as boolean,
            realTimeEvents: [] as EventELem[],
            evtSource: new EventSource(`${API_URL}/anomalies/listen`),
            ransomwareEvtSource: new EventSource(
                `${API_URL}/ransomware/listen`
            ),
            sshEvtSource: new EventSource(`${API_URL}/ssh/listen`),
        };
    },
    mounted: function () {
        this.evtSource.addEventListener("message", this.onEventReceived);
        this.ransomwareEvtSource.addEventListener(
            "message",
            this.handleRansomwareAttack
        );
        this.sshEvtSource.addEventListener("message", this.handleSSHEvent);
    },
    methods: {
        onEventReceived(event) {
            const data = JSON.parse(event.data);
            //console.log(data, this.realTimeEvents);
            const obj = {
                title: "Anomalie d'authentification au service SSH",
                status: "Terminé",
                time: data["time"],
                typeVulnerability: "web",
                img: "login.png",
                details: event.data,
            };
            this.realTimeEvents.unshift(obj);
        },
        handleSSHEvent(event) {
            const data = JSON.parse(event.data);
            console.log(data);
            const obj = {
                title: "Attaque de service SSH par force brute",
                status: "En Cours",
                time: data["time"],
                typeVulnerability: "web",
                img: "ssh.png",
                details: event.data,
            };
            this.realTimeEvents.unshift(obj);
        },
        handleRansomwareAttack(event) {
            const data = JSON.parse(event.data);
            console.log(data);
            const obj = {
                title: "Attaque de ransomware détectée",
                status: "En Cours",
                time: data["time"],
                typeVulnerability: "web",
                img: "ransomware.png",
                details: event.data,
            };
            this.realTimeEvents.unshift(obj);
        },
        onShowDetail: function (event) {
            this.showDetail = true;
        },
        onEventModalClicked: function (value) {
            this.showDetail = value;
        },
    },
});
</script>
