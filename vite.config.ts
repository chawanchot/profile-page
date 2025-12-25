import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/profile-page",
    build: {
        outDir: "./dist",
    },
    resolve: {
        alias: {
            "@pages": path.resolve(__dirname, "src/pages"),
            "@components": path.resolve(__dirname, "src/components"),
            "@router": path.resolve(__dirname, "src/router"),
            "@layout": path.resolve(__dirname, "src/layout"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@data": path.resolve(__dirname, "src/data"),
            "@store": path.resolve(__dirname, "src/store"),
            "@services": path.resolve(__dirname, "src/services"),
        },
    },
    server: {
        open: true,
        port: 3000,
    },
});
