import { component$ } from '@builder.io/qwik';
import { useVisibleTask$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const isVideoPlaying = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // Animações de entrada sequenciais
    const animateElements = () => {
      const elements = document.querySelectorAll('.fade-in-sequence');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0');
        }, index * 200);
      });
    };

    // Sistema de vagas dinâmicas
    const updateSpots = () => {
      const spotsElement = document.getElementById('remaining-spots');
      if (!spotsElement) return;
      
      let spots = 47;
      spotsElement.textContent = spots.toString();
      
      const decreaseSpots = () => {
        if (spots > 12) {
          spots--;
          spotsElement.textContent = spots.toString();
          // Intervalo aleatório entre 45-180 segundos
          const nextDecrease = Math.random() * (180000 - 45000) + 45000;
          setTimeout(decreaseSpots, nextDecrease);
        }
      };
      
      // Primeira diminuição em 30-90 segundos
      const firstDecrease = Math.random() * (90000 - 30000) + 30000;
      setTimeout(decreaseSpots, firstDecrease);
    };

    animateElements();
    updateSpots();
  });

  // ===== CONFIGURAÇÃO DE VÍDEO =====
  // Configure aqui qual tipo de vídeo usar
  let videoType = "vimeo-custom" as "placeholder" | "youtube" | "vimeo" | "vimeo-custom" | "local" | "background";
  
  // Para YouTube: cole o ID do seu vídeo aqui
  const youtubeVideoId = "dQw4w9WgXcQ"; // Substitua pelo ID do seu vídeo
  
  // Para Vimeo: ID do vídeo do Vimeo
  const vimeoVideoId = "1098662655"; // Seu vídeo do Vimeo
  
  // Para vídeo local
  const hasBackgroundVideo = false;
  const videoPath = "/videos/demo-video.mp4";
  const posterPath = "/videos/demo-poster.jpg";

  return (
    <section class="min-h-screen bg-black text-white overflow-hidden relative">
      
      {/* Background Video (Opcional) */}
      {hasBackgroundVideo && (
        <>
          <video 
            autoplay 
            muted 
            loop 
            playsInline
            class="absolute inset-0 w-full h-full object-cover z-0"
            poster={posterPath}
          >
            <source src={videoPath} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          {/* Video Overlay for better text readability */}
          <div class="absolute inset-0 bg-black/50 z-5"></div>
        </>
      )}

      {/* Background Effects */}
      <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-5"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none z-5"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none z-5"></div>
      
      {/* Animated Grid */}
      <div class="absolute inset-0 opacity-20 z-5">
        <div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div class="relative z-10 min-h-screen flex flex-col justify-center px-6">
        <div class="max-w-6xl mx-auto text-center">
          
          {/* Urgency Bar */}
          <div class="fade-in-sequence opacity-0 translate-y-4 transition-all duration-700 mb-8">
            <div class="inline-flex items-center bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-500/20 rounded-full px-4 py-2">
              <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
              <span id="remaining-spots" class="text-red-400 font-bold text-lg">47</span>
              <span class="text-red-300 font-medium ml-1">vagas restantes</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 class="fade-in-sequence opacity-0 translate-y-4 transition-all duration-700 text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            <span class="text-white">AI</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 drop-shadow-2xl">HACKER</span>
          </h1>

          {/* Power Headline */}
          <div class="fade-in-sequence opacity-0 translate-y-4 transition-all duration-700 mb-8">
            <h2 class="text-2xl md:text-4xl font-bold text-gray-200 mb-4">
              A Elite Silenciosa da <span class="text-emerald-400">Riqueza Digital</span>
            </h2>
            <div class="w-32 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Video Section */}
          <div class="fade-in-sequence opacity-0 translate-y-4 transition-all duration-700 mb-12">
            <div class="max-w-4xl mx-auto">
              
              {/* YouTube Video */}
              {videoType === "youtube" && (
                <div class="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
                  <iframe
                    class="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&showinfo=0&modestbranding=1&autoplay=0`}
                    title="Vídeo Demonstração AI HACKER"
                    frameBorder="0"
                    allowFullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              )}

              {/* Vimeo Video Direto */}
              {videoType === "vimeo" && (
                <div class="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
                  <iframe
                    class="absolute top-0 left-0 w-full h-full"
                    src={`https://player.vimeo.com/video/${vimeoVideoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                    title="AI HACKER - Demonstração"
                    frameBorder="0"
                    allowFullscreen
                    allow="autoplay; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              )}

              {/* Vimeo com Capa Personalizada */}
              {videoType === "vimeo-custom" && (
                <div class="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
                  {!isVideoPlaying.value ? (
                    /* Thumbnail minimalista com tema AI */
                    <div 
                      class="absolute inset-0 group cursor-pointer w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center overflow-hidden"
                      onClick$={() => isVideoPlaying.value = true}
                    >
                      {/* Background pattern - tema tech/AI */}
                      <div class="absolute inset-0 opacity-20">
                        {/* Grid pattern */}
                        <div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                        
                        {/* Circuit-like elements */}
                        <div class="absolute top-10 left-10 w-32 h-32 border border-cyan-500/20 rounded-lg rotate-12"></div>
                        <div class="absolute bottom-20 right-16 w-24 h-24 border border-emerald-500/20 rounded-full"></div>
                        <div class="absolute top-1/3 right-10 w-16 h-16 border border-cyan-500/30 rotate-45"></div>
                        
                        {/* Flowing lines */}
                        <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.3" />
                              <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.1" />
                            </linearGradient>
                          </defs>
                          <path d="M0,100 Q200,50 400,80 T800,60" stroke="url(#flow)" stroke-width="2" fill="none" opacity="0.4"/>
                          <path d="M0,200 Q300,150 600,180 T1200,160" stroke="url(#flow)" stroke-width="1" fill="none" opacity="0.3"/>
                        </svg>
                      </div>
                      
                      {/* AI/HACKER branding sutil */}
                      <div class="absolute top-8 left-8 opacity-30">
                        <div class="flex items-center space-x-2">
                          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <span class="text-cyan-300 text-sm font-mono">AI.SYSTEM</span>
                        </div>
                      </div>
                      
                      {/* Botão de Play Central */}
                      <div class="bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl backdrop-blur-sm border border-white/20">
                        <svg class="w-8 h-8 md:w-10 md:h-10 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      
                      {/* Texto minimalista */}
                      <div class="absolute bottom-8 left-8">
                        <div class="bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/20">
                          <p class="text-white font-medium text-base md:text-lg">🎬 Apresentação AI HACKER</p>
                        </div>
                      </div>
                      
                      {/* Overlay sutil */}
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 transition-all duration-300"></div>
                    </div>
                  ) : (
                    /* Player do Vimeo - aparece no mesmo local */
                    <iframe
                      class="absolute top-0 left-0 w-full h-full"
                      src={`https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                      title="AI HACKER - Demonstração"
                      frameBorder="0"
                      allowFullscreen
                      allow="autoplay; fullscreen; picture-in-picture"
                    ></iframe>
                  )}
                </div>
              )}

              {/* Local Video */}
              {videoType === "local" && (
                <video 
                  controls 
                  class="w-full h-auto rounded-2xl shadow-2xl border border-cyan-500/20 bg-gray-900"
                  poster={posterPath}
                >
                  <source src={videoPath} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              )}
              
              {/* Placeholder do vídeo */}
              {videoType === "placeholder" && (
                <div class="w-full h-64 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-cyan-500/20 flex items-center justify-center">
                  <div class="text-center">
                    <svg class="w-16 h-16 text-cyan-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p class="text-cyan-300 font-medium">🎬 Configure seu vídeo</p>
                    <p class="text-gray-400 text-sm mt-2">Mude videoType para "vimeo-custom"</p>
                    <div class="mt-4 text-xs text-gray-500">
                      <p>📖 Veja: /public/videos/HOSTING-OPTIONS.md</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Value Proposition */}
          <div class="fade-in-sequence opacity-0 translate-y-4 transition-all duration-700 mb-12">
            <p class="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Domine os <span class="text-cyan-400 font-semibold">4 Pilares Fundamentais</span> para criar 
              <span class="text-emerald-400 font-semibold"> agentes IA ultra-lucrativos</span> que trabalham enquanto você dorme
            </p>
            <p class="text-lg text-gray-400 max-w-3xl mx-auto">
              O método completo que transforma qualquer pessoa em um 
              <span class="text-yellow-400 font-medium"> arquiteto de inteligência artificial</span> capaz de gerar renda passiva
            </p>
          </div>

          {/* Product Benefits */}
          <div class="fade-in-sequence opacity-0 translate-y-4 transition-all duration-700 mb-16">
            <div class="flex flex-wrap justify-center gap-6 text-sm">
              <div class="flex items-center bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg px-4 py-2">
                <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></div>
                <span class="text-emerald-300">Método dos 4 Pilares</span>
              </div>
              <div class="flex items-center bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-4 py-2">
                <div class="w-2 h-2 bg-cyan-500 rounded-full animate-pulse mr-2"></div>
                <span class="text-cyan-300">Automação Inteligente</span>
              </div>
              <div class="flex items-center bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-lg px-4 py-2">
                <div class="w-2 h-2 bg-yellow-500 rounded-full animate-pulse mr-2"></div>
                <span class="text-yellow-300">Implementação Prática</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
});