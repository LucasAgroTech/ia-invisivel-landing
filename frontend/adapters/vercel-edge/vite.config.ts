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
          // ✅ CRÍTICO: Externalize TUDO para reduzir bundle
          "node:*",
          /^node:/,
          /^@vercel\//,
          /^@types\//,
          /^@rollup\//,
          /^@babel\//,
          /^@typescript-eslint\//,
          /^eslint/,
          /^prettier/,
          /^autoprefixer/,
          /^postcss/,
          /^tailwindcss/,
          /^undici/,
          /^vite/,
          /^typescript/,
          /^terser/,
          /^@eslint\//,
          /^globals/,
          // ✅ Adicionar mais externals críticos
          "vite-tsconfig-paths",
          "tsc",
          "fsevents",
          "chokidar",
          "@esbuild",
          "rollup",
          "acorn",
          "@swc/core",
          "lightningcss"
        ],
      },
      // ✅ CRÍTICO: Build API v3 output directory
      outDir: ".vercel/output/functions/_qwik-city.func",
      minify: "terser",
      target: "esnext",
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
    },
    plugins: [
      vercelEdgeAdapter({
        // ✅ Configuração específica para Edge
        staticPaths: ["/", "/manifest.json", "/robots.txt", "/favicon.svg"]
      })
    ],
    ssr: {
      target: "webworker",
      noExternal: [
        // ✅ APENAS o essencial do Qwik
        "@builder.io/qwik",
        "@builder.io/qwik-city",
      ],
    },
    define: {
      // ✅ Optimizations para Edge Runtime
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
  };
});
