import { Quote } from 'lucide-react';
import { siteConfig } from '@/config';

/**
 * Seção 07 — DEPOIMENTOS
 * Layout editorial elegante. Permanece preparada para inserção
 * posterior quando houver depoimentos reais autorizados.
 */
export default function Testimonials() {
  const { testimonials } = siteConfig;
  const hasItems = testimonials.items.length > 0;

  return (
    <section className="bg-ph-beige py-24 lg:py-36">
      <div className="ph-container">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <span className="ph-eyebrow reveal text-ph-secondary">
            {testimonials.eyebrow}
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-ph-deep font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {testimonials.headline}
          </h2>
        </div>

        {hasItems ? (
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.items.map((t, i) => (
              <figure
                key={i}
                className="reveal flex flex-col rounded-sm bg-ph-offwhite p-8 lg:p-10"
                style={{ transitionDelay: `${0.12 * (i + 1)}s` }}
              >
                <Quote
                  className="h-8 w-8 text-ph-secondary/50"
                  strokeWidth={1}
                />
                <blockquote className="mt-6 flex-1 font-serif text-xl italic leading-relaxed text-ph-deep">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 border-t border-ph-grafite/10 pt-5">
                  <p className="text-sm font-medium text-ph-grafite">
                    {t.author}
                  </p>
                  {t.detail && (
                    <p className="mt-0.5 text-xs text-ph-grafite/55">
                      {t.detail}
                    </p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          // Estado preparado para inserção posterior
          <div className="reveal reveal-delay-2 mt-14 max-w-2xl rounded-sm border border-dashed border-ph-secondary/30 bg-ph-offwhite/60 p-10 lg:p-14">
            <Quote className="h-8 w-8 text-ph-secondary/40" strokeWidth={1} />
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-ph-deep/80">
              {testimonials.note}
            </p>
            <p className="mt-6 text-sm text-ph-grafite/55">
              Para inserir depoimentos, edite a seção{' '}
              <code className="rounded bg-ph-beige px-1.5 py-0.5 text-xs text-ph-deep">
                testimonials.items
              </code>{' '}
              no arquivo de configuração.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
