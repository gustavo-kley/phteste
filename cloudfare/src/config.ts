/**
 * ============================================================
 *  PHYSIO HOME — CONFIGURAÇÃO CENTRAL DO SITE
 * ============================================================
 *
 *  Este é o ÚNICO arquivo que você precisa editar para
 *  personalizar o conteúdo do site. Todos os textos, imagens,
 *  telefones, endereços e serviços estão reunidos aqui.
 *
 *  Para alterar cores e fontes, edite `tailwind.config.js`
 *  e os blocos de cor definidos lá.
 *
 *  Convenção: campos marcados como "[A confirmar]" são
 *  placeholders para informações ainda não confirmadas pela
 *  clínica e devem ser substituídos antes da publicação.
 * ============================================================
 */

export type ServiceItem = {
  /** Numeração exibida no card (01, 02, ...) */
  number: string;
  /** Nome da modalidade / especialidade */
  name: string;
  /** Descrição curta exibida no card */
  description: string;
  /** URL da fotografia relacionada */
  image: string;
  /** Texto alternativo da imagem (acessibilidade / SEO) */
  alt: string;
};

export type ProfessionalItem = {
  /** Nome do profissional */
  name: string;
  /** Formação acadêmica */
  role: string;
  /** Especialidades / áreas de atuação */
  specialties: string[];
  /** Registro profissional (CREFITO etc.) quando aplicável */
  registration?: string;
  /** URL da fotografia */
  image: string;
  /** Texto alternativo da imagem */
  alt: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  /** Layout do tile na grade (controla o tamanho) */
  span?: 'tall' | 'wide' | 'regular';
};

export type TestimonialItem = {
  quote: string;
  author: string;
  /** Identificação adicional (ex.: "Paciente desde 2023") */
  detail?: string;
};

export const siteConfig = {
  // --------------------------------------------------------
  //  IDENTIDADE DA CLÍNICA
  // --------------------------------------------------------
  name: 'Physio Home',
  /** Cidade — Estado exibido no topo e no rodapé */
  location: 'Lages — SC',
  /** Frase institucional discreta exibida no rodapé */
  tagline: 'Movimento é qualidade de vida.',

  // --------------------------------------------------------
  //  CONTATO — substitua pelos dados oficiais
  // --------------------------------------------------------
  contact: {
    /** Número de WhatsApp no formato internacional, somente dígitos */
    whatsappNumber: '5549000000000',
    /** Mensagem pré-preenchida ao clicar no botão do WhatsApp */
    whatsappMessage:
      'Olá! Gostaria de agendar uma avaliação na Physio Home.',
    /** Telefone exibido no rodapé (texto livre) */
    phoneDisplay: '(49) 0000-0000',
    /** Endereço exibido no rodapé */
    address: 'Rua Exemplo, 000 — Centro — Lages, SC',
    /** Link do Google Maps para o endereço */
    mapsUrl: 'https://maps.google.com/?q=Lages+SC',
    /** Instagram — handle com @ e URL */
    instagramHandle: '@physiohome',
    instagramUrl: 'https://instagram.com/physiohome',
    /** Horário de atendimento (texto livre) — [A confirmar] */
    hours: [
      'Segunda a Sexta — 08h às 19h',
      'Sábado — 08h às 12h',
    ],
  },

  // --------------------------------------------------------
  //  NAVEGAÇÃO
  // --------------------------------------------------------
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Contato', href: '#contato' },
  ],

  // --------------------------------------------------------
  //  HERO
  // --------------------------------------------------------
  hero: {
    headline: 'Movimento é qualidade de vida.',
    subheadline:
      'Na Physio Home, acreditamos que cuidar do movimento é transformar a maneira de viver. Conheça uma experiência de atendimento voltada ao seu bem-estar.',
    /** Fotografia principal (ambiente de fisioterapia moderno) */
    image:
      'https://images.pexels.com/photos/5793651/pexels-photo-5793651.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt:
      'Fisioterapeuta avaliando postura de paciente em clínica moderna e iluminada',
    ctaLabel: 'Agende sua avaliação',
  },

  // --------------------------------------------------------
  //  APRESENTAÇÃO DA CLÍNICA
  // --------------------------------------------------------
  about: {
    eyebrow: 'A clínica',
    headline: 'Mais do que cuidar, transformar movimentos.',
    paragraphs: [
      'A Physio Home nasceu do desejo de oferecer uma fisioterapia verdadeiramente humanizada — onde cada paciente é recebido como único, com um plano de cuidado pensado para a sua história, o seu corpo e os seus objetivos.',
      'Acreditamos que o movimento é a base da qualidade de vida. Por isso, unimos acompanhamento profissional, estrutura especializada e atenção individual para que cada sessão seja um passo concreto em direção ao bem-estar.',
    ],
    /** Frase de destaque da marca */
    pullQuote:
      'Cuidar do movimento é, antes de tudo, cuidar da maneira como cada pessoa vive.',
    image:
      'https://images.pexels.com/photos/5793788/pexels-photo-5793788.jpeg?auto=compress&cs=tinysrgb&w=1280',
    imageAlt:
      'Fisioterapeuta alongando o braço de uma paciente em sala com luz natural',
  },

  // --------------------------------------------------------
  //  SERVIÇOS E ESPECIALIDADES
  //  Substitua nomes, descrições e imagens conforme as
  //  modalidades confirmadas pela clínica.
  // --------------------------------------------------------
  services: {
    eyebrow: 'Serviços',
    headline: 'Cuidado especializado em cada fase do seu movimento.',
    note: 'As modalidades abaixo são placeholders editáveis — substitua pelos serviços confirmados pela clínica.',
    items: [
      {
        number: '01',
        name: 'Fisioterapia Individual',
        description:
          'Avaliação e tratamento personalizados, com plano de cuidado construído a partir das suas necessidades e objetivos.',
        image:
          'https://images.pexels.com/photos/5793950/pexels-photo-5793950.jpeg?auto=compress&cs=tinysrgb&w=1280',
        alt: 'Profissional conduzindo ajuste postural de paciente',
      },
      {
        number: '02',
        name: 'Reabilitação & Movimento',
        description:
          'Recuperação funcional orientada por etapas, com foco em segurança, autonomia e retorno gradual às atividades.',
        image:
          'https://images.pexels.com/photos/20860616/pexels-photo-20860616.jpeg?auto=compress&cs=tinysrgb&w=1280',
        alt: 'Fisioterapeuta auxiliando paciente em exercício de pernas',
      },
      {
        number: '03',
        name: 'Pilates Terapêutico',
        description:
          'Sessões que conjugam respiração, controle e força para integrar corpo e movimento de forma consciente.',
        image:
          'https://images.pexels.com/photos/18499500/pexels-photo-18499500.png?auto=compress&cs=tinysrgb&w=1280',
        alt: 'Estúdio de Pilates com reformers de madeira em ambiente minimalista',
      },
      {
        number: '04',
        name: 'Terapia Manual',
        description:
          'Técnicas manuais voltadas à mobilidade, ao alívio de tensões e à reorganização do movimento.',
        image:
          'https://images.pexels.com/photos/6629555/pexels-photo-6629555.jpeg?auto=compress&cs=tinysrgb&w=1280',
        alt: 'Mãos aplicando técnica de massagem terapêutica nas costas',
      },
    ] as ServiceItem[],
  },

  // --------------------------------------------------------
  //  GALERIA — NOSSO ESPAÇO
  // --------------------------------------------------------
  gallery: {
    eyebrow: 'Estrutura',
    headline: 'Um ambiente pensado para o seu bem-estar.',
    images: [
      {
        src: 'https://images.pexels.com/photos/10521232/pexels-photo-10521232.jpeg?auto=compress&cs=tinysrgb&w=1280',
        alt: 'Sala iluminada de spa clínico com maca de atendimento',
        span: 'wide',
      },
      {
        src: 'https://images.pexels.com/photos/18499504/pexels-photo-18499504.png?auto=compress&cs=tinysrgb&w=900',
        alt: 'Estúdio contemporâneo com reformers de madeira',
        span: 'tall',
      },
      {
        src: 'https://images.pexels.com/photos/5827294/pexels-photo-5827294.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Armário branco com instrumentos e materiais de atendimento',
        span: 'regular',
      },
      {
        src: 'https://images.pexels.com/photos/5888073/pexels-photo-5888073.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Atendimento de terapia em ambiente tranquilo',
        span: 'regular',
      },
      {
        src: 'https://images.pexels.com/photos/36833354/pexels-photo-36833354.jpeg?auto=compress&cs=tinysrgb&w=1280',
        alt: 'Interior de estúdio com reformers em atmosfera calma',
        span: 'wide',
      },
    ] as GalleryImage[],
  },

  // --------------------------------------------------------
  //  PROFISSIONAIS
  //  [A confirmar] — substitua por dados reais dos
  //  profissionais, incluindo registros profissionais.
  // --------------------------------------------------------
  professionals: {
    eyebrow: 'Equipe',
    headline: 'Profissionais dedicados ao seu cuidado.',
    note: 'As informações abaixo são placeholders. Substitua por nomes, formações, especialidades e registros profissionais confirmados.',
    items: [
      {
        name: '[Nome do profissional]',
        role: 'Fisioterapeuta — [Formação]',
        specialties: ['[Especialidade 1]', '[Especialidade 2]'],
        registration: 'CREFITO-SC [nº]',
        image:
          'https://images.pexels.com/photos/20860584/pexels-photo-20860584.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Fisioterapeuta em atendimento clínico',
      },
      {
        name: '[Nome do profissional]',
        role: 'Fisioterapeuta — [Formação]',
        specialties: ['[Especialidade 1]', '[Especialidade 2]'],
        registration: 'CREFITO-SC [nº]',
        image:
          'https://images.pexels.com/photos/5793917/pexels-photo-5793917.jpeg?auto=compress&cs=tinysrgb&w=900',
        alt: 'Fisioterapeuta aplicando terapia em paciente',
      },
    ] as ProfessionalItem[],
  },

  // --------------------------------------------------------
  //  DIFERENCIAIS
  // --------------------------------------------------------
  differentials: {
    eyebrow: 'Diferenciais',
    headline: 'O cuidado em cada detalhe.',
    items: [
      {
        value: '01',
        title: 'Atendimento individualizado',
        text: 'Cada sessão é conduzida com foco exclusivo em você — sem rotinas genéricas.',
      },
      {
        value: '02',
        title: 'Acompanhamento profissional',
        text: 'Evolução orientada e registrada, com ajustes constantes ao seu plano de cuidado.',
      },
      {
        value: '03',
        title: 'Estrutura especializada',
        text: 'Ambientes e equipamentos pensados para acolher, mover e reabilitar com segurança.',
      },
      {
        value: '04',
        title: 'Atenção às suas necessidades',
        text: 'Escuta ativa e planos construídos a partir da sua história e dos seus objetivos.',
      },
    ],
  },

  // --------------------------------------------------------
  //  DEPOIMENTOS
  //  [A confirmar] — insira apenas depoimentos reais e
  //  autorizados. Caso não haja conteúdo confirmado, a
  //  seção permanece preparada para inserção posterior.
  // --------------------------------------------------------
  testimonials: {
    eyebrow: 'Depoimentos',
    headline: 'Histórias que movem.',
    note: 'Esta seção está preparada para receber depoimentos reais autorizados pelos pacientes.',
    items: [] as TestimonialItem[],
  },

  // --------------------------------------------------------
  //  CHAMADA PARA AGENDAMENTO
  // --------------------------------------------------------
  cta: {
    headline: 'Seu próximo passo começa com cuidado.',
    text: 'Entre em contato com a nossa equipe e descubra como podemos ajudar você a cuidar melhor do seu movimento e bem-estar.',
    buttonLabel: 'Agendar pelo WhatsApp',
  },
} as const;

// --------------------------------------------------------
//  Helper: monta o link de WhatsApp com mensagem pré-preenchida
// --------------------------------------------------------
export function whatsappLink(
  number: string = siteConfig.contact.whatsappNumber,
  message: string = siteConfig.contact.whatsappMessage,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
