import { Actions, Mutations } from "@/store/enums/EventEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import ApiService from "@/core/services/ApiService";
import axios from "axios";
const API_URL = import.meta.env.VITE_SOAR_API_URL;
export interface EventInfo {
    otherRequest: boolean;
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
    otherRequest = false;
    get currentEvents() {
        return this.eventData;
    }

    @Mutation
    [Mutations.SET_EVENTS](data) {
        this.eventData = data?.data;
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

    @Action
    [Actions.GET_EVENTS]() {
        const params = {};
        axios
            .get(`${API_URL}/events/all`)
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
