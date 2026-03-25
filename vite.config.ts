import { defineConfig } from "vite-plus";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

import type { Plugin } from "vite-plus";

const config = defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [
    devtools(),
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    tanstackRouterHMR(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    allowedHosts: [".trycloudflare.com"],
  },
});

function tanstackRouterHMR(): Plugin {
  return {
    name: "tanstack-router-hmr",
    enforce: "post",
    handleHotUpdate(ctx) {
      const invalidatedModules = [];

      for (const mod of ctx.server.moduleGraph.idToModuleMap.values()) {
        if (mod.id?.includes("/router.ts")) {
          invalidatedModules.push(mod);
        }
      }

      return invalidatedModules;
    },
  };
}

export default config;
