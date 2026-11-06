import { ArrowDown, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config';

/**
 * Seção 01 — HERO
 * Abertura cinematográfica com imagem em grande escala, overlay
 * sutil, headline editorial e CTA para WhatsApp.
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Imagem de fundo com leve zoom de entrada */}
      <div className="absolute inset-0">
        <img
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          className="h-full w-full object-cover animate-[fadeInUp_1.6s_cubic-bezier(0.22,1,0.36,1)_both] scale-105"
          fetchPriority="high"
        />
        {/* Overlay gradual para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-ph-deep/55 via-ph-deep/30 to-ph-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ph-grafite/50 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between ph-container pt-32 pb-12 lg:pt-40">
        {/* Topo — localização */}
        <div className="flex items-center gap-2 text-white/80 animate-fade-in-up">
          <MapPin className="h-4 w-4" strokeWidth={1.5} />
          <span className="text-xs uppercase tracking-[0.28em] font-medium">
            {siteConfig.location}
          </span>
        </div>

        {/* Centro — headline */}
        <div className="max-w-4xl py-16">
          <h1
            className="text-white text-balance font-serif text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.5rem] animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            {siteConfig.hero.headline}
          </h1>
          <p
            className="mt-8 max-w-xl text-white/85 text-base sm:text-lg font-light leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.35s' }}
          >
            {siteConfig.hero.subheadline}
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-in-up"
            style={{ animationDelay: '0.55s' }}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ph-offwhite px-7 py-3.5 text-sm font-medium text-ph-deep transition-all duration-500 ease-smooth hover:bg-white hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              {siteConfig.hero.ctaLabel}
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ease-smooth hover:bg-white hover:text-ph-deep"
            >
              Conheça a clínica
            </a>
          </div>
        </div>

        {/* Base — indicador de rolagem */}
        <div className="flex items-end justify-between">
          <div className="hidden flex-col gap-3 text-white/60 sm:flex">
            <span className="text-[11px] uppercase tracking-[0.28em]">
              Role para descobrir
            </span>
          </div>

          {/* Indicador animado */}
          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/40 pt-2">
            <span className="h-2 w-1 rounded-full bg-white animate-scroll-dot" />
          </div>

          <div className="hidden items-center gap-2 text-white/60 sm:flex">
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
