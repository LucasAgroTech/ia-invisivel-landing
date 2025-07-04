import { component$ } from '@builder.io/qwik';
import LeadForm from '../lead-form/lead-form';

export default component$(() => {
  return (
    <section class="pt-12 pb-4 md:pt-24 md:pb-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Main CTA Header */}
        <div class="mb-8 md:mb-12">
          <h3 class="text-4xl md:text-5xl font-bold mb-6">
            Torne-se um <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">AIHACKER</span>
          </h3>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Domine a arquitetura que alimenta milhares de agentes IA e 
            <span class="text-emerald-400 font-semibold"> transforme sua realidade financeira</span> para sempre
          </p>
          <div class="w-32 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Scarcity Message */}
        <div class="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
          <h3 class="text-3xl font-bold text-red-300 mb-4">⚡ ACESSOS</h3>
          <p class="text-lg text-gray-300 mb-6">
            Sistema operando próximo ao limite: <span class="text-red-400 font-bold">97% CAPACIDADE</span>
          </p>
          <div class="flex justify-center space-x-1 mb-4">
            {Array.from({length: 32}, (_, i) => (
              <div key={i} class="w-1 h-4 bg-emerald-500 rounded-sm"></div>
            ))}
            {Array.from({length: 1}, (_, i) => (
              <div key={i} class="w-1 h-4 border border-red-500 rounded-sm animate-pulse"></div>
            ))}
          </div>
          <p class="text-sm text-gray-400">Process: 97% | Disponível: 3%</p>
        </div>

        {/* Lead Form */}
        <div class="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 md:p-8">
          <h4 class="text-2xl font-bold text-emerald-400 mb-4">
            Solicite Acesso ao AIHACKER (PDF)
          </h4>
          <p class="text-gray-400 mb-8">
            Receba o material completo em PDF via e-mail. Acesso instantâneo após validação.
          </p>
          
          <LeadForm />

          {/* Trust Indicators */}
          <div class="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <div class="flex items-center">
              <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
              <span>Dados protegidos por criptografia</span>
            </div>
            <div class="flex items-center">
              <div class="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
              <span>Sem spam ou vendas agressivas</span>
            </div>
            <div class="flex items-center">
              <div class="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
              <span>Comunidade privada e exclusiva</span>
            </div>
          </div>
        </div>

        {/* Footer Psychological Trigger */}
        <div class="mt-6 md:mt-8 text-center border-t border-gray-800 pt-6 md:pt-8">
          <p class="text-gray-500 text-sm max-w-2xl mx-auto">
            "A diferença entre quem lucra e quem fica para trás não é mais o conhecimento, mas o acesso às arquiteturas certas."
          </p>
          <p class="text-gray-600 text-xs mt-4">— AIHACKER CORE System, 2025</p>
        </div>
      </div>
    </section>
  );
}); 