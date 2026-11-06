import { siteConfig } from '@/config';

const spanClasses: Record<string, string> = {
  wide: 'sm:col-span-2 sm:row-span-1 aspect-[16/10]',
  tall: 'sm:row-span-2 aspect-[3/4] sm:h-full',
  regular: 'aspect-[4/3]',
};

/**
 * Seção 04 — NOSSO ESPAÇO
 * Galeria fotográfica premium com composição assimétrica e
 * efeito de zoom sutil ao passar o mouse.
 */
export default function Gallery() {
  const { gallery } = siteConfig;

  return (
    <section id="estrutura" className="bg-ph-deep py-24 lg:py-36">
      <div className="ph-container">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <span className="ph-eyebrow reveal text-ph-beige/70">
            {gallery.eyebrow}
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-ph-offwhite font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {gallery.headline}
          </h2>
        </div>

        {/* Galeria — grid assimétrico */}
        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]">
          {gallery.images.map((img, i) => (
            <figure
              key={i}
              className={[
                'reveal group relative overflow-hidden rounded-sm',
                spanClasses[img.span ?? 'regular'] ??
                  spanClasses.regular,
              ].join(' ')}
              style={{ transitionDelay: `${0.1 * (i % 3)}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ph-grafite/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 p-5 opacity-0 transition-all duration-700 ease-smooth translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[11px] uppercase tracking-[0.24em] text-ph-offwhite/85">
                  {img.alt}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
