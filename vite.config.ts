import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { invitationMetaPlugin } from "./vite-plugin-invitation-meta";
import invitation from "./src/config/invitation";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE_PATH || "/invite2026/";
  const baseUrl =
    env.VITE_BASE_URL || "https://yellongs.github.io/lee.github.io/";

  return {
    plugins: [react(), invitationMetaPlugin(invitation.seo, baseUrl)],
    base,
    build: {
      outDir: "docs",
      assetsDir: "assets",
    },
  };
});
