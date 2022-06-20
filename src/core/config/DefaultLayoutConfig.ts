import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
    themeName: "Metronic",
    themeVersion: "8.0.38",
    demo: "demo3",
    main: {
        type: "default",
        primaryColor: "#009EF7",
        logo: {
            dark: "media/logos/logo-1-dark.svg",
            light: "media/logos/logo-1.svg",
        },
    },
    illustrations: {
        set: "dozzy-1",
    },
    loader: {
        logo: "media/logos/logo-1-dark.svg",
        display: true,
        type: "default",
    },
    scrollTop: {
        display: true,
    },
    header: {
        display: true,
        menuIcon: "font",
        width: "fixed",
        fixed: {
            desktop: false,
            tabletAndMobile: false,
        },
    },
    toolbar: {
        display: true,
        width: "fixed",
        fixed: {
            desktop: true,
            tabletAndMobile: true,
        },
    },
    aside: {
        display: true,
        theme: "dark",
        fixed: true,
        menuIcon: "svg",
        minimized: false,
        minimize: true,
        hoverable: true,
    },
    sidebar: {
        display: false,
    },
    content: {
        width: "fixed",
    },
    footer: {
        width: "fixed",
    },
};

export default config;
