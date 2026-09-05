import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Remove this: server: { entry: "server" },
    // Remove this: pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  nitro: {
    preset: "vercel",
    vercel: {
      regions: ["iad1"],
    },
  },
});
