import { Actions, Mutations } from "@/store/enums/AnalyticsEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import ApiService from "@/core/services/ApiService";
const API_URL = APP_ENV.SOAR_API;
export interface AnalyticsInfo {
    alertsLoaded: boolean;
    alertsState: {
        count: number;
        labels: string[];
        values: number[];
    };
    responseLoaded: boolean;
    responsesState: {
        count: number;
        labels: string[];
        values: number[];
    };
    eventsLoaded: boolean;
    lastEvents: {
        title: string;
        dotColor: string;
        time: string;
        date: string;
    }[];
}
@Module
export default class AnalyticsModule
    extends VuexModule
    implements AnalyticsInfo
{
    resource = `${API_URL}/analytics`;
    alertsLoaded = false;
    alertsState = {
        count: 0,
        labels: [],
        values: [],
    };
    responseLoaded = false;
    responsesState = {
        count: 0,
        labels: [],
        values: [],
    };
    eventsLoaded = false;
    lastEvents = [];

    @Mutation
    [Mutations.SET_ALERTS_LOADED](isLoaded) {
        this.alertsLoaded = isLoaded;
    }

    @Mutation
    [Mutations.SET_ALERTS_STATES](data) {
        this.alertsState = data;
    }

    @Mutation
    [Mutations.SET_RESPONSES_LOADED](isLoaded) {
        this.responseLoaded = isLoaded;
    }

    @Mutation
    [Mutations.SET_RESPONSES_STATES](data) {
        this.responsesState = data;
    }

    @Mutation
    [Mutations.SET_LAST_EVENTS](events) {
        this.lastEvents = events;
    }
    @Mutation
    [Mutations.SET_EVENTS_LOADED](eventsLoaded) {
        this.eventsLoaded = eventsLoaded;
    }

    @Action
    [Actions.GET_ALERTS_STATE]() {
        return ApiService.get(this.resource, "alerts")
            .then(({ data }) => {
                if (!data) return;
                const alerState = {
                    count: data.count,
                    labels: [],
                    values: [],
                };
                for (const index in data.values) {
                    const record = data.values[index];
                    alerState.labels.push(record.date);
                    alerState.values.push(record.count);
                }
                this.context.commit(Mutations.SET_ALERTS_STATES, alerState);
                this.context.commit(Mutations.SET_ALERTS_LOADED, true);
            })
            .catch(({ response }) => {});
    }
    @Action
    [Actions.GET_RESPONSES_STATE]() {
        return ApiService.get(this.resource, "responses")
            .then(({ data }) => {
                if (!data) return;
                const responseState = {
                    count: data.count,
                    labels: [],
                    values: [],
                };
                for (const index in data.values) {
                    const record = data.values[index];
                    responseState.labels.push(record.date);
                    responseState.values.push(record.count);
                }
                this.context.commit(
                    Mutations.SET_RESPONSES_STATES,
                    responseState
                );
                this.context.commit(Mutations.SET_RESPONSES_LOADED, true);
            })
            .catch(({ response }) => {});
    }
    @Action
    [Actions.GET_LAST_EVENTS]() {
        return ApiService.get(this.resource, "last-events")
            .then(({ data }) => {
                if (!data) return;
                this.context.commit(Mutations.SET_LAST_EVENTS, data.content);
                this.context.commit(Mutations.SET_EVENTS_LOADED, true);
            })
            .catch(({ response }) => {});
    }
}
