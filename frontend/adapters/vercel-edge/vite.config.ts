import { vercelEdgeAdapter } from "@builder.io/qwik-city/adapters/vercel-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.vercel-edge.tsx", "@qwik-city-plan"],
        external: [
          // Externalize heavy dependencies to reduce bundle size
          "node:*",
          /^@vercel\//,
          /^@types\//,
          /^@rollup\//,
          /^@babel\//,
          /^@typescript-eslint\//,
        ],
      },
      outDir: ".vercel/output/functions/_qwik-city.func",
      minify: "terser",
      target: "esnext",
      sourcemap: false,
    },
    plugins: [vercelEdgeAdapter()],
    ssr: {
      target: "webworker",
      noExternal: [
        "@builder.io/qwik",
        "@builder.io/qwik-city",
      ],
    },
  };
});
