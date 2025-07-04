import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const openIndex = useSignal<number | null>(null);

  const faqs = [
    {
      question: "O que exatamente vou receber ao adquirir o AIHACKER?",
      answer: "Você receberá um curso completo em formato PDF com estratégias práticas para gerar receita usando ferramentas de IA como GPT-4, Claude Sonnet, Gemini Pro e outras. O material digital inclui tutoriais passo a passo, exemplos reais e templates prontos para implementar imediatamente."
    },
    {
      question: "Preciso ter conhecimento técnico ou saber programar?",
      answer: "Não é necessário saber programar. O AIHACKER foi desenvolvido para pessoas sem conhecimento técnico, com explicações claras e instruções simples. Todas as estratégias são baseadas no uso intuitivo das ferramentas de IA disponíveis publicamente."
    },
    {
      question: "Em quanto tempo posso ver os primeiros resultados?",
      answer: "Seguindo as estratégias apresentadas no AIHACKER, você pode implementar suas primeiras fontes de receita em 7 a 14 dias. O tempo varia conforme sua dedicação e a estratégia escolhida, mas muitos usuários relatam resultados já na primeira semana."
    },
    {
      question: "As estratégias funcionam para qualquer nicho ou área?",
      answer: "Sim! As técnicas de monetização com IA apresentadas no AIHACKER são universais e podem ser adaptadas para qualquer nicho - desde consultoria e marketing digital até criação de conteúdo, análise de dados e automação de processos."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "O acesso é instantâneo! Assim que o pagamento for confirmado, você receberá um e-mail com o link para download do PDF completo do AIHACKER. Todo o processo é digital e automatizado para garantir entrega imediata do material."
    },
    {
      question: "Existe algum tipo de suporte ou acompanhamento?",
      answer: "O AIHACKER é autoexplicativo e inclui todos os recursos necessários para implementação. Para dúvidas específicas sobre o conteúdo, disponibilizamos suporte via e-mail com tempo de resposta de até 24 horas."
    },
    {
      question: "O curso é em vídeo ou texto? Qual o formato?",
      answer: "O AIHACKER é um curso completo em formato PDF (documento digital) com mais de 100 páginas. Você pode ler no seu computador, tablet ou celular, e até mesmo imprimir se preferir. O formato PDF permite fácil consulta e busca por conteúdo específico."
    },
    {
      question: "Por que o preço está tão baixo se o conteúdo é tão valioso?",
      answer: "Esta é uma oferta de lançamento especial para validar o mercado e construir uma base de usuários satisfeitos. O preço normal será R$ 497, mas queremos que mais pessoas tenham acesso a essas estratégias revolucionárias."
    }
  ];

  return (
    <section class="pt-4 pb-8 md:py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-6 md:mb-12">
          <div class="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-6 py-3 rounded-full font-bold text-sm mb-8 shadow-lg">
            ❓ PERGUNTAS FREQUENTES
          </div>
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tire Suas Dúvidas
          </h2>
          <p class="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Reunimos as principais perguntas sobre o curso <span class="text-emerald-400 font-semibold">AIHACKER</span> para que você tenha total clareza sobre o que está adquirindo.
          </p>
          <div class="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto"></div>
        </div>

        <div class="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} class="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300">
              <button
                class="w-full p-6 text-left hover:bg-gray-800/30 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                onClick$={() => {
                  openIndex.value = openIndex.value === index ? null : index;
                }}
              >
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    class={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex.value === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openIndex.value === index && (
                <div class="px-6 pb-6">
                  <div class="pt-4 border-t border-gray-800">
                    <p class="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div class="mt-6 md:mt-12 text-center">
          <div class="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 class="text-xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p class="text-gray-300 mb-6">
              Nossa equipe está pronta para ajudar você a esclarecer qualquer questão sobre o AIHACKER.
            </p>
            <p class="text-cyan-400 font-semibold">
              📧 Contato: suporte@aihacker.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
