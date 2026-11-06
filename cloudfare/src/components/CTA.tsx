import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config';

/**
 * Seção 08 — CHAMADA PARA AGENDAMENTO
 * Alto impacto visual sobre fundo verde profundo.
 */
export default function CTA() {
  const { cta } = siteConfig;

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-ph-deep py-28 lg:py-40"
    >
      {/* Elemento gráfico sutil de fundo */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ph-secondary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-ph-secondary/15 blur-3xl"
        aria-hidden
      />

      <div className="ph-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="ph-eyebrow reveal text-ph-beige/70">
            {siteConfig.location}
          </span>
          <h2 className="reveal reveal-delay-1 mt-6 text-ph-offwhite font-serif text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-[3.6rem]">
            {cta.headline}
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-7 max-w-xl text-ph-offwhite/75 text-base font-light leading-relaxed sm:text-lg">
            {cta.text}
          </p>

          <div
            className="reveal reveal-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ph-offwhite px-8 py-4 text-sm font-medium text-ph-deep transition-all duration-500 ease-smooth hover:bg-white hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              {cta.buttonLabel}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
