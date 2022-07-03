const DocMenuConfig = [
    {
        heading: "Tableau de bord",
        route: "/dashboard",
        svgIcon: "/media/icons/duotune/arrows/arr001.svg",
        fontIcon: "bi-app-indicator",
    },
    {
        heading: "Rapports des Incidents",
        route: "/rapport",
        svgIcon: "/media/icons/duotune/arrows/arr001.svg",
        fontIcon: "bi-layers",
    },
    {
        sectionTitle: "Communications",
        route: "/apps",
        svgIcon: "/media/icons/duotune/arrows/arr001.svg",
        fontIcon: "bi-layers",
        pages: [
            {
                sectionTitle: "chat",
                route: "/chat",
                svgIcon: "/media/icons/duotune/arrows/arr001.svg",
                fontIcon: "bi-chat-left",
                sub: [
                    {
                        heading: "Chat Privé",
                        route: "/apps/chat/private-chat",
                    },
                    {
                        heading: "Chat De Groupe",
                        route: "/apps/chat/group-chat",
                    },
                    {
                        heading: "drawerChat",
                        route: "/apps/chat/drawer-chat",
                    },
                ],
            },
        ],
    },
];

export default DocMenuConfig;
