import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default async ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
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
            },
        },
        server: {
            port: 3000,
        },
    });
};
