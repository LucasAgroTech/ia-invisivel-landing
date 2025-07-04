import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const testimonials = [
    {
      text: "Achei que seria impossível mudar minha vida sem trabalhar até morrer. Mas quando comecei a aplicar o que aprendi no AIHACKER, comecei a enxergar oportunidades que ninguém vê. Hoje, tenho mais tempo e ganho mais do que imaginei possível.",
      author: "M.R., Empreendedor",
      location: "São Paulo"
    },
    {
      text: "Depois de ler o AIHACKER, aprendi a proteger minha privacidade online e fugir dos rastros digitais que me perseguiam. Agora, é como se eu fosse invisível enquanto faço meu dinheiro trabalhar por mim.",
      author: "L.K., Freelancer",
      location: "Rio de Janeiro"
    },
    {
      text: "Investir sempre me deixava ansioso, mas o que aprendi no AIHACKER me deu confiança para entrar e sair no momento certo. Foi surreal ver meu saldo crescer enquanto eu dormia.",
      author: "A.S., Investidor Independente",
      location: "Florianópolis"
    }
  ];

  return (
    <section class="py-12 md:py-32 bg-gray-900/50 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
            Resultados Reais com o AIHACKER
          </h2>
          <div class="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} class="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div class="mb-6">
                <svg class="w-8 h-8 text-cyan-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p class="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-white font-semibold text-sm">{testimonial.author}</p>
                  <p class="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
                <div class="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
