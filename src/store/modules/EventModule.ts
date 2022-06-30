import { Actions, Mutations } from "@/store/enums/EventEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import ApiService from "@/core/services/ApiService";
const API_URL = import.meta.env.VITE_SOAR_API_URL;
export interface EventInfo {
    eventData: {
        title: string;
        status: string;
        time: string;
        typeVulnerability: string;
        img: string;
        details: object;
        type: string;
    }[];
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
    eventData = [];
    errors = {};
    phishingEmails = {
        title: "",
        status: "",
        time: null,
        typeVulnerability: "web",
        img: "email.png",
        details: {},
    };
    get currentEvents() {
        return this.eventData;
    }

    @Mutation
    [Mutations.SET_EVENTS](data) {
        this.eventData = data?.data;
    }
    [Mutations.SET_ERROR](errors) {
        this.errors = errors;
    }
    [Mutations.SET_PHSHING_EMAILS](data) {
        if (data["phishing"]) this.phishingEmails = data;
    }

    @Action
    [Actions.GET_EVENTS]() {
        const params = {};
        return ApiService.query(`${API_URL}/events/all`, params)
            .then(({ data }) => {
                this.context.commit(Mutations.SET_EVENTS, data);
            })
            .catch(({ response }) => {
                this.context.commit(Mutations.SET_ERROR, response.data.errors);
            });
    }
    @Action
    [Actions.GET_PHSHING_EMAILS]() {
        const params: any = {
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
        return ApiService.post(`${API_URL}/email/imap`, params)
            .then(({ data }) => {
                this.context.commit(Mutations.SET_PHSHING_EMAILS, data);
            })
            .catch(({ response }) => {
                this.context.commit(Mutations.SET_ERROR, response.data.errors);
            });
    }
}
