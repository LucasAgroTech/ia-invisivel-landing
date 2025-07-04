import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { apiEndpoints, type RemainingSpots } from '../../lib/api';

export default component$(() => {
  const remainingSpots = useSignal(97);
  const isLoading = useSignal(false);

  // Resumability: contador atualiza automaticamente
  useVisibleTask$(() => {
    const fetchRemainingSpots = async () => {
      try {
        isLoading.value = true;
        const response = await fetch(apiEndpoints.remainingSpots);
        const data: RemainingSpots = await response.json();
        remainingSpots.value = data.remaining_spots;
      } catch (error) {
        console.error('Erro ao buscar spots restantes:', error);
        // Fallback para contagem local
        remainingSpots.value = Math.max(0, remainingSpots.value - Math.floor(Math.random() * 3));
      } finally {
        isLoading.value = false;
      }
    };

    fetchRemainingSpots();
    
    // Atualiza a cada 30 segundos
    const interval = setInterval(fetchRemainingSpots, 30000);
    
    return () => clearInterval(interval);
  });

  return (
    <div class="text-center">
      <div class="bg-black/80 border border-green-500/50 rounded-lg p-4 sm:p-6 max-w-sm mx-auto relative">
        {/* Header tecnológico */}
        <div class="text-green-400 font-mono text-xs mb-1">
          &gt; AIHACKER_ACCESS.exe
        </div>
        
        <h3 class="text-lg font-bold text-white mb-3 font-mono">
          SISTEMA DE CONTROLE
        </h3>
        
        {/* Contador principal */}
        <div class="bg-black/60 border border-green-500/30 rounded p-3 mb-4">
          <div class="text-green-400 font-mono text-sm mb-1">
            vagas_restantes:
          </div>
          <div class="text-3xl sm:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            {isLoading.value ? '...' : String(remainingSpots.value).padStart(2, '0')}
          </div>
        </div>
        
        {/* Warning de autodestruição */}
        <div class="bg-red-900/20 border border-red-500/50 rounded p-3 mb-3">
          <div class="text-red-400 font-mono text-xs mb-1">
            ⚠️ AVISO_CRÍTICO
          </div>
          <div class="text-red-200 text-sm">
            Ao chegar a <span class="text-red-400 font-mono">00</span>, o sistema se autodestruirá
          </div>
          <div class="text-red-300 text-xs mt-1">
            Acesso ao AIHACKER será perdido para sempre
          </div>
        </div>
        
        {/* Indicador de processo */}
        <div class="flex justify-center space-x-1 mb-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              class="w-1 h-1 rounded-full bg-green-500 animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
        
        <div class="text-green-400 font-mono text-xs opacity-60">
          [EXECUTANDO...]
        </div>
      </div>
    </div>
  );
});