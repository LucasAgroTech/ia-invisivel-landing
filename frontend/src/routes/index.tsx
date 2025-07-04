import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Hero from '../components/hero/hero';
import Pillars from '../components/pillars/pillars';
import Bonus from '../components/bonus/bonus';
import SocialProof from '../components/social-proof/social-proof';
import CTA from '../components/ui/cta';
import FAQ from '../components/faq/faq';

export default component$(() => {
  return (
    <>
      <Hero />
      <Pillars />
      <Bonus />
      <SocialProof />
      <CTA />
      <FAQ />
    </>
  );
});

export const head: DocumentHead = {
  title: 'AIHACKER - Domine as Estratégias de IA para Gerar Receita',
  meta: [
    {
      name: 'description',
      content: 'Curso completo para dominar ferramentas de IA e gerar receita. Acesso restrito disponível.',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};