import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  nitro: {
    preset: "vercel",          // <-- add this
    vercel: {
      regions: ["iad1"],       // optional: pick your region
    },
  },
});