import { siteConfig } from '@/config';

/**
 * Seção 06 — DIFERENCIAIS
 * Apresentação visual com tipografia expressiva e numeração.
 */
export default function Differentials() {
  const { differentials } = siteConfig;

  return (
    <section className="bg-ph-offwhite py-24 lg:py-36">
      <div className="ph-container">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <span className="ph-eyebrow reveal text-ph-secondary">
            {differentials.eyebrow}
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-ph-deep font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {differentials.headline}
          </h2>
        </div>

        {/* Lista de diferenciais — layout editorial em 2 colunas */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-ph-grafite/10 border-t border-ph-grafite/10 sm:grid-cols-2 sm:divide-y-0 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-ph-grafite/10">
          {differentials.items.map((item, i) => (
            <div
              key={i}
              className="reveal group flex gap-6 py-10 sm:px-10 sm:first:pl-0 sm:last:pr-0"
              style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
            >
              <span className="font-serif text-3xl text-ph-secondary/60 transition-colors duration-500 group-hover:text-ph-secondary">
                {item.value}
              </span>
              <div>
                <h3 className="text-ph-deep font-serif text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-ph-grafite/75 text-[15px] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
