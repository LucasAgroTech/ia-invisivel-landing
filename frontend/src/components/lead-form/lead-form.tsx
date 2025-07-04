import { component$, useSignal, $ } from '@builder.io/qwik';
import Button from '../ui/button';
import { apiEndpoints, type LeadRequest, type LeadResponse } from '../../lib/api';

export default component$(() => {
  const email = useSignal('');
  const name = useSignal('');
  const isSubmitting = useSignal(false);
  const isSubmitted = useSignal(false);
  const error = useSignal('');

  const handleSubmit = $(async (event: SubmitEvent) => {
    event.preventDefault();
    
    if (!email.value) {
      error.value = 'Email é obrigatório';
      return;
    }

    isSubmitting.value = true;
    error.value = '';

    try {
      const payload: LeadRequest = {
        email: email.value,
        name: name.value,
      };

      const response = await fetch(apiEndpoints.leads, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data: LeadResponse | { error: string } = await response.json();

      if (response.ok) {
        isSubmitted.value = true;
        // Limpar formulário
        email.value = '';
        name.value = '';
      } else {
        error.value = 'error' in data ? data.error : 'Erro ao processar solicitação';
      }
    } catch (err) {
      error.value = 'Erro de conexão. Tente novamente.';
    } finally {
      isSubmitting.value = false;
    }
  });

  if (isSubmitted.value) {
    return (
      <div class="max-w-md mx-auto">
        <div class="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-500/30 rounded-xl p-8 text-center">
          <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">
            Acesso Garantido
          </h3>
          <p class="text-gray-300 mb-6">
            Você está na lista. Aguarde instruções exclusivas em seu email.
          </p>
          <p class="text-sm text-gray-400">
            Verifique sua caixa de entrada e spam.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div class="max-w-md mx-auto">
      <form onSubmit$={handleSubmit} class="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Nome (opcional)"
            value={name.value}
            onInput$={(e) => name.value = (e.target as HTMLInputElement).value}
            class="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Seu melhor email"
            value={email.value}
            onInput$={(e) => email.value = (e.target as HTMLInputElement).value}
            required
            class="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          />
        </div>

        {error.value && (
          <div class="text-red-400 text-sm text-center bg-red-900/20 border border-red-500/30 rounded-lg p-3">
            {error.value}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          class="w-full"
          disabled={isSubmitting.value}
        >
          {isSubmitting.value ? 'Processando...' : 'Quero Meu Acesso Exclusivo'}
        </Button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-xs text-gray-500">
          Ao continuar, você concorda com nossos termos de privacidade.
          <br />
          <span class="text-cyan-400">Apenas para mentes preparadas.</span>
        </p>
      </div>
    </div>
  );
});