import { MapPin, Phone, Instagram, Clock, ArrowUp } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config';

/**
 * Seção 09 — FOOTER
 * Rodapé sofisticado com identidade, contato, navegação
 * rápida e frase institucional.
 */
export default function Footer() {
  const { contact, nav, name, tagline, location } = siteConfig;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ph-grafite text-ph-offwhite">
      <div className="ph-container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ph-deep font-serif text-xl font-semibold text-ph-offwhite">
                P
              </span>
              <span className="font-serif text-xl tracking-tight">
                {name}
              </span>
            </div>
            <p className="mt-6 max-w-xs font-serif text-lg italic text-ph-offwhite/70">
              {tagline}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-ph-offwhite/55">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              {location}
            </p>
          </div>

          {/* Navegação rápida */}
          <nav className="lg:col-span-3">
            <h4 className="ph-eyebrow text-ph-offwhite/50">Navegação</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-ph-offwhite/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h4 className="ph-eyebrow text-ph-offwhite/50">Contato</h4>
            <ul className="mt-5 space-y-4 text-sm text-ph-offwhite/75">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <span>{contact.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {contact.address}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-white"
                >
                  <Instagram
                    className="mt-0.5 h-4 w-4 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>{contact.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div className="lg:col-span-2">
            <h4 className="ph-eyebrow flex items-center gap-1.5 text-ph-offwhite/50">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
              Horários
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-ph-offwhite/75">
              {contact.hours.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Base */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-ph-offwhite/45">
            © {new Date().getFullYear()} {name}. Todos os direitos reservados.
          </p>
          <button
            onClick={() => scrollTo('#inicio')}
            className="group flex items-center gap-2 text-xs text-ph-offwhite/55 transition-colors hover:text-white"
          >
            Voltar ao topo
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-white">
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
