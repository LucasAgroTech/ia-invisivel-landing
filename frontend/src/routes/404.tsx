import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen bg-black text-white flex items-center justify-center">
      <div class="text-center max-w-md mx-auto px-6">
        <div class="mb-8">
          <h1 class="text-6xl font-bold text-cyan-400 mb-4">404</h1>
          <h2 class="text-2xl font-semibold text-white mb-4">
            Página Não Encontrada
          </h2>
          <p class="text-gray-400 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div class="space-y-4">
          <a 
            href="/" 
            class="inline-block bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300"
          >
            🏠 Voltar para Home
          </a>
        </div>
        
        <div class="mt-12 text-xs text-gray-600">
          <p>AIHACKER - Sistema de IA Invisível</p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: '404 - Página Não Encontrada | AIHACKER',
  meta: [
    {
      name: 'description',
      content: 'Página não encontrada. Volte para o AIHACKER e descubra estratégias de IA.',
    },
  ],
}; 