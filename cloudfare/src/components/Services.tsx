import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config';

/**
 * Seção 03 — SERVIÇOS E ESPECIALIDADES
 * Cards editoriais com numeração, fotografia e interação
 * sutil ao passar o mouse. Evita aparência de dashboard.
 */
export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="servicos" className="bg-ph-beige py-24 lg:py-36">
      <div className="ph-container">
        {/* Cabeçalho da seção */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="ph-eyebrow reveal text-ph-secondary">
              {services.eyebrow}
            </span>
            <h2 className="reveal reveal-delay-1 mt-5 text-ph-deep font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              {services.headline}
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-sm text-ph-grafite/60 lg:col-span-5">
            {services.note}
          </p>
        </div>

        {/* Grade de serviços */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-ph-grafite/10 sm:grid-cols-2">
          {services.items.map((service) => (
            <article
              key={service.number}
              className="reveal group relative flex flex-col bg-ph-beige p-7 sm:p-9 transition-colors duration-700 ease-smooth hover:bg-ph-offwhite"
            >
              {/* Imagem revelada no hover (desktop) */}
              <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-sm">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ph-deep/15 transition-opacity duration-700 group-hover:opacity-0" />
              </div>

              {/* Numeração + nome */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-serif text-sm text-ph-secondary">
                    {service.number}
                  </span>
                  <h3 className="mt-2 text-ph-deep font-serif text-2xl sm:text-3xl">
                    {service.name}
                  </h3>
                </div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ph-deep/20 text-ph-deep transition-all duration-500 ease-smooth group-hover:bg-ph-deep group-hover:text-ph-offwhite">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>

              <p className="mt-4 text-ph-grafite/75 text-[15px] font-light leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
