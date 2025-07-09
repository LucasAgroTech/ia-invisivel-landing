import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity({
        // ✅ Configuração para geração estática
        trailingSlash: false,
      }), 
      qwikVite({
        // ✅ Configuração para site estático
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
          // ✅ Otimização para arquivos estáticos
          manualChunks: undefined,
        }
      },
      // ✅ Otimizações para arquivos estáticos
      minify: 'terser' as const,
      target: 'esnext',
    },
    // ✅ Removido ssr para gerar site estático
    optimizeDeps: {
      include: [
        '@builder.io/qwik/server'
      ],
    },
    define: {
      // ✅ Site estático
      'import.meta.env.SSR': 'false'
    }
  };
});
