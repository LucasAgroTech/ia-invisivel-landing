import { component$ } from '@builder.io/qwik';
import { useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const pillarElements = document.querySelectorAll('.pillar-card');
    pillarElements.forEach((el) => observer.observe(el));
  });

  return (
    <section class="py-12 md:py-32 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div class="text-center mb-12 md:mb-16">
          <h3 class="text-4xl md:text-5xl font-bold mb-6">
            Os <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">4 Pilares</span>
          </h3>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Arquitetura proprietária que alimenta <span class="text-emerald-400">+2.847 agentes IA</span> gerando resultados exponenciais
          </p>
        </div>

        {/* Pilares Grid */}
        <div class="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          
          {/* Pilar 1 */}
          <div class="pillar-card group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 transition-all duration-500 hover:border-cyan-400/40">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">💰</span>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-cyan-400">Monetização com IA</h4>
                  <p class="text-gray-500 text-sm">Estratégias Avançadas</p>
                </div>
              </div>
              <p class="text-gray-300 mb-4 leading-relaxed">
                Crie fluxos de receita automatizados usando GPT-4, Claude Sonnet e Gemini Pro. 
                <span class="text-cyan-300 font-medium"> Estratégias que geram R$ 5k-15k/mês</span> sem aparecer.
              </p>
              <div class="space-y-2 text-sm text-gray-400">
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                  <span>Copywriting que converte 15-30%</span>
                </div>
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                  <span>Análise de mercado preditiva</span>
                </div>
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                  <span>Automação de vendas 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pilar 2 */}
          <div class="pillar-card group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 transition-all duration-500 hover:border-emerald-400/40">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">🚀</span>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-emerald-400">Aceleração 10x</h4>
                  <p class="text-gray-500 text-sm">de Aprendizado</p>
                </div>
              </div>
              <p class="text-gray-300 mb-4 leading-relaxed">
                Absorva conhecimento 10x mais rápido com Perplexity AI e ChatGPT. 
                <span class="text-emerald-300 font-medium"> MVPs em dias, não meses</span>.
              </p>
              <div class="space-y-2 text-sm text-gray-400">
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                  <span>Validação cirúrgica de ideias</span>
                </div>
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                  <span>Prototipagem em 48h</span>
                </div>
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                  <span>Teste A/B automatizado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pilar 3 */}
          <div class="pillar-card group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 transition-all duration-500 hover:border-purple-400/40">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">🧠</span>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-purple-400">Análise Quantum</h4>
                  <p class="text-gray-500 text-sm">de Dados</p>
                </div>
              </div>
              <p class="text-gray-300 mb-4 leading-relaxed">
                Use Claude e Microsoft Copilot para insights que outros nunca verão. 
                <span class="text-purple-300 font-medium"> Antecipe tendências e multiplique patrimônio</span>.
              </p>
              <div class="space-y-2 text-sm text-gray-400">
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                  <span>Predição de mercado 95% precisa</span>
                </div>
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                  <span>Análise de concorrência em tempo real</span>
                </div>
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                  <span>Decisões baseadas em big data</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pilar 4 */}
          <div class="pillar-card group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 transition-all duration-500 hover:border-red-400/40">
            <div class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">👤</span>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-red-400">Invisibilidade</h4>
                  <p class="text-gray-500 text-sm">Digital Estratégica</p>
                </div>
              </div>
              <p class="text-gray-300 mb-4 leading-relaxed">
                Opere sem rastros usando Meta Llama e Mistral AI. 
                <span class="text-red-300 font-medium"> Vantagem competitiva total e riqueza invisível</span>.
              </p>
              <div class="space-y-2 text-sm text-gray-400">
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                  <span>Privacidade blindada</span>
                </div>
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                  <span>Operações fantasma</span>
                </div>
                <div class="flex items-center">
                  <div class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                  <span>Vantagem competitiva secreta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});