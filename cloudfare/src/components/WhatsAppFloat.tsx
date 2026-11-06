import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/config';

/**
 * Botão flutuante de WhatsApp — sempre acessível, especialmente
 * no mobile. Aparece com leve delay após o carregamento.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ph-deep text-ph-offwhite shadow-[0_12px_30px_-10px_rgba(24,60,53,0.8)] transition-all duration-500 ease-smooth hover:scale-105 hover:bg-ph-secondary sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ph-grafite px-4 py-2 text-xs text-ph-offwhite opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:block">
        Fale conosco
      </span>
    </a>
  );
}
