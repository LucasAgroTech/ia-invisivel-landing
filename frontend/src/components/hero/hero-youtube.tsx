import { component$ } from '@builder.io/qwik';

// Exemplo de como usar vídeo do YouTube no hero
export const YouTubeHero = component$(() => {
  // Cole o ID do seu vídeo do YouTube aqui
  const youtubeVideoId = "dQw4w9WgXcQ"; // Substitua pelo ID do seu vídeo
  
  return (
    <div class="fade-in-sequence opacity-0 translate-y-4 transition-all duration-700 mb-12">
      <div class="max-w-4xl mx-auto">
        
        {/* Versão Responsiva do YouTube */}
        <div class="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&showinfo=0&modestbranding=1&autoplay=0`}
            title="Vídeo Demonstração"
            frameBorder="0"
            allowFullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Opção com thumbnail personalizado que abre o YouTube */}
        {/* 
        <div class="relative group cursor-pointer">
          <img 
            src="/videos/youtube-thumbnail.jpg" 
            alt="Assistir no YouTube"
            class="w-full h-auto rounded-2xl shadow-2xl border border-cyan-500/20"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl group-hover:bg-black/20 transition-all">
            <a 
              href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
              target="_blank"
              class="bg-red-600 hover:bg-red-700 rounded-full p-6 transition-all group-hover:scale-110"
            >
              <svg class="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z"/>
              </svg>
            </a>
          </div>
        </div>
        */}
        
      </div>
    </div>
  );
});

// Como pegar o ID do YouTube:
// URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
// ID: dQw4w9WgXcQ (parte depois do v=) 