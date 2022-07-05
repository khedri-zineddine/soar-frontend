const DocMenuConfig = [
    {
        heading: "Tableau de bord",
        route: "/dashboard",
        svgIcon: "/media/icons/duotune/arrows/arr001.svg",
        fontIcon: "bi-app-indicator",
    },
    {
        sectionTitle: "Rapports des Incidents",
        route: "/rapport",
        svgIcon: "/media/icons/duotune/arrows/arr001.svg",
        fontIcon: "bi-layers",
        pages: [
            {
                heading: "Email Phishing",
                route: "/rapport/email-phishing",
            },
            {
                heading: "SSH Brute force",
                route: "/rapport/ssh",
            },
            {
                heading: "Detection des anomalies",
                route: "/rapport/anomalies",
            },
            {
                heading: "Ransomeware attack",
                route: "/rapport/ransomeware",
            },
            {
                heading: "CDP DOS",
                route: "/rapport/cdp-dos",
            },
            {
                heading: "DHCP Spoof",
                route: "/rapport/dhcp-spoof",
            },
            {
                heading: "DHCP Starvation",
                route: "/rapport/dhcp-starvation",
            },
            {
                heading: "HSRP Attack",
                route: "/rapport/hsrp",
            },
            ////
            {
                heading: "Periodic Ping",
                route: "/rapport/periodic-ping",
            },
            {
                heading: "STP Dos",
                route: "/rapport/stp-dos",
            },
            {
                heading: "STP Root",
                route: "/rapport/stp-root",
            },
        ],
    },
];

export default DocMenuConfig;
