import { siteConfig } from '@/config';

/**
 * Seção 02 — APRESENTAÇÃO DA CLÍNICA
 * Layout editorial assimétrico: fotografia grande + texto
 * institucional + frase de destaque da marca.
 */
export default function About() {
  const { about } = siteConfig;

  return (
    <section id="sobre" className="bg-ph-offwhite py-24 lg:py-36">
      <div className="ph-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna imagem — assimétrica (7 colunas) */}
          <div className="reveal lg:col-span-7">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={about.image}
                alt={about.imageAlt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-smooth hover:scale-105"
              />
              {/* Selo de localização sobreposto */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-ph-deep/85 px-4 py-2 text-ph-offwhite backdrop-blur-sm">
                <span className="text-[11px] uppercase tracking-[0.22em]">
                  {siteConfig.location}
                </span>
              </div>
            </div>
          </div>

          {/* Coluna texto — 5 colunas */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <span className="ph-eyebrow reveal text-ph-secondary">
              {about.eyebrow}
            </span>
            <h2 className="reveal reveal-delay-1 mt-5 text-ph-deep font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              {about.headline}
            </h2>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="reveal text-ph-grafite/80 text-base font-light leading-relaxed sm:text-[17px]"
                  style={{ transitionDelay: `${0.12 * (i + 2)}s` }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Frase de destaque */}
            <blockquote className="reveal reveal-delay-3 mt-10 border-l-2 border-ph-secondary pl-6">
              <p className="font-serif text-xl italic text-ph-deep sm:text-2xl">
                {about.pullQuote}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
