import { Actions, Mutations } from "@/store/enums/EventEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import ApiService from "@/core/services/ApiService";
const API_URL = APP_ENV.SOAR_API;
type EventType = {
    title: string;
    status: string;
    time: string;
    typeVulnerability: string;
    img: string;
    details: object;
    type: string;
};
export interface EventInfo {
    otherRequest: boolean;
    eventData: { [x: string]: EventType[] };
    notifications: EventType[];
    errors: unknown;
    phishingEmails: {
        title: string;
        status: string;
        time: string;
        typeVulnerability: string;
        img: string;
        details: object;
    };
}
@Module
export default class EventModule extends VuexModule implements EventInfo {
    eventData = {};
    errors = {};
    phishingEmails = {
        title: "",
        status: "",
        time: null,
        typeVulnerability: "web",
        img: "email.png",
        details: {},
    };
    notifications = [];
    otherRequest = false;
    get currentEvents() {
        return this.eventData;
    }

    @Mutation
    [Mutations.SET_EVENTS](payload) {
        const { eventKey, content } = payload;
        const eventData = this.eventData;
        this.eventData = {
            ...eventData,
            [eventKey]: content,
        };
    }

    @Mutation
    [Mutations.SET_ERROR](errors) {
        this.errors = errors;
    }

    @Mutation
    [Mutations.SET_PHSHING_EMAILS](data) {
        this.otherRequest = false;
        if (data["phishing"]) this.phishingEmails = data;
    }

    @Mutation
    [Mutations.SET_SEND_RESPONSE](data) {
        this.otherRequest = data;
    }
    @Mutation
    [Mutations.ADD_NOTIFICATION_ITEM](item) {
        const notifications = this.notifications;
        this.notifications = [item, ...notifications];
    }

    @Action
    [Actions.GET_ATTACK_EVENTS](attack: string) {
        return ApiService.query(`${API_URL}/events/${attack}`, {})
            .then(({ data }) => {
                if (!data) return;
                this.context.commit(Mutations.SET_EVENTS, {
                    eventKey: attack,
                    content: data.content,
                });
            })
            .catch(({ response }) => {
                this.context.commit(Mutations.SET_ERROR, response.data.errors);
            });
    }

    @Action
    [Actions.GET_EVENTS]() {
        return ApiService.query(`${API_URL}/events/all`, {})
            .then(({ data }) => {
                this.context.commit(Mutations.SET_EVENTS, data);
            })
            .catch(({ response }) => {
                this.context.commit(Mutations.SET_ERROR, response.data.errors);
            });
    }
    @Action
    [Actions.GET_PHSHING_EMAILS]() {
        const data: any = {
            username: "itachibatna@gmail.com",
            password: "",
            imap_server: "imap.gmail.com",
            foldername: "inbox",
            amount: 1,
            unread: "true",
            fields: null,
            include_raw_body: true,
            include_attachment_data: true,
            upload_email: true,
            upload_attachments: true,
            ssl_verify: true,
            mark_as_read: false,
        };
        console.log("send event to email imap");
        return ApiService.post(`${API_URL}/email/imap`, data)
            .then(({ data }) => {
                console.log("server response");
                this.context.commit(Mutations.SET_PHSHING_EMAILS, data);
            })
            .catch(({ response }) => {
                this.context.commit(Mutations.SET_ERROR, response.data.errors);
            });

        return null;
    }
}
