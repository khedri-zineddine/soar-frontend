import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default async ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.VITE_HOST_URL;
    return defineConfig({
        plugins: [vue()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        define: {
            APP_ENV: {
                BASE_URL: process.env.VITE_BASE_URL,
                API_URL: process.env.VITE_API_URL,
                SOAR_API: process.env.VITE_SOAR_API_URL,
            },
        },
        server: {
            port: 8001,
            host: '0.0.0.0'
        },
    });
};
