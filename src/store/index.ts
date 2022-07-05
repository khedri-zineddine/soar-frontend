import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import EventModule from "@/store/modules/EventModule";
import AnalyticsModule from "@/store/modules/AnalyticsModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";

import { Mutations } from "@/store/enums/EventEnums";
const API_URL = APP_ENV.SOAR_API;
config.rawError = true;

const store = createStore({
    modules: {
        AuthModule,
        BodyModule,
        BreadcrumbsModule,
        ConfigModule,
        EventModule,
        AnalyticsModule,
    },
});

const eventSource = new EventSource(`${API_URL}/stream`);
const netwrokAttack = {
    cdp_dos: {
        dbName: "cdp_dos",
    },
    dhcp_spoof: { dbName: "dhcp_spoof" },
    dhcp_starvation: { dbName: "dhcp_starvation" },
    stp_dos: { dbName: "stp_dos" },
    stp_root: { dbName: "stp_root" },
    hsrp_attack: { dbName: "hsrp_attack" },
    periodicPing: { dbName: "periodic_ping" },
};
const webAttack = {
    emailPhishing: { dbName: "email_col" },
    anomalies: { dbName: "loginanomaly_col" },
    ransomware: { dbName: "ransomware_col" },
    ssh: { dbName: "ssh_col" },
};
const events_list = [...Object.keys(webAttack), ...Object.keys(netwrokAttack)];
export function InitEventSources() {
    function handleMessage(event, eventName) {
        const content = JSON.parse(event.data);
        let itemCon = {};
        let payload = null;
        if (netwrokAttack[eventName]) {
            const itemInfo = netwrokAttack[eventName];
            const itemKey = itemInfo.dbName;
            const previousItems = store.state.EventModule.eventData[itemKey];
            itemCon = {
                status: "Terminé",
                img: "ssh.png",
                typeVulnerability: "Réseau",
            };
            if (content["responsed_at"]) {
                itemCon["time"] = content["responsed_at"];
                itemCon["title"] = content["Response"];
            } else {
                itemCon["time"] = content["alerted_at"];
                itemCon["title"] = content["vulnerability_alert"];
            }
            if (previousItems)
                payload = {
                    eventKey: itemKey,
                    content: [itemCon, ...previousItems],
                };
        } else {
            const itemInfo = webAttack[eventName];
            if (!itemInfo) return;
            const itemKey = itemInfo.dbName;
            const previousItems = store.state.EventModule.eventData[itemKey];
            switch (itemKey) {
                case "email_col":
                    itemCon = {
                        title: content["title"],
                        status: "Terminé",
                        time: content["alerted_at"],
                        typeVulnerability: "web",
                        type: "email",
                        img: "email.png",
                        details: content.details,
                    };
                    break;
                case "loginanomaly_col":
                    itemCon = {
                        title: "Anomalie d'authentification au service SSH",
                        status: "Terminé",
                        time: content["alerted_at"],
                        typeVulnerability: "web",
                        type: "anomaly",
                        img: "login.png",
                        details: {
                            agent: content["agent"],
                            note: content["note"],
                            result: content["result"],
                        },
                    };
                    break;
                case "ransomware_col":
                    itemCon = {
                        title: "Attaque de ransomware détectée",
                        status: "Terminé",
                        time: content["alerted_at"],
                        typeVulnerability: "web",
                        type: "ransom",
                        img: "ransomware.png",
                        details: {
                            agent: content["agent"],
                            asyschecks: content["asyschecks"],
                            dsyschecks: content["dsyschecks"],
                        },
                    };
                    break;
                case "ssh_col":
                    itemCon = {
                        title: "Attaque de service SSH par force brute",
                        status: "Terminé",
                        time: content["alerted_at"],
                        typeVulnerability: "web",
                        type: "ssh",
                        img: "ssh.png",
                        details: {
                            agent: content["agent"],
                            uinfo: content["uinfo"],
                            full_log: content["full_log"],
                        },
                    };
                    break;
                default:
                    break;
            }
            if (previousItems)
                payload = {
                    eventKey: itemKey,
                    content: [itemCon, ...previousItems],
                };
        }
        if (payload) store.commit(Mutations.SET_EVENTS, payload);
        if (itemCon) store.commit(Mutations.ADD_NOTIFICATION_ITEM, itemCon);
    }
    events_list.forEach((eventName) => {
        eventSource.addEventListener(
            eventName,
            (event) => handleMessage(event, eventName),
            false
        );
    });
}

export default store;
