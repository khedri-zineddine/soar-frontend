<template>
    <!--begin::List Widget 5-->
    <div v-if="eventType === 'email'">
        <EmailModal
            v-if="dataType == 'db'"
            :show="showDetail"
            @clicked="onEventModalClicked"
            :data="eventData[eventId]"
        />
        <EmailModal
            v-else
            :show="showDetail"
            @clicked="onEventModalClicked"
            :data="realTimeEvents[eventId]"
        />
    </div>
    <div v-if="eventType === 'ssh'">
        <SSHModal
            v-if="dataType == 'db'"
            :show="showDetail"
            @clicked="onEventModalClicked"
            :data="eventData[eventId]"
        />
        <SSHModal
            v-else
            :show="showDetail"
            @clicked="onEventModalClicked"
            :data="realTimeEvents[eventId]"
        />
    </div>
    <div v-if="eventType === 'login'">
        <LoginModal
            v-if="dataType == 'db'"
            :show="showDetail"
            @clicked="onEventModalClicked"
            :data="eventData[eventId]"
        />
        <LoginModal
            v-else
            :show="showDetail"
            @clicked="onEventModalClicked"
            :data="realTimeEvents[eventId]"
        />
    </div>
    <div v-if="eventType === 'ransomware'">
        <RansomwareModal
            v-if="dataType == 'db'"
            :show="showDetail"
            @clicked="onEventModalClicked"
            :data="eventData[eventId]"
        />
        <RansomwareModal
            v-else
            :show="showDetail"
            @clicked="onEventModalClicked"
            :data="realTimeEvents[eventId]"
        />
    </div>
    <div class="card" :class="widgetClasses">
        <div class="mt-7">
            <div>
                <div class="pe-3 mb-5">
                    <div class="fs-5 fw-bold mb-2">
                        <div
                            class="timeline-icon symbol symbol-circle symbol-40px me-4"
                        >
                            <div class="symbol-label bg-light">
                                <span>
                                    <inline-svg
                                        src="/media/icons/duotune/communication/com004.svg"
                                    />
                                </span>
                            </div>
                        </div>
                        Nouvelles alertes de sécurité pour vous au sein de votre
                        infrastructure :
                    </div>
                </div>
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
                        type="realtime"
                        :index="idx"
                    ></EventItem>
                    <EventItem
                        v-for="(item, idx) in eventData"
                        :key="idx"
                        :title="item.title"
                        :status="item.status"
                        :time="item.time"
                        :typeVulnerability="item.typeVulnerability"
                        :img="item.img"
                        :onDetail="onShowDetail"
                        type="db"
                        :index="idx"
                    ></EventItem>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import EventItem from "./EventItem.vue";
import EmailModal from "@/components/modals/general/EmailModal.vue";
import SSHModal from "@/components/modals/general/SSHModal.vue";
import RansomwareModal from "@/components/modals/general/RansomwareModal.vue";
import LoginModal from "@/components/modals/general/LoginModal.vue";
import { Actions } from "@/store/enums/EventEnums";
import { mapState } from "vuex";

const API_URL = APP_ENV.SOAR_API;
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
        EmailModal,
        SSHModal,
        RansomwareModal,
        LoginModal,
    },
    props: {},
    data() {
        return {
            showDetail: false as boolean,
            realTimeEvents: [] as EventELem[],
            source: new EventSource(`${API_URL}/stream`),
            timer: null,
            eventId: 0 as number,
            dataType: "db",
            eventType: "",
            timelastEvent: null,
        };
    },
    mounted: function () {
        this.source.addEventListener("anomalies", this.onEventReceived, false);
        this.source.addEventListener(
            "ransomware",
            this.handleRansomwareAttack,
            false
        );
        this.source.addEventListener("ssh", this.handleSSHEvent, false);
        this.$store.dispatch(Actions.GET_EVENTS);
        this.$store.dispatch(Actions.GET_PHSHING_EMAILS);
        this.timer = setInterval(() => {
            this.$store.dispatch(Actions.GET_PHSHING_EMAILS);
        }, 600000);
    },

    beforeUnmount: function () {
        clearInterval(this.timer);
    },
    watch: {
        phishingEmails(newdata, olddata) {
            if (newdata !== olddata) {
                this?.realTimeEvents.unshift(newdata);
            }
        },
    },
    computed: {
        ...mapState({
            eventData: (state) => {
                console.log("event data show ");
                return state.EventModule?.eventData;
            },
            phishingEmails: (state) => {
                console.log(
                    "displaty state data",
                    state.EventModule?.phishingEmails
                );
                return state.EventModule?.phishingEmails;
            },
        }),
    },
    methods: {
        onEventReceived(event) {
            console.log("---------- i have received an login alert --------");
            const data = JSON.parse(event.data);
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
        onShowDetail: function (type, index, eventType) {
            console.log(type, index, eventType);
            this.showDetail = true;
            this.dataType = type;
            this.eventId = index;
            this.eventType = eventType;
        },
        onEventModalClicked: function (value) {
            this.showDetail = value;
        },
    },
});
</script>
