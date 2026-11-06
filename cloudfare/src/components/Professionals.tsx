import { siteConfig } from '@/config';

/**
 * Seção 05 — PROFISSIONAIS
 * Apresentação editorial dos profissionais. Composição clean,
 * sem aparência de lista corporativa.
 */
export default function Professionals() {
  const { professionals } = siteConfig;

  return (
    <section id="profissionais" className="bg-ph-offwhite py-24 lg:py-36">
      <div className="ph-container">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="ph-eyebrow reveal text-ph-secondary">
              {professionals.eyebrow}
            </span>
            <h2 className="reveal reveal-delay-1 mt-5 text-ph-deep font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              {professionals.headline}
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-sm text-ph-grafite/60 lg:col-span-5">
            {professionals.note}
          </p>
        </div>

        {/* Grid de profissionais */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {professionals.items.map((pro, i) => (
            <article
              key={i}
              className="reveal group"
              style={{ transitionDelay: `${0.12 * (i + 1)}s` }}
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={pro.image}
                  alt={pro.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ph-deep/10 transition-opacity duration-700 group-hover:opacity-0" />
              </div>

              <div className="mt-6">
                <h3 className="text-ph-deep font-serif text-2xl">
                  {pro.name}
                </h3>
                <p className="mt-1.5 text-sm text-ph-secondary">
                  {pro.role}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {pro.specialties.map((s, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-ph-deep/15 px-3 py-1 text-xs text-ph-grafite/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {pro.registration && (
                  <p className="mt-4 text-xs text-ph-grafite/50">
                    {pro.registration}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
