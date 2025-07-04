import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const aiTools = [
    { name: "Claude Sonnet 4.0", category: "Text AI" },
    { name: "OpenAI GPT-4o", category: "Text AI" },
    { name: "Gemini Pro", category: "Text AI" },
    { name: "Perplexity AI", category: "Search AI" },
    { name: "Anthropic Claude", category: "Text AI" },
    { name: "Microsoft Copilot", category: "Productivity" },
    { name: "Meta Llama", category: "Text AI" },
    { name: "Mistral AI", category: "Text AI" },
    { name: "Midjourney", category: "Image AI" },
    { name: "DALL-E 3", category: "Image AI" },
    { name: "Stable Diffusion", category: "Image AI" },
    { name: "RunwayML", category: "Video AI" }
  ];

  const categories = [
    { name: "Text AI", color: "from-emerald-400 to-cyan-400", count: 5 },
    { name: "Image AI", color: "from-purple-400 to-pink-400", count: 3 },
    { name: "Video AI", color: "from-orange-400 to-red-400", count: 1 },
    { name: "Search AI", color: "from-blue-400 to-indigo-400", count: 1 },
    { name: "Productivity", color: "from-yellow-400 to-amber-400", count: 2 }
  ];

  return (
    <section class="pb-8 md:pb-12 bg-gray-900/30 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div class="text-center mb-6 md:mb-8">
          <div class="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-3 py-1.5 rounded-full font-bold text-xs mb-3">
            🤖 FERRAMENTAS DE IA
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Domine as Principais
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              IAs do Mercado
            </span>
          </h2>
          <p class="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Aprenda a maximizar o potencial das ferramentas de IA mais avançadas
          </p>
        </div>

        {/* Categorias */}
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-6">
          {categories.map((category, index) => (
            <div key={index} class="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-3 text-center hover:border-gray-700 transition-all duration-300">
              <div class={`text-lg sm:text-xl mb-1 font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.count}
              </div>
              <div class="text-white font-medium text-xs sm:text-sm mb-1">
                {category.name}
              </div>
              <div class="text-gray-500 text-xs">
                {category.count} ferramenta{category.count > 1 ? 's' : ''}
              </div>
            </div>
          ))}
        </div>

        {/* Ferramentas de IA */}
        <div class="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 mb-4">
          <div class="text-center mb-4">
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">
              Ferramentas Incluídas
            </h3>
            <p class="text-gray-400 text-sm">
              Estratégias específicas para maximizar resultados
            </p>
          </div>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3">
            {aiTools.map((tool, index) => (
              <div key={index} class="group bg-gray-800/50 rounded-lg p-3 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600">
                <div class="text-emerald-400 font-medium text-xs sm:text-sm mb-1">
                  {tool.name}
                </div>
                <div class="text-gray-500 text-xs">
                  {tool.category}
                </div>
                <div class="mt-2 h-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full group-hover:from-emerald-500/40 group-hover:to-cyan-500/40 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer com estatísticas */}
        <div class="text-center">
          <div class="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div class="text-center">
              <div class="text-xl sm:text-2xl font-bold text-emerald-400 mb-1">12+</div>
              <div class="text-gray-400 text-xs">Ferramentas</div>
            </div>
            <div class="text-center">
              <div class="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">5</div>
              <div class="text-gray-400 text-xs">Categorias</div>
            </div>
            <div class="text-center">
              <div class="text-xl sm:text-2xl font-bold text-purple-400 mb-1">∞</div>
              <div class="text-gray-400 text-xs">Possibilidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});