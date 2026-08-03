import { projectsEn, projectsPtAll } from "./projects";

export type Locale = "en" | "pt-br";
export type AreaId = "instructional-design" | "visual-design" | "digital-products";

export const locales = ["en", "pt-br"] as const;

export const localeNames: Record<Locale, string> = {
  en: "EN",
  "pt-br": "PT-BR",
};

export const areaColors: Record<AreaId, string> = {
  "instructional-design": "#6E8F3D",
  "visual-design": "#6B3C44",
  "digital-products": "#23395B",
};

type NavItem = {
  label: string;
  href: string;
};

type Expertise = {
  id: AreaId;
  title: string;
  short: string;
  description: string;
  skills: string[];
  cta: string;
  process: string[];
  seoTerms?: string[];
  aiNote?: string;
};

export type ProjectMediaType = "image" | "video" | "carousel" | "external-demo" | "website" | "gallery";

export type ProjectMedia = {
  type: ProjectMediaType;
  src?: string;
  href?: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
  provider?: "youtube" | "external" | "local";
  videoId?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  type: "live-project" | "course-demo" | "watch-video" | "visit-website";
  external: boolean;
};

export type ProjectContent = {
  overview: string[];
  challenge: string[];
  role: string[];
  approach: string[];
  solution: string[];
  outcome: string[];
  note?: string[];
};

export type Project = {
  slug: string;
  area: AreaId;
  title: string;
  shortTitle?: string;
  client?: string;
  subtitle?: string;
  status: string;
  summary: string;
  cardSummary?: string;
  featured?: boolean;
  role: string | string[];
  services?: string[];
  tools?: string[];
  tags?: string[];
  coverImage?: string;
  media?: ProjectMedia[];
  links?: ProjectLink[];
  content?: ProjectContent;
  outcome?: string;
  seo?: {
    title: string;
    description: string;
  };
};

type Content = {
  lang: string;
  basePath: string;
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  ui: {
    menu: string;
    close: string;
    language: string;
    letsTalk: string;
    viewProjects: string;
    viewExperience: string;
    allProjects: string;
    all: string;
    caseStudy: string;
    relatedProjects: string;
    responseTime: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      text: string;
      availability: string;
    };
    featured: SectionCopy;
    expertise: SectionCopy;
    selected: SectionCopy;
    about: SectionCopy & { paragraphs: string[]; cta: string };
    skills: SectionCopy & { groups: { title: string; items: string[] }[] };
    experience: SectionCopy & { items: { company: string; role: string; period: string }[]; cta: string };
    contact: {
      title: string;
      text: string;
      primary: string;
      secondary: string;
    };
  };
  pages: {
    work: PageCopy;
    expertise: PageCopy;
    about: PageCopy & {
      paragraphs: string[];
      education: string[];
      principles: { title: string; text: string }[];
      experience: { company: string; role: string; period: string; text: string; tools: string[] }[];
      languages: string[];
      cta: string;
    };
    contact: PageCopy & {
      channels: string[];
      fields: string[];
      subjects: string[];
    };
  };
  footer: {
    title: string;
    text: string;
    button: string;
    signature: string;
    location: string;
    availability: string;
    columns: { title: string; links: NavItem[] }[];
  };
  expertise: Expertise[];
  projects: Project[];
};

type SectionCopy = {
  eyebrow: string;
  title: string;
  text: string;
  cta?: string;
};

type PageCopy = {
  eyebrow: string;
  title: string;
  text: string;
};

const enPath = (path: string) => path;
const ptPath = (path: string) => `/pt-br${path === "/" ? "" : path}`;

const englishExpertise: Expertise[] = [
  {
    id: "instructional-design",
    title: "Design Instrucional",
    short: "Learning experiences that organize complex content and support practical application.",
    description:
      "I design digital learning experiences that turn complex information into structured journeys. The work combines instructional strategy, content architecture, interaction design and visual production.",
    skills: [
      "Needs analysis",
      "Learning architecture",
      "Scripting",
      "Storyboarding",
      "Storyline 360",
      "Rise 360",
      "SCORM",
      "Learning Experience Design",
    ],
    cta: "Explore Instructional Design",
    process: [
      "Understand the audience, context and need",
      "Organize content and learning goals",
      "Define the learning experience",
      "Create the script, storyboard and prototype",
      "Develop and validate",
      "Publish, review and improve",
    ],
  },
  {
    id: "visual-design",
    title: "Visual Design",
    short: "Visual systems that make messages clearer, more consistent and memorable.",
    description:
      "I create visual solutions for brands, content, interfaces and digital communication, combining hierarchy, composition, typography, color and context.",
    skills: [
      "Art direction",
      "Graphic design",
      "Visual identity",
      "Editorial layouts",
      "Presentations",
      "Digital content",
      "Image treatment",
      "Interface design",
    ],
    cta: "Explore Visual Design",
    process: [
      "Understand the message and context",
      "Identify the audience and intent",
      "Define the visual direction",
      "Explore composition, typography and color",
      "Create and refine the system",
      "Adapt it to different formats",
    ],
  },
  {
    id: "digital-products",
    title: "Digital Products",
    short: "Websites and applications that connect strategy, experience and technology.",
    description:
      "I design and build digital experiences that solve real needs, from product definition and UX to interface, prototyping, front-end development and service integration.",
    skills: [
      "Product strategy",
      "UX",
      "UI Design",
      "Web Design",
      "Prototyping",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Applied AI",
    ],
    cta: "Explore Digital Products",
    aiNote:
      "I use artificial intelligence as part of research, exploration, prototyping, development and automation. It accelerates execution, while product, experience, content and design decisions remain guided by the problem and the user.",
    process: [
      "Understand the problem and audience",
      "Define scope and priorities",
      "Organize flows and content",
      "Prototype the experience",
      "Build the interface and integrations",
      "Validate, publish and evolve",
    ],
  },
];

const portugueseExpertise: Expertise[] = [
  {
    id: "instructional-design",
    title: "Instructional Design",
    short: "Experiências de aprendizagem que organizam conteúdos complexos e facilitam a aplicação prática.",
    description:
      "Projeto experiências de aprendizagem digitais que transformam informações complexas em jornadas estruturadas. Combino estratégia instrucional, arquitetura de conteúdo, design de interação e produção visual.",
    skills: [
      "Análise de necessidades",
      "Arquitetura de aprendizagem",
      "Roteirização",
      "Storyboarding",
      "Storyline 360",
      "Rise 360",
      "SCORM",
      "Learning Experience Design",
    ],
    cta: "Explorar Design Instrucional",
    process: [
      "Entender o público, o contexto e a necessidade",
      "Organizar o conteúdo e os objetivos",
      "Definir a experiência de aprendizagem",
      "Criar roteiro, storyboard e protótipo",
      "Desenvolver e validar",
      "Publicar, revisar e aprimorar",
    ],
  },
  {
    id: "visual-design",
    title: "Design Visual",
    short: "Sistemas visuais que tornam mensagens mais claras, consistentes e memoráveis.",
    description:
      "Crio soluções visuais para marcas, conteúdos, interfaces e comunicações digitais. Meu trabalho combina hierarquia, composição, tipografia, cor e contexto.",
    skills: [
      "Direção visual",
      "Design gráfico",
      "Identidade visual",
      "Layouts editoriais",
      "Apresentações",
      "Conteúdo digital",
      "Tratamento de imagens",
      "Design de interfaces",
    ],
    cta: "Explorar Design Visual",
    process: [
      "Compreender a mensagem e o contexto",
      "Identificar o público e a intenção",
      "Definir direção visual",
      "Explorar composição, tipografia e cor",
      "Criar e refinar o sistema",
      "Adaptar para diferentes formatos",
    ],
  },
  {
    id: "digital-products",
    title: "Produtos Digitais",
    short: "Websites e aplicações que conectam estratégia, experiência e tecnologia.",
    description:
      "Projeto e construo experiências digitais que resolvem necessidades reais, combinando definição de produto, UX, interface, prototipação, desenvolvimento front-end, integrações e IA aplicada.",
    skills: [
      "Estratégia de produto",
      "UX",
      "UI Design",
      "Web Design",
      "Prototipação",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "IA aplicada",
    ],
    cta: "Explorar Produtos Digitais",
    aiNote:
      "Utilizo inteligência artificial como parte do processo de pesquisa, exploração, prototipação, desenvolvimento e automação. A ferramenta acelera a execução, mas as decisões permanecem orientadas pelo problema e pelo usuário.",
    process: [
      "Compreender o problema e o público",
      "Definir escopo e prioridades",
      "Organizar fluxos e conteúdo",
      "Prototipar a experiência",
      "Construir a interface e as integrações",
      "Validar, publicar e evoluir",
    ],
  },
];

export const content: Record<Locale, Content> = {
  en: {
    lang: "en",
    basePath: "",
    meta: {
      title: "Jonatha Teixeira — Multidisciplinary Designer",
      description:
        "Portfolio of Jonatha Teixeira, a multidisciplinary designer working across Instructional Design, Visual Design and digital products with technology and AI-assisted workflows.",
    },
    nav: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/#contact" },
    ],
    ui: {
      menu: "Menu",
      close: "Close",
      language: "Language",
      letsTalk: "Let's talk",
      viewProjects: "View projects",
      viewExperience: "More about me",
      allProjects: "View all projects",
      all: "All",
      caseStudy: "Case study",
      relatedProjects: "Related projects",
      responseTime: "I usually reply within two business days.",
    },
    home: {
      hero: {
        eyebrow: "Multidisciplinary designer",
        title: "I turn ideas into clear, useful and well-built digital experiences.",
        text: "I work at the intersection of learning, visual communication and digital products, using design, technology and artificial intelligence to turn problems into solutions people can understand and use.",
        availability: "Available for remote and international opportunities.",
      },
      featured: {
        eyebrow: "Featured projects",
        title: "Selected work showing how I think, design and build solutions.",
        text: "A selection of learning, visual design and digital product projects. Each case presents context, decisions, my role and the achieved result.",
        cta: "View all projects",
      },
      expertise: {
        eyebrow: "Areas of expertise",
        title: "One way of thinking, applied to different kinds of experience.",
        text: "My work combines visual thinking, structure, technology and attention to user experience. Tools change with each project, but the objective remains the same: make information, products and interactions clearer, more useful and more efficient.",
      },
      selected: {
        eyebrow: "Other work",
        title: "Projects built across different contexts, formats and levels of complexity.",
        text: "Not every project needs to become a large case. This selection keeps relevant work organized by specialty and by the kind of problem solved.",
      },
      about: {
        eyebrow: "About me",
        title: "Design, technology and learning have always been part of the same path.",
        text: "",
        paragraphs: [
          "I am a multidisciplinary designer with experience in visual design, learning content development and digital product creation. My background in technology and corporate projects expanded my ability to connect business needs, user experience and visual execution.",
          "I like to understand the problem before choosing the tool. In some projects, the best solution is an interactive course. In others, it is an interface, a visual system, an automation or a web application.",
        ],
        cta: "More about me",
      },
      skills: {
        eyebrow: "Skills and tools",
        title: "Tools are part of the process, not the starting point.",
        text: "I choose technologies and methods according to the problem, audience and expected result.",
        groups: [
          { title: "Learning & Instructional Design", items: ["Storyline 360", "Rise 360", "SCORM", "Enable Now", "Genially", "Scripting", "Content architecture", "Learning Experience Design"] },
          { title: "Visual & Interaction Design", items: ["Figma", "Photoshop", "Illustrator", "After Effects", "Camtasia", "Interface design", "Graphic design", "Prototyping"] },
          { title: "Web & Digital Products", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Supabase", "Vercel", "GitHub"] },
          { title: "AI-assisted Workflow", items: ["Accelerated prototyping", "Solution exploration", "Content generation and refinement", "Development support", "Task automation", "Visual asset creation"] },
        ],
      },
      experience: {
        eyebrow: "Experience",
        title: "Experience in design, learning and technology projects.",
        text: "My path includes visual creation, digital content development, corporate projects and solutions for different audiences and contexts.",
        items: [
          { company: "Tata Consultancy Services", role: "Instructional Designer & Graphic Designer", period: "01/2024 — present" },
          { company: "Plural Desenvolvimento de Web", role: "Graphic Designer & Instructional Designer", period: "03/2021 — 12/2023" },
          { company: "Nova Concursos", role: "Graphic Designer and Marketing Assistant", period: "02/2018 — 03/2020" },
        ],
        cta: "View full experience",
      },
      contact: {
        title: "Have an opportunity, a project or a problem that needs a clearer solution?",
        text: "I am available to discuss opportunities in instructional design, visual design, digital products and projects that combine design, technology and artificial intelligence.",
        primary: "Send a message",
        secondary: "View LinkedIn",
      },
    },
    pages: {
      work: {
        eyebrow: "Portfolio",
        title: "Projects in learning, visual communication and digital products.",
        text: "This selection brings together interactive experiences, visual systems, videos and digital products. Each project presents the context, my role, the decisions made and the solution built.",
      },
      expertise: {
        eyebrow: "Expertise",
        title: "Three areas connected by one way of solving problems.",
        text: "My work developed in different contexts, but it always starts from the same base: organize information, understand people, build a clear direction and turn ideas into usable experiences.",
      },
      about: {
        eyebrow: "About me",
        title: "A design professional who also learned to think like someone from technology.",
        text: "",
        paragraphs: [
          "My path started in visual design and evolved into learning, technology and digital product projects. Over time, I realized these areas were not disconnected.",
          "Today, I work in a multidisciplinary way. I can develop a learning experience, structure visual communication, design an interface or build a web application. The format depends on the need; the way of thinking remains consistent.",
          "My education in Systems Analysis and Development, Instructional Design and Project Management complements practical experience in visual design, e-learning, corporate content and digital solutions.",
        ],
        education: ["Technology degree in Systems Analysis and Development — UNINOVE", "Postgraduate degree in Instructional Design — UNOPAR", "MBA in Project Management"],
        principles: [
          { title: "Clarity before complexity", text: "A good solution does not need to look complicated to demonstrate value." },
          { title: "The tool comes after the problem", text: "I do not start by choosing technology or format. First, I try to understand what needs to be solved." },
          { title: "Design must serve a function", text: "Aesthetics, content and interaction should work together to guide the experience." },
          { title: "AI accelerates, but does not replace decisions", text: "I use artificial intelligence to explore, build and automate, while remaining responsible for choices and results." },
          { title: "Versatility with direction", text: "Working across areas does not mean treating everything the same way. Each project requires depth, context and its own criteria." },
        ],
        experience: [
          {
            company: "Tata Consultancy Services",
            role: "Instructional Designer & Graphic Designer",
            period: "01/2024 — present",
            text: "Designed visual materials for corporate training programs, including presentations, infographics, icons, diagrams, UI elements and assets for SAP S/4HANA learning experiences. Collaborated with instructional designers, SMEs, business analysts and stakeholders while using AI tools to support ideation, content structure and workflow efficiency.",
            tools: ["Adobe Illustrator", "Photoshop", "Premiere", "Figma", "PowerPoint", "Microsoft Office", "Microsoft Teams", "ChatGPT", "Claude", "Gemini"],
          },
          {
            company: "Plural Desenvolvimento de Web Ltda",
            role: "Graphic Designer & Instructional Designer",
            period: "03/2021 — 12/2023",
            text: "Developed visual identities, layouts, templates, PDFs, icons, infographics and multimedia assets for e-learning and corporate training projects. Created reusable assets and interface elements for Storyline and Rise courses with a focus on clarity, hierarchy, accessibility and brand consistency.",
            tools: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "After Effects", "Articulate Storyline", "Articulate Rise", "PowerPoint"],
          },
          {
            company: "Nova Concursos",
            role: "Graphic Designer and Marketing Assistant",
            period: "02/2018 — 03/2020",
            text: "Created marketing visuals for digital campaigns, marketplaces, e-commerce pages, social media, YouTube, email marketing, banners, product visuals and landing pages in a high-volume online education environment.",
            tools: ["Adobe Illustrator", "Photoshop", "After Effects", "Premiere", "YouTube Studio", "Instagram Analytics"],
          },
        ],
        languages: ["Portuguese: native", "English: B2 / Upper-intermediate", "Spanish: B2"],
        cta: "View my projects",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's talk about an opportunity, a project or an idea.",
        text: "I am available for remote and international opportunities, instructional design, visual design, digital products and work that combines design, technology and artificial intelligence.",
        channels: ["WhatsApp: +55 35 98452-9241", "Email: jonatha.teixeira.business@gmail.com", "LinkedIn: linkedin.com/in/jonatha-l-teixeira-jlt"],
        fields: ["Name", "Email", "Company", "Subject", "Message"],
        subjects: ["Professional opportunity", "Instructional Design", "Visual Design", "Website or application", "Other project"],
      },
    },
    footer: {
      title: "Have an opportunity, a project or an idea in mind?",
      text: "Let's build something useful.",
      button: "Start a conversation",
      signature: "Multidisciplinary designer creating digital experiences across learning, visual communication and digital products.",
      location: "Brazil",
      availability: "Available for remote and international opportunities",
      columns: [
        { title: "Navigation", links: [{ label: "Work", href: "/work" }, { label: "About", href: "/about" }, { label: "Contact", href: "/#contact" }] },
        { title: "Connections", links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/jonatha-l-teixeira-jlt/" }, { label: "WhatsApp", href: "https://wa.me/5535984529241" }, { label: "Email", href: "mailto:jonatha.teixeira.business@gmail.com" }] },
      ],
    },
    expertise: englishExpertise,
    projects: projectsEn,
  },
  "pt-br": {
    lang: "pt-BR",
    basePath: "/pt-br",
    meta: {
      title: "Jonatha Teixeira — Designer Multidisciplinar",
      description:
        "Portfólio de Jonatha Teixeira, designer multidisciplinar com experiência em Instructional Design, Visual Design e criação de websites e produtos digitais com tecnologia e inteligência artificial.",
    },
    nav: [
      { label: "Projetos", href: "/pt-br/work" },
      { label: "Sobre", href: "/pt-br/about" },
      { label: "Contato", href: "/pt-br/#contact" },
    ],
    ui: {
      menu: "Menu",
      close: "Fechar",
      language: "Idioma",
      letsTalk: "Vamos conversar",
      viewProjects: "Ver projetos",
      viewExperience: "Saber mais sobre mim",
      allProjects: "Ver todos os projetos",
      all: "Todos",
      caseStudy: "Case",
      relatedProjects: "Projetos relacionados",
      responseTime: "Costumo responder em até dois dias úteis.",
    },
    home: {
      hero: {
        eyebrow: "Designer multidisciplinar",
        title: "Eu transformo ideias em experiências digitais claras, úteis e bem construídas.",
        text: "Trabalho na interseção entre aprendizagem, comunicação visual e produtos digitais, usando design, tecnologia e inteligência artificial para transformar problemas em soluções que as pessoas conseguem entender e utilizar.",
        availability: "Disponível para oportunidades remotas e internacionais.",
      },
      featured: {
        eyebrow: "Projetos em destaque",
        title: "Trabalhos selecionados que mostram como penso, projeto e construo soluções.",
        text: "Uma seleção de projetos em aprendizagem, design visual e produtos digitais. Cada case apresenta o contexto, as decisões tomadas, meu papel e o resultado alcançado.",
        cta: "Ver todos os projetos",
      },
      expertise: {
        eyebrow: "Áreas de atuação",
        title: "Uma mesma forma de pensar, aplicada a diferentes tipos de experiência.",
        text: "Minha atuação combina pensamento visual, estrutura, tecnologia e atenção à experiência do usuário. As ferramentas mudam conforme o projeto, mas o objetivo permanece: tornar informações, produtos e interações mais claros, úteis e eficientes.",
      },
      selected: {
        eyebrow: "Outros trabalhos",
        title: "Projetos construídos em diferentes contextos, formatos e níveis de complexidade.",
        text: "Nem todo trabalho precisa ser um grande case. Esta seleção apresenta outros projetos relevantes, organizados por especialidade e pelo tipo de problema resolvido.",
      },
      about: {
        eyebrow: "Sobre mim",
        title: "Design, tecnologia e aprendizagem sempre fizeram parte da mesma trajetória.",
        text: "",
        paragraphs: [
          "Sou um designer multidisciplinar com experiência em design visual, desenvolvimento de conteúdos de aprendizagem e criação de produtos digitais. Minha formação em tecnologia e minha atuação em projetos corporativos ampliaram minha capacidade de conectar necessidades de negócio, experiência do usuário e execução visual.",
          "Gosto de compreender o problema antes de escolher a ferramenta. Em alguns projetos, a melhor solução é um curso interativo. Em outros, uma interface, um sistema visual, uma automação ou uma aplicação web.",
        ],
        cta: "Conhecer minha trajetória",
      },
      skills: {
        eyebrow: "Competências e ferramentas",
        title: "Ferramentas são parte do processo, não o ponto de partida.",
        text: "Escolho tecnologias e métodos de acordo com o problema, o público e o resultado esperado.",
        groups: [
          { title: "Learning & Instructional Design", items: ["Storyline 360", "Rise 360", "SCORM", "Enable Now", "Genially", "Roteirização", "Arquitetura de conteúdo", "Learning Experience Design"] },
          { title: "Visual & Interaction Design", items: ["Figma", "Photoshop", "Illustrator", "After Effects", "Camtasia", "Design de interfaces", "Design gráfico", "Prototipação"] },
          { title: "Web & Digital Products", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Supabase", "Vercel", "GitHub"] },
          { title: "AI-assisted Workflow", items: ["Prototipação acelerada", "Exploração de soluções", "Geração e refinamento de conteúdo", "Apoio ao desenvolvimento", "Automação de tarefas", "Criação de ativos visuais"] },
        ],
      },
      experience: {
        eyebrow: "Experiência",
        title: "Experiência em projetos de design, aprendizagem e tecnologia.",
        text: "Minha trajetória inclui criação visual, desenvolvimento de conteúdos digitais, projetos corporativos e construção de soluções para diferentes públicos e contextos.",
        items: [
          { company: "Tata Consultancy Services", role: "Designer Instrucional e Designer Gráfico", period: "01/2024 — atual" },
          { company: "Plural Desenvolvimento de Web", role: "Designer Gráfico e Designer Instrucional", period: "03/2021 — 12/2023" },
          { company: "Nova Concursos", role: "Designer Gráfico e Assistente de Marketing", period: "02/2018 — 03/2020" },
        ],
        cta: "Ver experiência completa",
      },
      contact: {
        title: "Tem uma oportunidade, um projeto ou um problema que precisa ser melhor resolvido?",
        text: "Estou disponível para conversar sobre oportunidades em design instrucional, design visual, produtos digitais e projetos que combinem design, tecnologia e inteligência artificial.",
        primary: "Enviar mensagem",
        secondary: "Ver LinkedIn",
      },
    },
    pages: {
      work: {
        eyebrow: "Portfólio",
        title: "Projetos em aprendizagem, comunicação visual e produtos digitais.",
        text: "Esta seleção reúne experiências interativas, sistemas visuais, vídeos e produtos digitais. Cada projeto apresenta o contexto, meu papel, as decisões tomadas e a solução construída.",
      },
      expertise: {
        eyebrow: "Especialidades",
        title: "Três áreas conectadas por uma mesma forma de resolver problemas.",
        text: "Minha atuação se desenvolveu em contextos diferentes, mas sempre partiu da mesma base: organizar informações, compreender pessoas, construir uma direção clara e transformar ideias em experiências utilizáveis.",
      },
      about: {
        eyebrow: "Sobre mim",
        title: "Um profissional de design que aprendeu a pensar também como alguém de tecnologia.",
        text: "",
        paragraphs: [
          "Minha trajetória começou no design visual e evoluiu para projetos de aprendizagem, tecnologia e produtos digitais. Ao longo dos anos, percebi que as áreas não estavam desconectadas.",
          "Hoje, atuo de forma multidisciplinar. Posso desenvolver uma experiência de aprendizagem, estruturar uma comunicação visual, desenhar uma interface ou construir uma aplicação web. O formato depende da necessidade; a forma de pensar permanece consistente.",
          "Minha formação em Análise e Desenvolvimento de Sistemas, Design Instrucional e Gestão de Projetos complementa a experiência prática que construí trabalhando com design visual, e-learning, conteúdos corporativos e soluções digitais.",
        ],
        education: ["Tecnólogo em Análise e Desenvolvimento de Sistemas — UNINOVE", "Pós-graduação em Design Instrucional — UNOPAR", "MBA em Gestão de Projetos"],
        principles: [
          { title: "Clareza antes da complexidade", text: "Uma boa solução não precisa parecer complicada para demonstrar valor." },
          { title: "A ferramenta vem depois do problema", text: "Não começo escolhendo tecnologia ou formato. Primeiro, procuro compreender o que precisa ser resolvido." },
          { title: "Design precisa cumprir uma função", text: "Estética, conteúdo e interação devem trabalhar juntos para orientar a experiência." },
          { title: "IA acelera, mas não substitui decisão", text: "Utilizo inteligência artificial para explorar, construir e automatizar, mantendo responsabilidade sobre as escolhas e o resultado." },
          { title: "Versatilidade com direção", text: "Atuar em diferentes áreas não significa tratar tudo da mesma forma. Cada projeto exige profundidade, contexto e critérios próprios." },
        ],
        experience: [
          {
            company: "Tata Consultancy Services",
            role: "Designer Instrucional e Designer Gráfico",
            period: "01/2024 — atual",
            text: "Criação de materiais visuais para treinamentos corporativos, incluindo apresentações, infográficos, ícones, diagramas, elementos de UI e assets para experiências de aprendizagem em SAP S/4HANA. Colaboração com instructional designers, SMEs, business analysts e stakeholders, usando IA para apoiar ideação, estruturação de conteúdo e eficiência do fluxo criativo.",
            tools: ["Adobe Illustrator", "Photoshop", "Premiere", "Figma", "PowerPoint", "Microsoft Office", "Microsoft Teams", "ChatGPT", "Claude", "Gemini"],
          },
          {
            company: "Plural Desenvolvimento de Web Ltda",
            role: "Designer Gráfico e Designer Instrucional",
            period: "03/2021 — 12/2023",
            text: "Desenvolvimento de identidades visuais, layouts, templates, PDFs, ícones, infográficos e assets multimídia para projetos de e-learning e treinamentos corporativos. Criação de elementos reutilizáveis e interfaces para cursos em Storyline e Rise, com foco em clareza, hierarquia, acessibilidade e consistência de marca.",
            tools: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "After Effects", "Articulate Storyline", "Articulate Rise", "PowerPoint"],
          },
          {
            company: "Nova Concursos",
            role: "Designer Gráfico e Assistente de Marketing",
            period: "02/2018 — 03/2020",
            text: "Criação de peças para campanhas digitais, marketplaces, e-commerce, redes sociais, YouTube, e-mail marketing, banners, produtos visuais e landing pages em um ambiente de educação online com alto volume de produção.",
            tools: ["Adobe Illustrator", "Photoshop", "After Effects", "Premiere", "YouTube Studio", "Instagram Analytics"],
          },
        ],
        languages: ["Português: nativo", "Inglês: B2 / Upper-intermediate", "Espanhol: B2"],
        cta: "Ver meus projetos",
      },
      contact: {
        eyebrow: "Contato",
        title: "Vamos conversar sobre uma oportunidade, um projeto ou uma ideia.",
        text: "Estou disponível para oportunidades remotas e internacionais, projetos de design instrucional, design visual, produtos digitais e trabalhos que combinem design, tecnologia e inteligência artificial.",
        channels: ["WhatsApp: +55 35 98452-9241", "E-mail: jonatha.teixeira.business@gmail.com", "LinkedIn: linkedin.com/in/jonatha-l-teixeira-jlt"],
        fields: ["Nome", "E-mail", "Empresa", "Assunto", "Mensagem"],
        subjects: ["Oportunidade profissional", "Instructional Design", "Visual Design", "Website ou aplicação", "Outro projeto"],
      },
    },
    footer: {
      title: "Tem uma oportunidade, um projeto ou uma ideia em mente?",
      text: "Vamos construir algo útil.",
      button: "Iniciar uma conversa",
      signature: "Designer multidisciplinar criando experiências digitais em aprendizagem, comunicação visual e produtos digitais.",
      location: "Brasil",
      availability: "Disponível para oportunidades remotas e internacionais",
      columns: [
        { title: "Navegação", links: [{ label: "Projetos", href: "/pt-br/work" }, { label: "Sobre", href: "/pt-br/about" }, { label: "Contato", href: "/pt-br/#contact" }] },
        { title: "Conexões", links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/jonatha-l-teixeira-jlt/" }, { label: "WhatsApp", href: "https://wa.me/5535984529241" }, { label: "E-mail", href: "mailto:jonatha.teixeira.business@gmail.com" }] },
      ],
    },
    expertise: portugueseExpertise,
    projects: projectsPtAll,
  },
};

export function getContent(locale: Locale) {
  return content[locale];
}

export function localizedPath(locale: Locale, path: string) {
  return locale === "pt-br" ? ptPath(path) : enPath(path);
}

export function alternatePath(locale: Locale, path: string) {
  return locale === "pt-br" ? enPath(path) : ptPath(path);
}

export function getExpertise(locale: Locale, id: AreaId) {
  return content[locale].expertise.find((item) => item.id === id);
}

export function getProject(locale: Locale, slug: string) {
  return content[locale].projects.find((project) => project.slug === slug);
}
