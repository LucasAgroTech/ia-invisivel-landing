import { component$ } from '@builder.io/qwik';
import Counter from '../ui/counter';

export default component$(() => {
  return (
    <section class="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-12 shadow-lg shadow-cyan-500/10">
          <div class="mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Acesso ao AIHACKER
            </h2>
            <p class="text-gray-400 max-w-md mx-auto text-sm">
              O infoproduto que revela como usar IA para gerar poder e dinheiro.
            </p>
            <div class="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-6 mb-8"></div>
          </div>

          <div class="mb-12">
            <p class="text-xl text-gray-300 mb-4">
              Última chamada para desbloquear o arquivo.
            </p>
            <p class="text-gray-400 max-w-md mx-auto">
              Após esta leva, este conhecimento desaparecerá das prateleiras.
            </p>
          </div>

          {/* Counter Component */}
          <Counter />

          <div class="mt-12 pt-8 border-t border-gray-800">
            <div class="grid md:grid-cols-3 gap-6 text-sm">
              {[
                { color: "red-500", text: "Vagas Limitadas" },
                { color: "yellow-500", text: "Sem Reabertura" },
                { color: "emerald-500", text: "Conteúdo Exclusivo" }
              ].map((item, index) => (
                <div key={index} class="flex items-center justify-center space-x-2">
                  <div class={`w-2 h-2 bg-${item.color} rounded-full animate-pulse`}></div>
                  <span class="text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
