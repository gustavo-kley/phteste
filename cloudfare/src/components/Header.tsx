import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config';

/**
 * Cabeçalho transparente sobre o hero que adquire fundo sólido
 * ao rolar. Menu hambúrguer funcional no mobile.
 */
export default function Header({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-smooth',
          scrolled
            ? 'bg-ph-offwhite/90 backdrop-blur-md shadow-[0_1px_0_rgba(36,40,37,0.08)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="ph-container flex items-center justify-between py-5 lg:py-6">
          {/* Logo */}
          <button
            onClick={() => handleNav('#inicio')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Physio Home — Início"
          >
            <span
              className={[
                'flex h-9 w-9 items-center justify-center rounded-md font-serif text-xl font-semibold transition-colors duration-500',
                scrolled
                  ? 'bg-ph-deep text-ph-offwhite'
                  : 'bg-ph-offwhite/15 text-white backdrop-blur-sm',
              ].join(' ')}
            >
              P
            </span>
            <span
              className={[
                'font-serif text-xl tracking-tight transition-colors duration-500',
                scrolled ? 'text-ph-deep' : 'text-white',
              ].join(' ')}
            >
              {siteConfig.name}
            </span>
          </button>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-9 lg:flex">
            {siteConfig.nav.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={[
                  'group relative text-sm font-medium tracking-wide transition-colors duration-300',
                  scrolled
                    ? 'text-ph-grafite/80 hover:text-ph-deep'
                    : 'text-white/80 hover:text-white',
                ].join(' ')}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-500 ease-smooth group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-500 ease-smooth',
                scrolled
                  ? 'bg-ph-deep text-ph-offwhite hover:bg-ph-secondary'
                  : 'border border-white/40 text-white hover:bg-white hover:text-ph-deep',
              ].join(' ')}
            >
              {siteConfig.hero.ctaLabel}
            </a>
          </div>

          {/* Botão hambúrguer mobile */}
          <button
            onClick={() => setOpen(true)}
            className={[
              'flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden',
              scrolled ? 'text-ph-deep' : 'text-white',
            ].join(' ')}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Overlay menu mobile */}
      <div
        className={[
          'fixed inset-0 z-[60] lg:hidden transition-all duration-500',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ph-deep/95 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        {/* Conteúdo */}
        <div className="relative flex h-full flex-col px-8 py-8">
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl text-ph-offwhite">
              {siteConfig.name}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ph-offwhite"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-6">
            {siteConfig.nav.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-left font-serif text-4xl text-ph-offwhite/90 transition-colors hover:text-white"
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                <span className="mr-4 text-sm align-middle text-ph-offwhite/40">
                  0{i + 1}
                </span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-ph-offwhite px-7 py-4 text-sm font-medium text-ph-deep"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              {siteConfig.hero.ctaLabel}
            </a>
            <p className="mt-6 text-center text-sm text-ph-offwhite/50">
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
