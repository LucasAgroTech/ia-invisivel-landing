import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: ['src/entry.ssr.tsx', '@qwik-city-plan'],
      },
    },
    ssr: {
      target: 'webworker' as const,
      noExternal: ['@builder.io/qwik', '@builder.io/qwik-city'],
    },
    optimizeDeps: {
      include: ['@builder.io/qwik/server', '@builder.io/qwik-city/middleware/vercel-edge'],
    },
  };
});
