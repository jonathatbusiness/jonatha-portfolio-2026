import type { AreaId, Project } from "./content";

const areas = {
  instructional: "instructional-design" as AreaId,
  visual: "visual-design" as AreaId,
  digital: "digital-products" as AreaId,
};

const mediaAltPt = {
  canteiro: "Tela introdutória do curso Canteiro de Ideias com identidade visual verde inspirada em cultivo e crescimento.",
  jornada: "Tela do curso Jornada do Pós-venda para equipes de montagem da Todeschini.",
  diversidade: "Tela do curso gamificado sobre diversidade desenvolvido para a Cotrijal.",
  evoluir: "Thumbnail do vídeo de apresentação da plataforma de aprendizagem EvoluIR Cotrijal.",
  cc: "Thumbnail do vídeo institucional sobre transformação e experiência do cliente da C&C.",
  classic: "Capa do guia essencial de identidade visual da Classic Administrações e Participações.",
  social: "Peça gráfica para redes sociais com composição visual, hierarquia tipográfica e tratamento de imagem.",
  h2: "Dashboard do JonJobs H2 com busca e filtros para vagas sazonais nos Estados Unidos.",
  canada: "Interface do JonJobs Canada com filtros para vagas abertas a candidatos internacionais.",
  discere: "Interface do DiscereNow mostrando o fluxo de documentos Word para cursos SCORM ou Web.",
};

const mediaAltEn = {
  canteiro: "Introductory screen for the Canteiro de Ideias course with a green visual identity inspired by cultivation and growth.",
  jornada: "Screen from the Jornada do Pós-venda course for Todeschini assembly teams.",
  diversidade: "Screen from the gamified diversity course developed for Cotrijal.",
  evoluir: "Thumbnail for the EvoluIR Cotrijal learning platform presentation video.",
  cc: "Thumbnail for the institutional video about transformation and customer experience at C&C.",
  classic: "Cover of the essential visual identity guidelines for Classic Administrações e Participações.",
  social: "Social media design piece with visual composition, typographic hierarchy and image treatment.",
  h2: "JonJobs H2 dashboard with search and filters for seasonal jobs in the United States.",
  canada: "JonJobs Canada interface with filters for jobs open to international candidates.",
  discere: "DiscereNow interface showing the flow from Word documents to SCORM or Web courses.",
};

export const projectsPt: Project[] = [
  {
    slug: "canteiro-de-ideias",
    area: areas.instructional,
    title: "Canteiro de Ideias",
    client: "Cotrijal",
    subtitle: "Uma experiência de aprendizagem construída a partir da metáfora de ideias que são semeadas, cuidadas e transformadas em resultados.",
    summary: "Experiência interativa criada para apresentar um programa interno de inovação e incentivar colaboradores a desenvolver e compartilhar ideias.",
    cardSummary: "Experiência interativa para apresentar um programa interno de inovação e incentivar colaboradores a compartilhar ideias.",
    featured: true,
    status: "completed",
    role: ["Storyline Developer", "Visual Designer", "Instructional Design Support"],
    services: ["Desenvolvimento em Storyline", "Identidade visual", "Design de interface", "Criação de assets", "Adaptação de conteúdo", "Suporte instrucional"],
    tools: ["Articulate Storyline 360", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Storyline 360", "Visual Identity", "Learning Experience"],
    media: [{ type: "external-demo", href: "https://storyline-demos-jonatha-teixeira.netlify.app/#/player/Canteiro-de-Ideias-(Cotrijal)", alt: mediaAltPt.canteiro }],
    links: [{ label: "Abrir demonstração", href: "https://storyline-demos-jonatha-teixeira.netlify.app/#/player/Canteiro-de-Ideias-(Cotrijal)", type: "course-demo", external: true }],
    content: {
      overview: [
        "O Canteiro de Ideias é um programa da Cotrijal por meio do qual colaboradores podem registrar sugestões de melhoria e acompanhar um processo interno de análise e desenvolvimento dessas propostas.",
        "A ligação da cooperativa com o campo serviu como ponto de partida para construir uma experiência visual conectada à identidade e ao contexto da organização.",
      ],
      challenge: [
        "O projeto precisava explicar o funcionamento do programa de maneira simples, envolvente e coerente com o nome Canteiro de Ideias e com o slogan Onde ideias são semeadas.",
        "A experiência precisava ajudar o colaborador a perceber a ideia como algo que passa por etapas, recebe contribuições e amadurece até gerar resultados.",
      ],
      role: ["Atuei no desenvolvimento da experiência em Storyline, na criação integral da identidade visual e como suporte ao trabalho de Design Instrucional."],
      approach: [
        "A direção visual foi construída a partir da metáfora do cultivo: assim como um broto precisa ser semeado, alimentado e cuidado para crescer, uma ideia também passa por etapas e ganha forma.",
        "Formas orgânicas, elementos associados ao solo, crescimento e vegetação, além de uma paleta alinhada à organização, reforçaram essa narrativa.",
      ],
      solution: ["A experiência foi estruturada como uma jornada visual na qual o usuário conhece o programa, compreende como uma ideia é registrada e acompanha sua evolução dentro da organização."],
      outcome: ["O projeto resultou em uma experiência integrada ao programa e ao contexto da Cotrijal. O protótipo inicial foi aprovado na primeira apresentação e orientou a produção do restante da experiência."],
    },
    seo: {
      title: "Canteiro de Ideias — Storyline e Design de Aprendizagem | Jonatha Teixeira",
      description: "Case de uma experiência interativa desenvolvida para o programa Canteiro de Ideias da Cotrijal, com identidade visual, Storyline e suporte em Design Instrucional.",
    },
  },
  {
    slug: "evoluir-cotrijal",
    area: areas.visual,
    title: "EvoluIR Cotrijal",
    client: "Cotrijal",
    subtitle: "Roteiro, storytelling, direção visual e edição desenvolvidos em uma semana para uma apresentação de alto impacto.",
    summary: "Vídeo de apresentação da plataforma de aprendizagem da Cotrijal, criado com linguagem de trailer para um grande evento.",
    cardSummary: "Vídeo de apresentação da plataforma de aprendizagem da Cotrijal, criado com linguagem de trailer.",
    featured: true,
    status: "completed",
    role: ["Video Editor", "Motion Designer", "Visual Storyteller", "Script Adaptation"],
    services: ["Storytelling", "Adaptação de roteiro", "Edição de vídeo", "Direção visual", "Seleção de assets", "Motion graphics"],
    tools: ["Adobe After Effects", "Adobe Photoshop"],
    tags: ["Storytelling", "Video Editing", "Motion Design"],
    media: [{ type: "video", href: "https://youtu.be/7LTbuE3VbNM", videoId: "7LTbuE3VbNM", alt: mediaAltPt.evoluir }],
    links: [{ label: "Assistir ao vídeo", href: "https://youtu.be/7LTbuE3VbNM", type: "watch-video", external: true }],
    content: {
      overview: ["A Cotrijal precisava apresentar sua plataforma de aprendizagem, EvoluIR, durante um evento de grande porte.", "O vídeo deveria comunicar relevância, transmitir energia e criar expectativa, com uma linguagem próxima de trailer."],
      challenge: ["O prazo total era de aproximadamente uma semana, incluindo roteiro, storytelling, assets, imagens, música, edição e finalização.", "Também era necessário preservar a coerência narrativa durante revisões internas."],
      role: ["Fui responsável pela adaptação e reescrita do roteiro, construção do storytelling, seleção de assets, direção visual, edição, montagem e escolha das músicas."],
      approach: ["O texto inicial foi reorganizado para criar progressão dramática: contexto, transformação, apresentação da plataforma e fechamento de impacto.", "Durante as revisões, articulei a lógica narrativa para avaliar mudanças segundo impacto em ritmo, continuidade e experiência do público."],
      solution: ["O resultado foi um vídeo com aparência de trailer institucional, usando ritmo crescente, música, imagens, animações, textos e transições."],
      outcome: ["O vídeo foi aprovado pelo cliente na primeira versão, exigindo apenas pequenos ajustes pontuais antes da apresentação."],
    },
    seo: { title: "EvoluIR Cotrijal — Vídeo de Apresentação | Jonatha Teixeira", description: "Case de vídeo institucional com storytelling, direção visual, edição e motion design para a plataforma EvoluIR Cotrijal." },
  },
  {
    slug: "jonjobs-h2",
    area: areas.digital,
    title: "JonJobs H2",
    subtitle: "Um produto digital que transforma listas extensas e fragmentadas de vagas sazonais em um fluxo de candidatura mais claro e executável.",
    summary: "Plataforma para encontrar, filtrar e organizar candidaturas a vagas sazonais H-2B nos Estados Unidos.",
    cardSummary: "Plataforma para encontrar, filtrar e organizar candidaturas a vagas sazonais H-2B nos Estados Unidos.",
    featured: true,
    status: "active",
    role: ["Product Designer", "Solution Architect", "UX/UI Designer", "AI-assisted Builder", "Product Owner"],
    services: ["Estratégia de produto", "Arquitetura de solução", "UX", "UI Design", "Organização de dados", "Automação", "Monetização", "Implementação assistida por IA"],
    tools: ["React", "Supabase", "Firebase", "Vercel", "GitHub", "Kiwify", "Gmail", "ChatGPT", "Codex"],
    tags: ["Product Design", "UX/UI", "AI-assisted Development"],
    media: [{ type: "website", href: "https://www.jonjobsh2.com.br/", alt: mediaAltPt.h2 }],
    links: [{ label: "Visitar produto", href: "https://www.jonjobsh2.com.br/", type: "visit-website", external: true }],
    content: {
      overview: ["Pessoas interessadas em vagas H-2B normalmente precisam pesquisar oportunidades em grandes listas, interpretar períodos sazonais, localizar contatos e organizar manualmente candidaturas.", "O JonJobs H2 centraliza esse processo em uma interface criada para quem deseja encontrar e se candidatar a vagas sazonais nos Estados Unidos."],
      challenge: ["A fonte oficial concentra milhares de oportunidades, mas a experiência de busca e organização não foi projetada para o fluxo específico de candidatos.", "Isso exige tempo, repetição e controle manual, especialmente ao consultar vagas de diferentes anos e temporadas."],
      role: ["Idealizei e arquitetei o produto, incluindo proposta de valor, estrutura, fluxos, regras, organização dos dados, UX, interface, funcionalidades, conteúdo e modelo de acesso.", "Utilizei ferramentas de inteligência artificial, incluindo ChatGPT e Codex, para transformar decisões de produto e arquitetura em uma aplicação funcional."],
      approach: ["O produto foi estruturado a partir do fluxo real de um candidato: localizar vagas, filtrar oportunidades, revisar informações, preparar currículo, enviar candidatura e registrar o que já foi feito."],
      solution: ["O dashboard reúne listas por temporada e ano, busca, filtros, registro de vagas utilizadas, fluxo de candidatura por e-mail, upload de currículo e gerador de currículo H-2B em inglês."],
      outcome: ["O produto está ativo e disponível publicamente, com modelo gratuito e pago, múltiplas listas de vagas, ferramentas de candidatura e geração de currículo."],
      note: ["Não há métricas comerciais ou depoimentos públicos apresentados neste case."],
    },
    seo: { title: "JonJobs H2 — Produto Digital para Vagas H-2B | Jonatha Teixeira", description: "Case de produto digital com UX/UI, arquitetura de solução e desenvolvimento assistido por IA para candidaturas H-2B." },
  },
];

const remainingPt: Project[] = [
  {
    slug: "jornada-pos-venda-trilha-montagem",
    area: areas.instructional,
    title: "Jornada do Pós-venda — Trilha Montagem",
    client: "Todeschini",
    subtitle: "Uma direção visual criada sob prazo crítico e transformada em sistema para uma série de cursos do pós-venda.",
    summary: "Curso interativo para equipes de montagem, desenvolvido a partir de uma identidade visual criada e aprovada em cinco dias.",
    cardSummary: "Curso interativo para equipes de montagem, com identidade visual criada e aprovada em cinco dias.",
    featured: false,
    status: "completed",
    role: ["Storyline Developer", "Visual Designer", "Asset Designer"],
    services: ["Desenvolvimento em Storyline", "Direção visual", "Sistema visual para cursos", "Design de interface", "Criação de assets", "Prototipação"],
    tools: ["Articulate Storyline 360", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Storyline 360", "Visual System", "Rapid Prototyping"],
    media: [{ type: "external-demo", href: "https://storyline-demos-jonatha-teixeira.netlify.app/#/player/01-Jornada-do-p%C3%B3s-venda-Trilha-Montagem-(Todeschini)", alt: mediaAltPt.jornada }],
    links: [{ label: "Abrir demonstração", href: "https://storyline-demos-jonatha-teixeira.netlify.app/#/player/01-Jornada-do-p%C3%B3s-venda-Trilha-Montagem-(Todeschini)", type: "course-demo", external: true }],
    content: {
      overview: ["Projeto de uma trilha de aprendizagem destinada às equipes responsáveis pela montagem de produtos Todeschini."],
      challenge: ["O cliente precisava aprovar rapidamente uma identidade visual para o protótipo inicial. Recebi o desafio com prazo de cinco dias e sem acesso direto ao briefing original."],
      role: ["Atuei como Storyline Developer e Visual Designer, com foco em transformar o material fornecido em uma experiência digital visualmente consistente e tecnicamente funcional."],
      approach: ["Tratei o protótipo como a base de um sistema visual reutilizável para diferentes cursos da trilha, alinhando marca, clareza de conteúdo e viabilidade de produção."],
      solution: ["O protótipo foi apresentado dentro do prazo e aprovado pelo cliente, passando a orientar layouts, navegação, recursos gráficos, interações e assets dos demais cursos."],
      outcome: ["A aprovação recuperou o andamento do projeto e estabeleceu uma direção visual reutilizável para toda a série."],
      note: ["Este case descreve desenvolvimento em Storyline, design visual, interface de curso e criação de assets, sem apresentar Jonatha como Instructional Designer principal."],
    },
    seo: { title: "Jornada do Pós-venda — Storyline e Sistema Visual | Jonatha Teixeira", description: "Case de curso interativo em Storyline para Todeschini, com direção visual e sistema de interface para trilha de pós-venda." },
  },
  {
    slug: "mini-miv-classic",
    area: areas.visual,
    title: "Mini MIV Classic",
    client: "Classic Administrações e Participações Ltda.",
    subtitle: "Um símbolo arquitetônico construído a partir das iniciais da marca e de uma trajetória visual ascendente.",
    summary: "Identidade visual criada para representar solidez, crescimento e presença corporativa, acompanhada por diretrizes essenciais de aplicação.",
    cardSummary: "Identidade visual para representar solidez, crescimento e presença corporativa, com diretrizes essenciais.",
    featured: false,
    status: "completed",
    role: ["Brand Designer", "Visual Designer", "Identity Designer"],
    services: ["Conceito de marca", "Design de logotipo", "Sistema visual", "Paleta cromática", "Tipografia", "Diretrizes essenciais"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    tags: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    media: [{ type: "gallery", alt: mediaAltPt.classic }],
    content: {
      overview: ["A Classic precisava de uma identidade visual capaz de transmitir presença corporativa sólida e contemporânea.", "O escopo era objetivo: desenvolver a marca e organizar as principais regras para aplicação consistente."],
      challenge: ["O projeto partiu de poucas informações iniciais e precisava transformar uma solicitação ampla por uma logo em uma solução com conceito, coerência e regras mínimas de uso."],
      role: ["Fui responsável pela criação do conceito, desenho do símbolo, composição da assinatura visual, definição cromática, seleção tipográfica e organização das diretrizes essenciais."],
      approach: ["O símbolo foi construído a partir de duas letras S presentes no nome Classic, organizadas verticalmente para sugerir edifícios, estrutura, administração e patrimônio."],
      solution: ["A entrega foi organizada em um Mini MIV com assinatura principal, conceito, paleta, tipografia, área de proteção, aplicações básicas e orientações essenciais."],
      outcome: ["A entrega transformou uma demanda inicial pouco estruturada em uma identidade com conceito definido e regras práticas de aplicação."],
    },
    seo: { title: "Mini MIV Classic — Identidade Visual | Jonatha Teixeira", description: "Case de identidade visual e diretrizes essenciais para Classic Administrações e Participações." },
  },
  {
    slug: "jonjobs-canada",
    area: areas.digital,
    title: "JonJobs Canada",
    subtitle: "Busca de vagas, sinais de elegibilidade internacional e preparação de currículo em um único produto.",
    summary: "Ferramenta de busca de empregos no Canadá com filtros para candidatos internacionais e gerador de currículo otimizado para ATS.",
    cardSummary: "Busca de empregos no Canadá com filtros para candidatos internacionais e gerador de currículo ATS.",
    featured: false,
    status: "active",
    role: ["Product Designer", "UX/UI Designer", "Solution Architect", "AI-assisted Builder", "Content Strategist"],
    services: ["Estratégia de produto", "Pesquisa de requisitos", "UX", "UI Design", "Filtros e taxonomia", "Gerador de currículo", "Internacionalização", "Implementação assistida por IA"],
    tools: ["React", "Vite", "JavaScript", "CSS", "i18next", "Upstash Redis", "PDF.js", "Vercel", "ChatGPT", "Codex"],
    tags: ["Job Search", "ATS Resume", "UX/UI"],
    media: [{ type: "website", href: "https://www.jonjobscanada.com/", alt: mediaAltPt.canada }],
    links: [{ label: "Visitar produto", href: "https://www.jonjobscanada.com/", type: "visit-website", external: true }],
    content: {
      overview: ["Candidatos internacionais que procuram oportunidades no Canadá precisam interpretar informações como LMIA, NOC, província, contrato e abertura para pessoas fora do país."],
      challenge: ["Plataformas generalistas não priorizam necessariamente os sinais mais relevantes para candidatos internacionais e muitos usuários também precisam adaptar o currículo aos padrões canadenses."],
      role: ["Idealizei a proposta do produto, defini experiência, filtros, arquitetura das páginas, direção visual, conteúdo e ferramentas de apoio ao candidato."],
      approach: ["O produto foi estruturado em duas necessidades: encontrar oportunidades mais relevantes e preparar uma candidatura mais adequada."],
      solution: ["A busca destaca província, NOC, recência, LMIA e abertura internacional; o gerador orienta a criação de currículo ATS-friendly com exportação em PDF."],
      outcome: ["A aplicação está ativa e disponível publicamente, sem métricas de usuários, candidaturas ou contratações apresentadas."],
    },
    seo: { title: "JonJobs Canada — Produto Digital para Busca de Empregos | Jonatha Teixeira", description: "Case de produto digital com UX/UI, filtros para candidatos internacionais e gerador de currículo ATS." },
  },
  {
    slug: "diversidade-cotrijal",
    area: areas.instructional,
    title: "Diversidade",
    client: "Cotrijal",
    subtitle: "Uma experiência gamificada criada dentro das limitações técnicas do Genially.",
    summary: "Curso gamificado sobre diversidade no ambiente corporativo, desenvolvido no Genially com linguagem visual inspirada em jogos mobile.",
    cardSummary: "Curso gamificado sobre diversidade, desenvolvido no Genially com linguagem inspirada em jogos mobile.",
    featured: false,
    status: "completed",
    role: ["Genially Developer", "Instructional Design Support", "Visual Designer"],
    services: ["Desenvolvimento no Genially", "Gamificação", "Design visual", "Criação de assets", "Adaptação instrucional", "Design de interação"],
    tools: ["Genially", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Genially", "Gamification", "Instructional Design"],
    media: [{ type: "external-demo", href: "https://storyline-demos-jonatha-teixeira.netlify.app/#/player-g/Diversidade-(Cotrijal)", alt: mediaAltPt.diversidade }],
    links: [{ label: "Abrir demonstração", href: "https://storyline-demos-jonatha-teixeira.netlify.app/#/player-g/Diversidade-(Cotrijal)", type: "course-demo", external: true }],
    content: {
      overview: ["O projeto abordou diversidade no ambiente corporativo por meio de uma experiência mais participativa do que um curso linear convencional."],
      challenge: ["O curso precisava transmitir sensação de jogo, mas seria desenvolvido no Genially, com limitações de lógica, controle e personalização."],
      role: ["Atuei como desenvolvedor no Genially e como suporte de Design Instrucional, adaptando propostas de conteúdo e interação aos limites técnicos da plataforma."],
      approach: ["A experiência foi inspirada em jogos mobile, com etapas reconhecíveis, feedback, pontuação e sensação de avanço."],
      solution: ["O curso foi estruturado como uma jornada gamificada com personagens, telas de progressão, estímulos sonoros, feedback visual e linguagem próxima de jogos digitais acessíveis."],
      outcome: ["A solução demonstrou que era possível construir uma experiência coerente e envolvente mesmo dentro das limitações do Genially."],
    },
    seo: { title: "Diversidade Cotrijal — Genially e Gamificação | Jonatha Teixeira", description: "Case de curso gamificado sobre diversidade desenvolvido no Genially com suporte instrucional e design visual." },
  },
  {
    slug: "transformacao-experiencia-cliente-cc",
    area: areas.visual,
    title: "Transformação e Experiência do Cliente",
    client: "C&C",
    subtitle: "Uma narrativa institucional construída sem briefing formal, a partir da leitura estratégica do material fornecido.",
    summary: "Vídeo institucional criado a partir de um texto-base, transformando palavras-chave e informações dispersas em uma narrativa visual coerente.",
    cardSummary: "Vídeo institucional que transforma texto-base e informações dispersas em narrativa visual coerente.",
    featured: false,
    status: "completed",
    role: ["Video Editor", "Visual Storyteller", "Script Adaptation", "Motion Design"],
    services: ["Adaptação de conteúdo", "Storytelling audiovisual", "Direção visual", "Edição", "Seleção de imagens", "Motion graphics"],
    tools: ["Adobe After Effects", "Adobe Photoshop"],
    tags: ["Institutional Video", "Visual Storytelling", "Video Editing"],
    media: [{ type: "video", href: "https://youtu.be/JHFsD6k5rcc", videoId: "JHFsD6k5rcc", alt: mediaAltPt.cc }],
    links: [{ label: "Assistir ao vídeo", href: "https://youtu.be/JHFsD6k5rcc", type: "watch-video", external: true }],
    content: {
      overview: ["O projeto apresentava mudanças realizadas pela C&C, aspectos da experiência do cliente e momentos de um encontro promovido pela organização."],
      challenge: ["O cliente não disponibilizou briefing completo, e não havia direção clara para linguagem, ritmo, estética ou estrutura narrativa."],
      role: ["Atuei na adaptação do texto, estruturação da narrativa, direção visual, seleção de imagens, composição das cenas, edição e finalização."],
      approach: ["Identifiquei palavras e ideias recorrentes relacionadas a transformação, pessoas, experiência, colaboração e evolução, usando esses elementos como eixo narrativo."],
      solution: ["O vídeo combinou imagens, textos, música e elementos gráficos para representar a transformação apresentada pelo cliente."],
      outcome: ["O projeto transformou um conteúdo inicialmente textual e pouco direcionado em uma comunicação audiovisual estruturada."],
    },
    seo: { title: "Transformação e Experiência do Cliente — Vídeo Institucional | Jonatha Teixeira", description: "Case de vídeo institucional para C&C com storytelling audiovisual, direção visual e edição." },
  },
  {
    slug: "discerenow",
    area: areas.digital,
    title: "DiscereNow",
    subtitle: "Um add-in para Word e uma aplicação Studio projetados para simplificar a produção de cursos digitais.",
    summary: "Pipeline de produção que transforma documentos Word estruturados em cursos publicáveis em SCORM ou Web.",
    cardSummary: "Pipeline que transforma documentos Word estruturados em cursos publicáveis em SCORM ou Web.",
    featured: false,
    status: "beta",
    role: ["Product Designer", "Learning Technology Designer", "Solution Architect", "UX/UI Designer", "AI-assisted Builder"],
    services: ["Estratégia de produto", "Learning technology", "Arquitetura de solução", "UX", "UI Design", "Modelagem de conteúdo", "Fluxo Word para SCORM", "Implementação assistida por IA"],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Microsoft Word Add-in", "Vercel", "GitHub", "ChatGPT", "Codex"],
    tags: ["Learning Technology", "Next.js", "SCORM"],
    media: [{ type: "website", href: "https://discerenow.vercel.app/", alt: mediaAltPt.discere }],
    links: [{ label: "Visitar produto", href: "https://discerenow.vercel.app/", type: "visit-website", external: true }],
    content: {
      overview: ["A produção de cursos de e-learning frequentemente começa em documentos de texto, roteiros e storyboards que precisam ser reinterpretados manualmente no desenvolvimento."],
      challenge: ["Equipes precisam padronizar conteúdos e transformá-los em experiências digitais publicáveis sem perder estrutura entre roteiro e produção."],
      role: ["Idealizei o produto, defini o fluxo entre Word e Studio, tipos de blocos, regras de transformação, interface e proposta de exportação."],
      approach: ["O DiscereNow foi dividido em Template Builder para Word e DiscereNow Studio, conectando documento estruturado, revisão, temas e exportação."],
      solution: ["O produto cria um pipeline que começa em uma ferramenta familiar e termina em um pacote digital publicável em SCORM ou Web."],
      outcome: ["O website, o Template Builder e a proposta do Studio foram desenvolvidos como um produto em evolução. O Studio deve ser identificado como Beta."],
    },
    seo: { title: "DiscereNow — Learning Technology e SCORM | Jonatha Teixeira", description: "Case de produto digital para transformar documentos Word estruturados em cursos SCORM ou Web." },
  },
  {
    slug: "selected-social-media-work",
    area: areas.visual,
    title: "Selected Social Media Work",
    subtitle: "Seis peças, diferentes identidades e um mesmo princípio: adaptar a comunicação ao contexto de cada marca.",
    summary: "Seleção de peças criadas para diferentes marcas, objetivos e públicos, reunidas para demonstrar variedade visual e capacidade de adaptação.",
    cardSummary: "Seleção de peças criadas para diferentes marcas, objetivos e públicos, demonstrando variedade visual.",
    featured: false,
    status: "completed",
    role: ["Visual Designer", "Graphic Designer", "Image Editor"],
    services: ["Social media design", "Composição visual", "Hierarquia", "Tratamento de imagem", "Adaptação de identidade"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Social Media", "Graphic Design", "Visual Communication"],
    media: [
      { type: "carousel", alt: "Peça promocional para redes sociais com composição de produto e chamada principal." },
      { type: "carousel", alt: "Arte institucional para redes sociais com fotografia tratada e hierarquia tipográfica." },
      { type: "carousel", alt: "Peça de divulgação digital com contraste cromático e layout editorial." },
      { type: "carousel", alt: "Arte para campanha em redes sociais com imagem de destaque e texto curto." },
      { type: "carousel", alt: "Peça visual com tratamento de imagem e composição orientada à leitura rápida." },
      { type: "carousel", alt: "Layout social media com identidade adaptada ao contexto da marca." },
    ],
    content: {
      overview: ["Esta seleção reúne seis peças desenvolvidas para diferentes marcas e necessidades de comunicação em redes sociais."],
      challenge: ["Trabalhos para redes sociais precisam comunicar rapidamente, respeitar identidades existentes e funcionar em ambientes com grande competição visual."],
      role: ["Atuei na composição visual, hierarquia da informação, tratamento e seleção de imagens, adaptação de identidades e preparação das peças para publicação digital."],
      approach: ["Cada peça foi tratada a partir do contexto da marca, da mensagem principal e do canal em que seria publicada."],
      solution: ["O case é apresentado como uma seleção visual, sem criar histórias específicas ou responsabilidades não confirmadas para cada peça."],
      outcome: ["O conjunto demonstra flexibilidade visual e capacidade de trabalhar com diferentes linguagens, mantendo clareza e intenção em cada composição."],
    },
    seo: { title: "Selected Social Media Work — Design Visual | Jonatha Teixeira", description: "Seleção de peças de social media com composição visual, hierarquia, tratamento de imagem e adaptação de identidade." },
  },
];

export const projectsPtAll = [...projectsPt, ...remainingPt];

export const projectsEn: Project[] = projectsPtAll.map((project) => ({
  ...project,
  title: project.slug === "selected-social-media-work" ? "Selected Social Media Work" : project.title,
  area: project.area,
  subtitle: translateSubtitle(project.slug, project.subtitle ?? ""),
  summary: translateSummary(project.slug, project.summary),
  cardSummary: translateCard(project.slug, project.cardSummary ?? project.summary),
  links: project.links?.map((link) => ({
    ...link,
    label: link.type === "course-demo" ? "Open interactive demo" : link.type === "watch-video" ? "Watch video" : "Visit live product",
  })),
  media: project.media?.map((item) => ({
    ...item,
    alt: translateAlt(project.slug, item.alt),
  })),
  content: translateContent(project.slug),
  seo: {
    title: `${project.title} — Case Study | Jonatha Teixeira`,
    description: translateCard(project.slug, project.cardSummary ?? project.summary),
  },
}));

function translateSubtitle(slug: string, fallback: string) {
  const subtitles: Record<string, string> = {
    "canteiro-de-ideias": "A learning experience built around the metaphor of ideas being planted, nurtured and transformed into results.",
    "evoluir-cotrijal": "Script, storytelling, visual direction and editing developed in one week for a high-impact presentation.",
    "jonjobs-h2": "A digital product that turns extensive and fragmented seasonal job lists into a clearer application workflow.",
    "jornada-pos-venda-trilha-montagem": "A visual direction created under a critical deadline and transformed into a system for a post-sale course series.",
    "mini-miv-classic": "An architectural symbol built from the brand initials and an ascending visual trajectory.",
    "jonjobs-canada": "Job search, international eligibility signals and resume preparation in one product.",
    "diversidade-cotrijal": "A gamified experience created within Genially's technical constraints.",
    "transformacao-experiencia-cliente-cc": "An institutional narrative built without a formal brief, based on a strategic reading of the supplied material.",
    discerenow: "A Word add-in and Studio application designed to simplify digital course production.",
    "selected-social-media-work": "Six pieces, different identities and one principle: adapt communication to each brand context.",
  };
  return subtitles[slug] ?? fallback;
}

function translateSummary(slug: string, fallback: string) {
  const summaries: Record<string, string> = {
    "canteiro-de-ideias": "Interactive experience created to present an internal innovation program and encourage employees to develop and share ideas.",
    "evoluir-cotrijal": "Presentation video for Cotrijal's learning platform, created with a trailer-like language for a large event.",
    "jonjobs-h2": "Platform to find, filter and organize applications for H-2B seasonal jobs in the United States.",
    "jornada-pos-venda-trilha-montagem": "Interactive course for assembly teams, developed from a visual identity created and approved in five days.",
    "mini-miv-classic": "Visual identity created to convey solidity, growth and corporate presence, supported by essential application guidelines.",
    "jonjobs-canada": "Job search tool for Canada with filters for international candidates and an ATS-friendly resume builder.",
    "diversidade-cotrijal": "Gamified course about diversity in the corporate environment, developed in Genially with a mobile-game-inspired visual language.",
    "transformacao-experiencia-cliente-cc": "Institutional video created from a base text, turning keywords and dispersed information into a coherent visual narrative.",
    discerenow: "Production pipeline that transforms structured Word documents into courses publishable as SCORM or Web.",
    "selected-social-media-work": "Selection of pieces created for different brands, goals and audiences, showing visual variety and adaptability.",
  };
  return summaries[slug] ?? fallback;
}

function translateCard(slug: string, fallback: string) {
  return translateSummary(slug, fallback);
}

function translateAlt(slug: string, fallback: string) {
  const alts: Record<string, string> = {
    "canteiro-de-ideias": mediaAltEn.canteiro,
    "evoluir-cotrijal": mediaAltEn.evoluir,
    "jonjobs-h2": mediaAltEn.h2,
    "jornada-pos-venda-trilha-montagem": mediaAltEn.jornada,
    "mini-miv-classic": mediaAltEn.classic,
    "jonjobs-canada": mediaAltEn.canada,
    "diversidade-cotrijal": mediaAltEn.diversidade,
    "transformacao-experiencia-cliente-cc": mediaAltEn.cc,
    discerenow: mediaAltEn.discere,
    "selected-social-media-work": mediaAltEn.social,
  };
  return alts[slug] ?? fallback;
}

function translateContent(slug: string): Project["content"] {
  const source = projectsPtAll.find((project) => project.slug === slug);
  const summary = translateSummary(slug, source?.summary ?? "");
  return {
    overview: [summary],
    challenge: ["The project required turning context, constraints and available material into a clear digital experience without overstating responsibilities or unconfirmed results."],
    role: [translateRole(slug)],
    approach: ["The work was structured around clarity, visual consistency, usability and the real constraints of the format, tool or product being developed."],
    solution: ["The final solution connected content, interface, visual direction and implementation decisions into a coherent experience."],
    outcome: [translateOutcome(slug)],
    note: source?.content?.note?.map(() => "This case avoids unconfirmed metrics and describes only the responsibilities and results that can be stated accurately."),
  };
}

function translateRole(slug: string) {
  const roles: Record<string, string> = {
    "jonjobs-h2": "I defined the product strategy, solution architecture, UX/UI, content and requirements, using AI tools such as ChatGPT and Codex to support implementation.",
    "jonjobs-canada": "I defined the product proposal, experience, filters, page architecture, visual direction, content organization and AI-assisted implementation.",
    discerenow: "I defined the product, Word-to-Studio workflow, content blocks, interface and AI-assisted implementation for an evolving learning technology tool.",
    "jornada-pos-venda-trilha-montagem": "I worked on Storyline development, visual design, course interface design and asset creation, without being positioned as the lead Instructional Designer.",
    "diversidade-cotrijal": "I worked as a Genially Developer, Visual Designer and Instructional Design support, adapting content and interactions to the platform constraints.",
  };
  return roles[slug] ?? "I contributed through visual design, experience design, production and implementation decisions aligned with the project scope.";
}

function translateOutcome(slug: string) {
  const outcomes: Record<string, string> = {
    "jonjobs-h2": "The product is active and publicly available, with free and paid access, organized job lists, application tools and resume generation.",
    "jonjobs-canada": "The application is active and publicly available, with no user, application or hiring metrics stated.",
    discerenow: "The website, Template Builder and Studio proposal were developed as an evolving product, with the Studio identified as Beta.",
  };
  return outcomes[slug] ?? "The result is presented through the delivered solution and confirmed project context, without inventing metrics or commercial impact.";
}
