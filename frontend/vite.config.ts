import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity({
        // ✅ Configuração para Build API v3
        trailingSlash: false,
      }), 
      qwikVite({
        // ✅ Optimizations para produção
        client: {
          outDir: 'dist'
        }
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
        input: ['src/entry.ssr.tsx', '@qwik-city-plan'],
        output: {
          // ✅ Otimização para Edge Functions
          manualChunks: undefined,
        }
      },
      // ✅ Otimizações para Vercel Edge
      minify: 'terser' as const,
      target: 'esnext',
    },
    ssr: {
      target: 'webworker' as const,
      noExternal: ['@builder.io/qwik', '@builder.io/qwik-city'],
    },
    optimizeDeps: {
      include: [
        '@builder.io/qwik/server', 
        '@builder.io/qwik-city/middleware/vercel-edge'
      ],
    },
    define: {
      // ✅ Environment variables
      'import.meta.env.SSR': 'false'
    }
  };
});
