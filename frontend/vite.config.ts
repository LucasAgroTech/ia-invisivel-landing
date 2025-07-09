import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity({
        trailingSlash: false,
      }), 
      qwikVite({
        client: {
          outDir: 'dist',
        },
      }), 
      tsconfigPaths()
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          // ✅ Otimização para reduzir tamanho
          manualChunks: (id) => {
            if (id.includes('@builder.io/qwik')) {
              return 'qwik-core';
            }
            if (id.includes('@builder.io/qwik-city')) {
              return 'qwik-city';
            }
            return undefined;
          },
        }
      },
      // ✅ Otimizações agressivas para reduzir tamanho
      minify: true,
      target: 'es2020',
      chunkSizeWarningLimit: 1000,
      assetsInlineLimit: 4096,
    },
    optimizeDeps: {
      include: [
        '@builder.io/qwik',
        '@builder.io/qwik-city',
      ],
    },
    define: {
      'import.meta.env.SSR': 'false',
    }
  };
});
