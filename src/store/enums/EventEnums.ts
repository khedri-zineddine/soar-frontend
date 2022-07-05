enum Actions {
    GET_EVENTS = "getEvents",
    GET_PHSHING_EMAILS = "getPhishingEmail",
    SET_SEND_RESPONSE = "setSendResponse",
    GET_ATTACK_EVENTS = "GET_ATTACK_EVENTS",
}
enum Mutations {
    SET_EVENTS = "setEvents",
    SET_ERROR = "setError",
    SET_PHSHING_EMAILS = "setPhishingEmail",
    SET_SEND_RESPONSE = "setSendResponse",
    ADD_NOTIFICATION_ITEM = "ADD_NOTIFICATION_ITEM",
}

export { Actions, Mutations };
