# IMPLEMENTAÇÃO DE PROJETOS REAIS — JONATHA PORTFOLIO 2026

## 1. Objetivo desta etapa

Substituir os projetos genéricos e placeholders atuais por projetos reais do portfólio de Jonatha.

A implementação deverá preservar:

- a identidade visual já construída;
- o header azul-marinho atual;
- a paleta existente;
- a estrutura bilíngue;
- o inglês como idioma padrão;
- o português brasileiro como idioma secundário;
- a apresentação dos projetos como cases;
- a organização por especialidade;
- a responsividade;
- a acessibilidade;
- o estilo editorial contemporâneo.

Não redesenhar o website inteiro.

Não alterar a identidade visual global sem necessidade.

Não recriar header, footer, layout, filtros ou componentes que já funcionem corretamente.

Antes de implementar:

1. Ler este documento.
2. Ler o `AGENTS.md`.
3. Inspecionar a estrutura atual do projeto.
4. Reutilizar os padrões e componentes existentes.
5. Criar novos componentes somente quando forem realmente necessários.
6. Não executar build repetidamente.
7. Usar lint como validação padrão.
8. Executar build apenas ao final desta etapa, caso as mudanças em rotas, dados e componentes justifiquem.

---

# 2. Idiomas

O inglês continua sendo o idioma padrão.

Os textos fornecidos neste documento estão em português brasileiro porque representam a versão-base aprovada.

Criar versões naturais e profissionais em inglês.

Não fazer tradução literal.

Preservar no inglês:

- o contexto;
- a senioridade correta;
- o papel real de Jonatha;
- o tom de case profissional;
- a distinção entre desenvolvimento instrucional, design visual e desenvolvimento técnico;
- a informação de que Jonatha utiliza IA para arquitetar e acelerar projetos, mas não se apresenta como software engineer.

Rotas em inglês:

```text
/work
/work/[slug]
/instructional-design
/visual-design
/digital-products
```

Rotas em português:

```text
/pt-br/work
/pt-br/work/[slug]
/pt-br/instructional-design
/pt-br/visual-design
/pt-br/digital-products
```

---

# 3. Categorias

Usar somente estas categorias principais:

```ts
type ProjectCategory =
  | "instructional-design"
  | "visual-design"
  | "digital-products";
```

Labels em português:

```text
Instructional Design
Visual Design
Produtos Digitais
```

Labels em inglês:

```text
Instructional Design
Visual Design
Digital Products
```

Não usar filtros baseados apenas em mídia, como:

```text
Vídeos
Imagens
Websites
Storyline
```

Vídeo, imagem, Storyline, Genially, website e aplicação são formatos ou ferramentas, não as categorias principais do portfólio.

---

# 4. Projetos em destaque

A seção de projetos em destaque da Home deverá apresentar apenas três projetos.

Exibir exatamente um projeto de cada especialidade.

Ordem recomendada:

```text
1. Canteiro de Ideias
   Categoria: Instructional Design

2. EvoluIR Cotrijal
   Categoria: Visual Design

3. JonJobs H2
   Categoria: Digital Products
```

Não incluir mais de três destaques nesta etapa.

Cada card de destaque deverá possuir:

- imagem de capa;
- categoria;
- título;
- resumo curto;
- papel principal;
- no máximo três competências ou ferramentas;
- CTA para abrir o case;
- cor auxiliar correspondente à categoria.

Cores:

```text
Instructional Design
#6E8F3D

Visual Design
#6B3C44

Digital Products
#23395B
```

---

# 5. Relação completa de projetos

## Instructional Design

```text
Canteiro de Ideias — Cotrijal
Jornada do Pós-venda: Trilha Montagem — Todeschini
Diversidade — Cotrijal
```

## Visual Design

```text
EvoluIR Cotrijal — Vídeo de apresentação
Transformação e Experiência do Cliente — C&C
Mini MIV Classic — Brand Identity and Guidelines
Selected Social Media Work
```

## Digital Products

```text
JonJobs H2
JonJobs Canada
DiscereNow
```

Total inicial:

```text
10 projetos
```

---

# 6. Dados e estrutura dos projetos

Adaptar a tipagem atual do projeto para comportar diferentes tipos de mídia e links externos.

Não duplicar páginas ou componentes para cada formato.

Criar uma estrutura flexível.

Exemplo:

```ts
type ProjectCategory =
  | "instructional-design"
  | "visual-design"
  | "digital-products";

type ProjectMediaType =
  | "image"
  | "video"
  | "carousel"
  | "external-demo"
  | "website";

type ProjectMedia = {
  type: ProjectMediaType;
  src?: string;
  href?: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
  provider?: "youtube" | "external" | "local";
};

type ProjectLink = {
  label: string;
  href: string;
  type: "live-project" | "course-demo" | "watch-video" | "visit-website";
  external: boolean;
};

type ProjectContent = {
  overview: string[];
  challenge: string[];
  role: string[];
  approach: string[];
  solution: string[];
  outcome: string[];
  note?: string[];
};

type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  client?: string;
  subtitle: string;
  summary: string;
  cardSummary: string;
  category: ProjectCategory;
  featured: boolean;
  status?: "active" | "completed" | "concept" | "beta";
  role: string[];
  services: string[];
  tools: string[];
  tags: string[];
  coverImage: string;
  media: ProjectMedia[];
  links?: ProjectLink[];
  content: ProjectContent;
  seo: {
    title: string;
    description: string;
  };
};
```

Não incluir ano visualmente nos projetos.

Não exibir campo de ano nos cards ou nos cases.

O campo poderá ser removido da estrutura, caso não seja utilizado em nenhum outro lugar.

---

# 7. Organização de arquivos

Adaptar à arquitetura já existente.

Estrutura recomendada:

```text
src/
├── projects/
│   ├── index.ts
│   ├── project.schema.ts
│   │
│   ├── canteiro-de-ideias/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   ├── jornada-pos-venda-montagem/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   ├── diversidade-cotrijal/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   ├── evoluir-cotrijal/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   ├── transformacao-experiencia-cliente-cc/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   ├── mini-miv-classic/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   ├── selected-social-media-work/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   ├── jonjobs-h2/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   ├── jonjobs-canada/
│   │   ├── index.ts
│   │   ├── content.en.ts
│   │   ├── content.pt-BR.ts
│   │   └── media.ts
│   │
│   └── discerenow/
│       ├── index.ts
│       ├── content.en.ts
│       ├── content.pt-BR.ts
│       └── media.ts
│
├── features/
│   └── portfolio/
│       ├── ProjectCard.tsx
│       ├── ProjectCaseStudy.tsx
│       ├── ProjectGrid.tsx
│       ├── ProjectFilters.tsx
│       ├── ProjectExternalLink.tsx
│       ├── ProjectMedia.tsx
│       ├── ProjectImageGallery.tsx
│       ├── ProjectCarousel.tsx
│       ├── VideoEmbed.tsx
│       ├── ExternalDemoPreview.tsx
│       └── RelatedProjects.tsx
│
└── public/
    └── images/
        └── projects/
            ├── canteiro-de-ideias/
            ├── jornada-pos-venda-montagem/
            ├── diversidade-cotrijal/
            ├── evoluir-cotrijal/
            ├── transformacao-experiencia-cliente-cc/
            ├── mini-miv-classic/
            ├── selected-social-media-work/
            ├── jonjobs-h2/
            ├── jonjobs-canada/
            └── discerenow/
```

Caso o projeto atual tenha uma arquitetura diferente, preservar a arquitetura atual e adaptar apenas o necessário.

Não reorganizar o projeto inteiro apenas para copiar esta estrutura.

---

# 8. Componentes de mídia necessários

## 8.1. ProjectCarousel

Criar um carrossel reutilizável para o case de Social Media e para outros projetos que possuam várias imagens.

Requisitos:

- não executar rotação automática;
- setas anterior e próxima;
- indicadores de posição;
- swipe em dispositivos touch;
- navegação por teclado;
- botões com labels acessíveis;
- suporte a imagens com proporções diferentes;
- preservar a proporção original;
- permitir legenda opcional;
- não cortar peças de social media de forma inadequada;
- usar `next/image`;
- lazy loading;
- respeitar `prefers-reduced-motion`;
- não adicionar biblioteca pesada apenas para o carrossel.

Labels em português:

```text
Imagem anterior
Próxima imagem
Imagem 1 de 6
```

Labels em inglês:

```text
Previous image
Next image
Image 1 of 6
```

## 8.2. VideoEmbed

Criar um componente reutilizável para YouTube.

Requisitos:

- usar iframe responsivo;
- proporção 16:9;
- usar domínio de privacidade aprimorada quando possível;
- carregar o iframe somente quando necessário;
- usar thumbnail antes da reprodução, caso seja viável;
- possuir título acessível;
- não reproduzir automaticamente;
- não reproduzir vídeo com som sem ação do usuário;
- abrir no YouTube como alternativa;
- não utilizar API do YouTube sem necessidade.

Props sugeridas:

```ts
type VideoEmbedProps = {
  videoId: string;
  title: string;
  thumbnail?: string;
  externalUrl: string;
};
```

## 8.3. ExternalDemoPreview

Usar nos cursos em Storyline e Genially.

O componente deverá exibir:

- imagem do curso;
- nome do projeto;
- pequena descrição;
- ícone de link externo;
- botão para abrir a demonstração;
- aviso de que será aberta uma experiência externa.

Não incorporar os cursos em iframe nesta etapa.

Abrir em nova aba com:

```html
target="_blank" rel="noopener noreferrer"
```

Labels:

```text
Abrir demonstração
Open demo
```

## 8.4. ProjectImageGallery

Usar no manual de marca e nos produtos digitais.

Requisitos:

- grid responsivo;
- suporte a imagem em destaque;
- ampliação opcional;
- legenda opcional;
- alt text específico;
- não transformar toda galeria em carrossel no desktop;
- no mobile, poderá usar rolagem horizontal controlada ou carrossel.

---

# 9. Projeto: Canteiro de Ideias

## Metadados

```text
Slug:
canteiro-de-ideias

Título:
Canteiro de Ideias

Cliente:
Cotrijal

Categoria:
Instructional Design

Featured:
true

Status:
completed
```

## Link externo

```text
https://storyline-demos-jonatha-teixeira.netlify.app/#/player/Canteiro-de-Ideias-(Cotrijal)
```

Label em português:

```text
Abrir demonstração
```

Label em inglês:

```text
Open interactive demo
```

## Resumo do card

> Experiência interativa criada para apresentar um programa interno de inovação e incentivar colaboradores a desenvolver e compartilhar ideias.

## Subtítulo

> Uma experiência de aprendizagem construída a partir da metáfora de ideias que são semeadas, cuidadas e transformadas em resultados.

## Visão geral

> O Canteiro de Ideias é um programa da Cotrijal por meio do qual colaboradores podem registrar sugestões de melhoria e acompanhar um processo interno de análise e desenvolvimento dessas propostas.

> A Cotrijal é uma cooperativa agroindustrial com forte ligação com o campo e com a produção agrícola. Essa característica serviu como ponto de partida para construir uma experiência visual conectada à identidade e ao contexto da organização.

## Desafio

> O projeto precisava explicar o funcionamento do programa de maneira simples, envolvente e coerente com o nome “Canteiro de Ideias” e com o slogan “Onde ideias são semeadas”.

> O conteúdo não deveria parecer apenas um treinamento institucional. A experiência precisava ajudar o colaborador a perceber a ideia como algo que passa por etapas, recebe contribuições e amadurece até gerar resultados.

## Meu papel

> Atuei no desenvolvimento da experiência em Storyline, na criação integral da identidade visual e como suporte ao trabalho de Design Instrucional.

> Também participei da organização e adaptação do conteúdo para que a narrativa, as interações e os elementos gráficos funcionassem como uma experiência única.

## Abordagem

> A direção visual foi construída a partir da metáfora do cultivo. Assim como um broto precisa ser semeado, alimentado e cuidado para crescer, uma ideia também passa por etapas, recebe contribuições e ganha forma ao longo do processo.

> A proposta também estabelece uma relação direta com o nome do programa, com o slogan e com a atuação da Cotrijal no setor agrícola.

> Formas orgânicas, elementos associados ao solo, ao crescimento e à vegetação, além de uma paleta alinhada à organização, foram utilizados para reforçar essa narrativa em toda a experiência.

## Solução

> A experiência foi estruturada como uma jornada visual na qual o usuário conhece o programa, compreende como uma ideia é registrada e acompanha sua evolução dentro da organização.

> A identidade foi aplicada aos layouts, elementos de navegação, ilustrações, caixas de conteúdo, botões e demais assets do curso.

> O protótipo inicial foi aprovado pelo cliente na primeira apresentação e passou a orientar o desenvolvimento do restante da experiência.

## Resultado

> O projeto resultou em uma experiência visualmente integrada ao programa e ao contexto da Cotrijal, tornando o processo de apresentação mais claro e memorável.

> A aprovação do primeiro protótipo permitiu seguir para a produção com uma direção visual já validada, reduzindo retrabalho e garantindo consistência entre conteúdo, identidade e interação.

## Papel

```text
Storyline Developer
Visual Designer
Instructional Design Support
```

## Serviços

```text
Desenvolvimento em Storyline
Identidade visual
Design de interface
Criação de assets
Adaptação de conteúdo
Suporte instrucional
```

## Ferramentas

```text
Articulate Storyline 360
Adobe Photoshop
Adobe Illustrator
```

Adicionar outras ferramentas apenas se estiverem confirmadas no projeto antigo.

## Tags do card

```text
Storyline 360
Visual Identity
Learning Experience
```

## SEO em português

Título:

> Canteiro de Ideias — Storyline e Design de Aprendizagem | Jonatha Teixeira

Descrição:

> Case de uma experiência interativa desenvolvida para o programa Canteiro de Ideias da Cotrijal, com identidade visual, Storyline e suporte em Design Instrucional.

---

# 10. Projeto: Jornada do Pós-venda — Trilha Montagem

## Metadados

```text
Slug:
jornada-pos-venda-trilha-montagem

Título:
Jornada do Pós-venda — Trilha Montagem

Cliente:
Todeschini

Categoria:
Instructional Design

Featured:
false

Status:
completed
```

## Link externo

```text
https://storyline-demos-jonatha-teixeira.netlify.app/#/player/01-Jornada-do-p%C3%B3s-venda-Trilha-Montagem-(Todeschini)
```

## Resumo do card

> Curso interativo para equipes de montagem, desenvolvido a partir de uma identidade visual criada e aprovada em um prazo de cinco dias.

## Subtítulo

> Uma direção visual criada sob prazo crítico e transformada em sistema para uma série de cursos do pós-venda.

## Visão geral

> A Todeschini atua no setor de móveis planejados e trabalha com diferentes profissionais e equipes envolvidos na entrega, montagem e experiência de pós-venda.

> Este projeto fazia parte de uma trilha de aprendizagem destinada às equipes responsáveis pela montagem dos produtos da empresa.

## Objetivo da experiência

> Apresentar orientações, processos e padrões relacionados à etapa de montagem de maneira organizada e visualmente consistente, apoiando o trabalho das equipes e reforçando a qualidade esperada no pós-venda.

## Desafio

> O cliente precisava aprovar rapidamente uma identidade visual para o protótipo inicial. Outras propostas desenvolvidas internamente haviam sido recusadas e esta seria a última tentativa antes de comprometer o andamento do projeto.

> Recebi o desafio com um prazo de apenas cinco dias e sem acesso direto ao briefing original. Para construir uma nova direção, precisei estudar a identidade da Todeschini, analisar as propostas recusadas e identificar, a partir do material disponível, quais decisões provavelmente não estavam alinhadas às expectativas do cliente.

## Meu papel

> Atuei como Storyline Developer e Visual Designer, sendo responsável pelo desenvolvimento da experiência, pela criação dos assets e pela identidade visual dos cursos.

> Minha atuação não envolveu a definição integral da estratégia instrucional do conteúdo. O principal foco foi transformar o material fornecido em uma experiência digital visualmente consistente e tecnicamente funcional.

## Abordagem

> Em vez de apenas criar uma nova tela, tratei o protótipo como a base de um sistema visual que precisaria funcionar em diferentes cursos da trilha.

> A proposta buscou aproximar a linguagem do curso da identidade institucional da Todeschini, equilibrando reconhecimento de marca, clareza de conteúdo, facilidade de navegação e viabilidade de produção.

> A análise das propostas anteriores ajudou a evitar caminhos já recusados e a direcionar o novo conceito com maior precisão, mesmo sem um briefing completo.

## Solução

> O protótipo foi apresentado dentro do prazo de cinco dias e aprovado pelo cliente.

> A identidade desenvolvida foi posteriormente aplicada aos demais cursos encomendados, funcionando como padrão para layouts, elementos de navegação, recursos gráficos, interações e assets.

## Resultado

> A aprovação permitiu recuperar o andamento do projeto e estabelecer uma direção visual reutilizável para toda a série.

> Além de resolver uma necessidade imediata, o protótipo tornou-se a base de um sistema consistente, reduzindo decisões repetidas e mantendo unidade entre os diferentes cursos.

## Papel

```text
Storyline Developer
Visual Designer
Asset Designer
```

## Serviços

```text
Desenvolvimento em Storyline
Direção visual
Sistema visual para cursos
Design de interface
Criação de assets
Prototipação
```

## Ferramentas

```text
Articulate Storyline 360
Adobe Photoshop
Adobe Illustrator
```

## Tags

```text
Storyline 360
Visual System
Rapid Prototyping
```

## Observação importante

Não apresentar Jonatha como o Instructional Designer principal deste projeto.

Usar formulações precisas:

```text
Storyline development
Visual design
Course interface design
Asset creation
```

Evitar:

```text
Complete instructional design
Learning strategy lead
Instructional architecture
```

---

# 11. Projeto: Diversidade — Cotrijal

## Metadados

```text
Slug:
diversidade-cotrijal

Título:
Diversidade

Cliente:
Cotrijal

Categoria:
Instructional Design

Featured:
false

Status:
completed
```

## Link externo

```text
https://storyline-demos-jonatha-teixeira.netlify.app/#/player-g/Diversidade-(Cotrijal)
```

## Resumo do card

> Curso gamificado sobre diversidade no ambiente corporativo, desenvolvido no Genially com linguagem visual inspirada em jogos mobile.

## Subtítulo

> Uma experiência gamificada criada dentro das limitações técnicas do Genially.

## Visão geral

> O projeto foi desenvolvido para abordar diversidade no ambiente corporativo por meio de uma experiência mais participativa do que um curso linear convencional.

> A proposta utilizava progressão, etapas e pontuação para estimular o usuário a avançar pelo conteúdo e concluir os diferentes momentos da jornada.

## Objetivo da experiência

> Apresentar conceitos e situações relacionados à diversidade de forma acessível, incentivando reflexão e participação sem transformar o tema em uma sequência passiva de textos e telas.

## Desafio

> O curso precisava transmitir a sensação de um jogo, mas seria desenvolvido no Genially, uma ferramenta com limitações de lógica, controle e personalização quando comparada ao Storyline.

> O desafio foi construir uma experiência que parecesse realmente gamificada, mesmo sem os mesmos recursos de programação e controle disponíveis em ferramentas mais completas.

## Meu papel

> Atuei como desenvolvedor no Genially e como suporte de Design Instrucional.

> Durante a produção, também adaptei propostas de conteúdo e interação para que fossem compatíveis com a identidade visual, com a lógica de progressão e com os limites técnicos da plataforma.

## Abordagem

> A experiência foi inspirada em jogos mobile, com uma interface visualmente direta, etapas reconhecíveis, feedback, pontuação e sensação de avanço.

> A identidade visual, os assets, a música e a estrutura de navegação foram utilizados em conjunto para sustentar a percepção de jogo.

> Quando uma proposta instrucional não funcionava adequadamente dentro da ferramenta, o conteúdo era reorganizado ou adaptado para preservar a intenção de aprendizagem sem comprometer o fluxo da experiência.

## Solução

> O curso foi estruturado como uma jornada gamificada, na qual o participante percorre etapas e acumula pontos ao longo do conteúdo.

> O design combinou personagens, telas de progressão, estímulos sonoros, feedback visual e uma linguagem próxima de jogos digitais acessíveis.

## Resultado

> A solução demonstrou que era possível construir uma experiência coerente e envolvente mesmo dentro das limitações do Genially.

> A integração entre identidade, assets, som, navegação e adaptação instrucional ajudou a evitar que o projeto parecesse apenas uma apresentação com elementos de gamificação adicionados superficialmente.

## Papel

```text
Genially Developer
Instructional Design Support
Visual Designer
```

## Serviços

```text
Desenvolvimento no Genially
Gamificação
Design visual
Criação de assets
Adaptação instrucional
Design de interação
```

## Ferramentas

```text
Genially
Adobe Photoshop
Adobe Illustrator
```

## Tags

```text
Genially
Gamification
Instructional Design
```

---

# 12. Projeto: EvoluIR Cotrijal

## Metadados

```text
Slug:
evoluir-cotrijal

Título:
EvoluIR Cotrijal

Cliente:
Cotrijal

Categoria:
Visual Design

Featured:
true

Status:
completed
```

## Vídeo

```text
URL:
https://youtu.be/7LTbuE3VbNM

Video ID:
7LTbuE3VbNM
```

## Resumo do card

> Vídeo de apresentação da plataforma de aprendizagem da Cotrijal, criado com linguagem de trailer para um grande evento.

## Subtítulo

> Roteiro, storytelling, direção visual e edição desenvolvidos em uma semana para uma apresentação de alto impacto.

## Visão geral

> A Cotrijal precisava apresentar sua plataforma de aprendizagem, EvoluIR, durante um evento de grande porte.

> O vídeo deveria comunicar a relevância da plataforma, transmitir energia e criar expectativa, com uma linguagem mais próxima de um trailer do que de uma apresentação institucional convencional.

## Desafio

> O prazo total era de aproximadamente uma semana. Nesse período, seria necessário aprimorar o roteiro, construir um storytelling, buscar assets, selecionar imagens e músicas, editar e finalizar a peça.

> Além do prazo curto, o projeto exigia manter uma narrativa coerente durante as revisões internas. Algumas sugestões iniciais poderiam fragmentar o storytelling e reduzir o impacto da apresentação.

## Meu papel

> Fui responsável pela adaptação e reescrita do roteiro, construção do storytelling, seleção de assets, direção visual, edição, montagem e escolha das músicas.

> Também conduzi a defesa das decisões narrativas durante o processo interno, explicando como determinadas alterações afetariam o ritmo, a progressão e a experiência final.

## Abordagem

> O texto inicial foi reorganizado para criar uma progressão dramática mais clara: contexto, transformação, apresentação da plataforma e fechamento de impacto.

> Para atender ao prazo, combinei assets animados de qualidade com montagem, tratamento visual, ritmo, tipografia e trilha selecionados especificamente para a narrativa.

> Durante as revisões, as decisões não foram defendidas por preferência pessoal, mas por sua função dentro do storytelling. Sempre que uma mudança era sugerida, o impacto sobre continuidade, compreensão e ritmo era avaliado e explicado.

## Solução

> O resultado foi um vídeo com aparência de trailer institucional, construído para funcionar em uma apresentação de grande escala.

> O projeto utilizou ritmo crescente, música, imagens, animações, textos e transições para apresentar a plataforma como parte de um movimento de transformação da aprendizagem dentro da organização.

## Resultado

> O vídeo foi aprovado pelo cliente na primeira versão, exigindo apenas pequenos ajustes pontuais antes da apresentação.

> A entrega recebeu elogios do cliente e foi concluída dentro do prazo reduzido, preservando a estrutura narrativa planejada.

## Papel

```text
Video Editor
Motion Designer
Visual Storyteller
Script Adaptation
```

## Serviços

```text
Storytelling
Adaptação de roteiro
Edição de vídeo
Direção visual
Seleção de assets
Seleção musical
Motion graphics
```

## Ferramentas

Usar apenas as ferramentas confirmadas nos arquivos ou pelo histórico do projeto.

Prováveis ferramentas:

```text
Adobe After Effects
Adobe Premiere Pro ou Camtasia
Adobe Photoshop
```

Não incluir Premiere Pro se ele não tiver sido utilizado.

## Tags

```text
Storytelling
Video Editing
Motion Design
```

## Linguagem recomendada em inglês

Para “defendi o projeto internamente”, usar uma formulação profissional semelhante a:

> I articulated and defended the narrative rationale during internal reviews, helping the team evaluate proposed changes according to their impact on pacing, continuity and audience experience.

Não usar:

```text
I fought against the project manager.
I refused changes.
I prevented the team from changing the project.
```

---

# 13. Projeto: Transformação e Experiência do Cliente — C&C

## Metadados

```text
Slug:
transformacao-experiencia-cliente-cc

Título:
Transformação e Experiência do Cliente

Cliente:
C&C

Categoria:
Visual Design

Featured:
false

Status:
completed
```

## Vídeo

```text
URL:
https://youtu.be/JHFsD6k5rcc

Video ID:
JHFsD6k5rcc
```

## Resumo do card

> Vídeo institucional criado a partir de um texto-base, transformando palavras-chave e informações dispersas em uma narrativa visual coerente.

## Subtítulo

> Uma narrativa institucional construída sem briefing formal, a partir da leitura estratégica do material fornecido.

## Visão geral

> O projeto apresentava mudanças realizadas pela C&C, aspectos da experiência do cliente e os principais momentos de um encontro promovido pela organização.

> O material inicial consistia principalmente em um texto-base enviado pelo cliente, sem briefing visual detalhado ou direcionamento formal de produção.

## Desafio

> O cliente não disponibilizou um briefing completo e não havia uma direção clara para linguagem, ritmo, estética ou estrutura narrativa.

> O desafio foi interpretar o texto recebido, identificar palavras-chave e transformar informações institucionais em uma peça audiovisual condizente com a intenção do cliente.

## Meu papel

> Atuei na adaptação do texto, estruturação da narrativa, direção visual, seleção de imagens, composição das cenas, edição e finalização do vídeo.

> Também converti o conteúdo originalmente escrito para um formato mais adequado ao audiovisual, reduzindo trechos excessivamente expositivos e organizando a mensagem em uma sequência mais fluida.

## Abordagem

> Primeiro, identifiquei no texto palavras e ideias recorrentes relacionadas a transformação, pessoas, experiência, colaboração e evolução.

> Esses elementos foram utilizados como eixo para definir ritmo, imagens, transições, tipografia e progressão narrativa.

> O texto foi adaptado para que cada trecho tivesse uma função audiovisual clara, evitando simplesmente reproduzir na tela o material recebido.

## Solução

> O vídeo foi construído como uma narrativa institucional dinâmica, combinando imagens, textos, música e elementos gráficos para representar a transformação apresentada pelo cliente.

> A edição buscou equilibrar informação e emoção, criando uma peça com identidade própria mesmo sem um briefing visual formal.

## Resultado

> O projeto transformou um conteúdo inicialmente textual e pouco direcionado em uma comunicação audiovisual estruturada e adequada à apresentação institucional.

> Não inventar métricas, alcance ou resultados comerciais.

## Papel

```text
Video Editor
Visual Storyteller
Script Adaptation
Motion Design
```

## Serviços

```text
Adaptação de conteúdo
Storytelling audiovisual
Direção visual
Edição
Seleção de imagens
Motion graphics
```

## Tags

```text
Institutional Video
Visual Storytelling
Video Editing
```

---

# 14. Projeto: Mini MIV Classic

## Metadados

```text
Slug:
mini-miv-classic

Título:
Mini MIV Classic

Cliente:
Classic Administrações e Participações Ltda.

Categoria:
Visual Design

Featured:
false

Status:
completed
```

## Nome do tipo de projeto

Usar:

```text
Brand Identity and Essential Guidelines
```

Em português:

```text
Identidade visual e diretrizes essenciais de marca
```

Não chamar de “complete brand book”.

Não sugerir que se trata de um manual extenso.

“Mini MIV” pode aparecer no título porque foi o formato original do projeto, mas a descrição deve explicar que se trata de um conjunto essencial de diretrizes.

## Resumo do card

> Identidade visual criada para representar solidez, crescimento e presença corporativa, acompanhada por diretrizes essenciais de aplicação.

## Subtítulo

> Um símbolo arquitetônico construído a partir das iniciais da marca e de uma trajetória visual ascendente.

## Visão geral

> A Classic Administrações e Participações precisava de uma identidade visual capaz de transmitir uma presença corporativa sólida e contemporânea.

> O escopo inicial era objetivo: desenvolver a marca e organizar as principais regras necessárias para sua aplicação consistente.

Não inventar:

- setor específico não confirmado;
- quantidade de colaboradores;
- atuação nacional;
- porte empresarial;
- resultados comerciais;
- métricas de uso.

## Conceito da marca

> O símbolo foi construído a partir de duas letras “S” presentes no nome Classic.

> As formas foram organizadas verticalmente para também sugerir dois edifícios, conectando a marca a ideias de estrutura, construção, administração e patrimônio.

> A base curva funciona como uma linha de horizonte e sustenta visualmente o conjunto. Os ângulos avançam da esquerda para a direita e apontam para cima, reforçando movimento, evolução e crescimento.

> A repetição das formas cria equilíbrio e reconhecimento, enquanto a geometria ajuda a transmitir precisão e estabilidade.

## Desafio

> O projeto partiu de poucas informações iniciais e precisava transformar uma solicitação ampla por “uma logo” em uma solução visual com conceito, coerência e regras mínimas de uso.

> O desafio foi construir uma identidade que não dependesse apenas de aparência, mas que possuísse uma justificativa visual clara e pudesse ser aplicada de forma consistente.

## Meu papel

> Fui responsável pela criação do conceito, desenho do símbolo, composição da assinatura visual, definição cromática, seleção tipográfica e organização das diretrizes essenciais.

## Abordagem

> A identidade foi desenvolvida explorando a relação entre as letras da marca, arquitetura, horizonte e crescimento.

> A paleta utiliza um grafite profundo como base de solidez, um tom champagne para sofisticação e contraste, e um cinza claro como cor neutra de apoio.

> A tipografia combina uma fonte de personalidade mais expressiva na marca com uma família auxiliar de leitura limpa para textos e aplicações.

## Solução

> O resultado foi organizado em um Mini MIV contendo os elementos essenciais para preservar consistência:

```text
Assinatura principal
Conceito do símbolo
Paleta cromática
Padrão tipográfico
Área de proteção
Aplicações básicas
Orientações essenciais de uso
```

## Resultado

> A entrega transformou uma demanda inicial pouco estruturada em uma identidade com conceito definido e um conjunto prático de regras para aplicação.

> Não declarar resultados de mercado ou aprovação pública sem dados confirmados.

## Papel

```text
Brand Designer
Visual Designer
Identity Designer
```

## Serviços

```text
Conceito de marca
Design de logotipo
Sistema visual
Paleta cromática
Tipografia
Diretrizes essenciais
```

## Ferramentas

```text
Adobe Illustrator
Adobe Photoshop
```

## Tags

```text
Brand Identity
Logo Design
Brand Guidelines
```

## Imagens recomendadas

Exibir ao menos:

```text
1. Capa do Mini MIV
2. Construção ou apresentação da marca
3. Padrão tipográfico
4. Paleta cromática
5. Área de proteção
```

Usar as imagens disponíveis no portfólio antigo.

Não utilizar screenshots com a navegação do site antigo visível.

Recortar e preparar somente a área relevante de cada página do manual.

---

# 15. Projeto: Selected Social Media Work

## Metadados

```text
Slug:
selected-social-media-work

Título:
Selected Social Media Work

Título em português:
Trabalhos selecionados para redes sociais

Categoria:
Visual Design

Featured:
false

Status:
completed
```

## Resumo do card

> Seleção de peças criadas para diferentes marcas, objetivos e públicos, reunidas para demonstrar variedade visual e capacidade de adaptação.

## Subtítulo

> Seis peças, diferentes identidades e um mesmo princípio: adaptar a comunicação ao contexto de cada marca.

## Visão geral

> Esta seleção reúne seis peças desenvolvidas para diferentes marcas e necessidades de comunicação em redes sociais.

> Em vez de representar uma única campanha, o conjunto demonstra como decisões de composição, hierarquia, cor, tipografia e imagem foram adaptadas a identidades e públicos distintos.

## Desafio

> Trabalhos para redes sociais frequentemente precisam comunicar rapidamente, respeitar identidades já existentes e funcionar em ambientes com grande competição visual.

> O desafio comum entre as peças foi equilibrar reconhecimento de marca, clareza da mensagem e impacto visual sem aplicar a mesma solução estética a todos os projetos.

## Meu papel

> Atuei na composição visual, hierarquia da informação, tratamento e seleção de imagens, adaptação de identidades e preparação das peças para publicação digital.

> O nível de participação em conceito e conteúdo variou conforme cada trabalho. Por isso, o case deve tratar o conjunto como uma seleção visual, sem atribuir a Jonatha responsabilidades não confirmadas em todas as peças.

## Abordagem

> Cada peça foi tratada a partir do contexto da marca, da mensagem principal e do canal em que seria publicada.

> A composição foi adaptada para destacar rapidamente a informação mais relevante, preservar legibilidade e manter consistência com o universo visual de cada cliente.

## Solução

> O case será apresentado como um carrossel com seis imagens.

> Não criar seis cases separados.

> Não criar textos específicos ou histórias inventadas para cada marca.

> Cada imagem poderá receber apenas uma legenda curta e objetiva, caso a informação esteja disponível.

## Resultado

> O conjunto demonstra flexibilidade visual e capacidade de trabalhar com diferentes linguagens, do institucional ao promocional, mantendo clareza e intenção em cada composição.

## Papel

```text
Visual Designer
Graphic Designer
Image Editor
```

## Serviços

```text
Social media design
Composição visual
Hierarquia
Tratamento de imagem
Adaptação de identidade
```

## Ferramentas

```text
Adobe Photoshop
Adobe Illustrator
```

## Tags

```text
Social Media
Graphic Design
Visual Communication
```

## Carrossel

Usar exatamente seis imagens.

Não executar autoplay.

No desktop:

- imagem principal central;
- setas laterais;
- indicadores inferiores;
- miniaturas opcionais apenas se não poluírem o layout.

No mobile:

- swipe;
- setas acessíveis;
- indicador textual;
- preservar leitura das peças.

---

# 16. Projeto: JonJobs H2

## Metadados

```text
Slug:
jonjobs-h2

Título:
JonJobs H2

Categoria:
Digital Products

Featured:
true

Status:
active
```

## URL

```text
https://www.jonjobsh2.com.br/
```

## Resumo do card

> Plataforma para encontrar, filtrar e organizar candidaturas a vagas sazonais H-2B nos Estados Unidos.

## Subtítulo

> Um produto digital que transforma listas extensas e fragmentadas de vagas sazonais em um fluxo de candidatura mais claro e executável.

## Visão geral

> Pessoas interessadas em vagas H-2B nos Estados Unidos normalmente precisam pesquisar oportunidades em grandes listas do SeasonalJobs, interpretar diferentes períodos sazonais, localizar informações de contato e organizar manualmente as candidaturas já realizadas.

> O JonJobs H2 centraliza esse processo em uma interface criada especificamente para quem deseja encontrar e se candidatar a vagas sazonais nos Estados Unidos.

## Problema

> A fonte oficial concentra milhares de oportunidades, mas a experiência de busca e organização não foi projetada para o fluxo específico de candidatos que precisam comparar temporadas, filtrar empresas, localizar e-mails e acompanhar onde já enviaram candidatura.

> Isso exige tempo, repetição e controle manual, especialmente quando o candidato consulta vagas de diferentes anos e períodos, como verão e inverno.

## Meu papel

> Idealizei e arquitetei integralmente o produto, incluindo proposta de valor, estrutura, fluxos, regras, organização dos dados, experiência do usuário, design da interface, funcionalidades, conteúdo e modelo de acesso.

> Não me apresento como programador tradicional. Utilizei ferramentas de inteligência artificial, incluindo ChatGPT e Codex, para transformar as decisões de produto e arquitetura em uma aplicação funcional.

> Minha atuação combina visão de produto, UX/UI, arquitetura de solução, direção visual, organização de requisitos, validação e coordenação da implementação assistida por IA.

## Forma correta de descrever o papel

Usar:

```text
Product concept and strategy
Solution architecture
UX/UI design
AI-assisted development
Product design
Requirements definition
Content design
```

Não usar como título principal:

```text
Software Engineer
Senior Front-end Engineer
Full-stack Engineer
Lead Developer
```

## Abordagem

> O produto foi estruturado a partir do fluxo real de um candidato: localizar vagas relevantes, filtrar oportunidades, revisar informações, preparar um currículo, enviar a candidatura e registrar o que já foi feito.

> As listas foram organizadas por temporada e ano, permitindo distinguir oportunidades de verão e inverno e consultar diferentes ciclos de contratação.

> A interface foi desenhada para reduzir tarefas repetitivas e oferecer mais controle sobre o processo de candidatura.

## Principais funcionalidades

```text
28.276 vagas H-2B organizadas em seis listas
Listas de verão e inverno de 2024, 2025 e 2026
Busca geral
Filtros por estado
Filtros por empresa
Filtros por cargo
Filtros por grupo
Filtro por disponibilidade de e-mail
Visualização organizada das vagas
Registro de vagas já utilizadas em candidaturas
Aplicação por e-mail dentro do dashboard
Configuração de assunto e mensagem
Upload e uso de currículo em PDF
Gerador de currículo H-2B em inglês
Exportação do currículo em PDF
Planos com diferentes limites de uso
Autenticação e liberação de acesso
Conteúdo editorial e blog
Assistente visual Benny
```

Não é necessário exibir toda essa lista no card.

No card usar somente:

```text
Busca e filtros
Candidatura organizada
Gerador de currículo
```

## Modelo de acesso

> O produto possui uma modalidade gratuita com limites de uso e planos pagos para candidatos que precisam de maior volume de candidaturas e exportações de currículo.

> O acesso pago é vinculado ao e-mail utilizado na compra e na conta da plataforma.

Não exibir todos os preços no case, salvo se os valores forem obtidos dinamicamente do site ou confirmados como atuais.

Evitar congelar preços no conteúdo do portfólio.

## Uso de IA

> A inteligência artificial participou como aceleradora de pesquisa, arquitetura, escrita, prototipação, desenvolvimento, revisão e resolução de problemas técnicos.

> As decisões de produto, fluxos, requisitos, experiência, identidade e priorização foram definidas por Jonatha. ChatGPT e Codex foram utilizados como ferramentas de implementação e expansão da capacidade técnica.

## Stack

“Stack” significa o conjunto de tecnologias usado na aplicação.

Com base no projeto atual, usar:

```text
React
JavaScript
CSS
Supabase
Firebase
Vercel
GitHub
Kiwify integrations
Gmail-based application flow
AI-assisted development with ChatGPT and Codex
```

Verificar no repositório atual antes de publicar.

Não incluir Next.js ou TypeScript no JonJobs H2 se o projeto atual não utilizar essas tecnologias.

## Solução

> O JonJobs H2 reúne as vagas em um dashboard voltado para execução. O candidato pode identificar a temporada, pesquisar e filtrar oportunidades, revisar dados essenciais, preparar o currículo e registrar candidaturas dentro de um único fluxo.

> A aplicação também reduz a necessidade de manter planilhas paralelas e ajuda o usuário a visualizar quais oportunidades já foram trabalhadas.

## Resultado

> O produto está ativo e disponível publicamente.

> Ainda não há métricas comerciais ou depoimentos públicos que devam ser apresentados no case.

> O resultado atual deve ser descrito como a entrega e publicação de um produto funcional, com modelo gratuito e pago, múltiplas listas de vagas, ferramentas de candidatura e geração de currículo.

Não inventar:

```text
Número de usuários
Receita
Taxa de conversão
Quantidade de candidaturas enviadas por usuários
Depoimentos
Impacto em contratações
```

## Papel

```text
Product Designer
Solution Architect
UX/UI Designer
AI-assisted Builder
Product Owner
```

“Solution Architect” deve ser apresentado como função exercida no projeto pessoal, não como cargo formal anterior.

## Serviços

```text
Estratégia de produto
Arquitetura de solução
UX
UI Design
Organização de dados
Modelagem de fluxos
Automação
Conteúdo
Monetização
Implementação assistida por IA
```

## Ferramentas e tecnologias

```text
React
Supabase
Firebase
Vercel
GitHub
Kiwify
Gmail
ChatGPT
Codex
```

## Tags

```text
Product Design
UX/UI
AI-assisted Development
```

## Imagens

Exibir apenas três telas principais:

```text
1. Busca e filtros
2. Lista e visualização de vagas
3. Gerador de currículo
```

Não sobrecarregar o case com todas as páginas do sistema.

---

# 17. Projeto: JonJobs Canada

## Metadados

```text
Slug:
jonjobs-canada

Título:
JonJobs Canada

Categoria:
Digital Products

Featured:
false

Status:
active
```

## URL

```text
https://www.jonjobscanada.com/
```

## Resumo do card

> Ferramenta de busca de empregos no Canadá com filtros para candidatos internacionais e gerador de currículo otimizado para ATS.

## Subtítulo

> Busca de vagas, sinais de elegibilidade internacional e preparação de currículo em um único produto.

## Visão geral

> Candidatos internacionais que procuram oportunidades no Canadá precisam interpretar informações como LMIA, códigos NOC, província, tipo de contrato e abertura para pessoas que ainda estão fora do país.

> Essas informações costumam aparecer de forma dispersa e nem sempre são fáceis de localizar ou comparar durante a busca.

## Problema

> Plataformas generalistas apresentam grandes volumes de vagas, mas não priorizam necessariamente os sinais mais relevantes para um candidato internacional.

> Além da busca, muitos candidatos também precisam adaptar o currículo aos padrões canadenses e garantir que o documento permaneça legível para sistemas ATS.

## Meu papel

> Idealizei a proposta do produto, defini a experiência, os filtros, a arquitetura das páginas, a direção visual, a organização de conteúdo e as ferramentas de apoio ao candidato.

> A implementação foi realizada com suporte de inteligência artificial, seguindo requisitos, validações e decisões de produto definidas por mim.

## Abordagem

> O produto foi estruturado em torno de duas necessidades complementares: encontrar oportunidades mais relevantes e preparar uma candidatura mais adequada.

> Na busca, os filtros destacam informações como província, NOC, recência, LMIA e abertura para candidatos internacionais.

> Na preparação, o gerador de currículo orienta a construção de seções organizadas e permite exportar um PDF legível por recrutadores e sistemas ATS.

## Principais funcionalidades

```text
Busca de vagas no Canadá
Filtros por província
Filtros por código NOC
Filtro por recência
Busca por palavras-chave
Alternância para vagas abertas a candidatos internacionais
Alternância para vagas com LMIA
Alternância para oportunidades temporárias
Detalhes completos da vaga
Instruções de candidatura
Gerador de currículo ATS-friendly
Seções guiadas de currículo
Exportação em PDF
Conteúdo editorial e blog
Tour de onboarding
Português, inglês e francês
```

## Solução

> O JonJobs Canada combina uma interface direta de pesquisa com recursos voltados especificamente às dúvidas de candidatos internacionais.

> Em vez de apenas listar oportunidades, o produto ajuda o usuário a priorizar vagas com sinais relevantes e a preparar um currículo estruturado antes de adaptar cada candidatura.

## Resultado

> A aplicação está ativa e disponível publicamente.

> Não inventar métricas de usuários, candidaturas ou contratações.

## Papel

```text
Product Designer
UX/UI Designer
Solution Architect
AI-assisted Builder
Content Strategist
```

## Serviços

```text
Estratégia de produto
Pesquisa de requisitos
UX
UI Design
Filtros e taxonomia
Gerador de currículo
Conteúdo editorial
Internacionalização
Implementação assistida por IA
```

## Stack

Com base nos arquivos atuais:

```text
React
Vite
JavaScript
CSS
i18next
Upstash Redis
PDF.js
Vercel
ChatGPT
Codex
```

Confirmar antes de publicar.

## Tags

```text
Job Search
ATS Resume
UX/UI
```

## Imagens recomendadas

```text
1. Página de busca e filtros
2. Cards ou detalhes das vagas
3. Gerador de currículo
```

---

# 18. Projeto: DiscereNow

## Metadados

```text
Slug:
discerenow

Título:
DiscereNow

Categoria:
Digital Products

Featured:
false

Status:
beta
```

## URL

```text
https://discerenow.vercel.app/
```

## Resumo do card

> Pipeline de produção que transforma documentos Word estruturados em cursos publicáveis em SCORM ou Web.

## Subtítulo

> Um add-in para Word e uma aplicação Studio projetados para simplificar a produção de cursos digitais.

## Visão geral

> A produção de cursos de e-learning frequentemente começa em documentos de texto, roteiros e storyboards que precisam ser reinterpretados manualmente durante o desenvolvimento.

> Esse processo pode gerar inconsistências, retrabalho e perda de estrutura entre a etapa de conteúdo e a construção do curso.

## Problema

> Instructional Designers e equipes de produção precisam organizar conteúdos, padronizar blocos e transformar documentos em experiências digitais publicáveis.

> Ferramentas de autoria completas nem sempre são necessárias nas etapas iniciais, enquanto documentos Word continuam sendo amplamente utilizados para criação, revisão e aprovação de conteúdos.

## Meu papel

> Idealizei o produto, defini o fluxo entre Word e Studio, a arquitetura da experiência, os tipos de blocos, as regras de transformação, a interface e a proposta de exportação.

> Também conduzi a implementação assistida por inteligência artificial, traduzindo necessidades de produção de e-learning em requisitos funcionais e técnicos.

## Abordagem

> O DiscereNow foi dividido em duas ferramentas complementares.

> O Template Builder funciona dentro do Microsoft Word e ajuda o usuário a estruturar o conteúdo em blocos padronizados.

> O DiscereNow Studio lê o documento estruturado, permite revisar o curso, aplicar temas e exportar o resultado como SCORM ou conteúdo Web.

## Principais funcionalidades

### Template Builder para Word

```text
Estruturação guiada de conteúdos
Blocos para texto
Blocos de mídia
Tabs
Accordions
Quizzes
Cards
Padronização de documentos
Preparação para processamento no Studio
```

### DiscereNow Studio

```text
Importação de arquivos .docx estruturados
Leitura da estrutura do curso
Revisão de capítulos, lições e blocos
Aplicação de temas
Personalização visual
Exportação SCORM
Exportação Web
```

## Solução

> O produto cria um pipeline de conteúdo que começa em uma ferramenta familiar e termina em um pacote digital publicável.

> A proposta reduz a distância entre roteiro, estrutura instrucional e produção, permitindo que o documento deixe de ser apenas uma referência visual e passe a funcionar como uma fonte estruturada para geração do curso.

## Resultado

> O website, o Template Builder e a proposta do DiscereNow Studio foram desenvolvidos como um produto em evolução.

> O Studio deve ser identificado como Beta.

> Não declarar adoção comercial ou uso por empresas sem confirmação.

## Papel

```text
Product Designer
Learning Technology Designer
Solution Architect
UX/UI Designer
AI-assisted Builder
```

## Serviços

```text
Estratégia de produto
Learning technology
Arquitetura de solução
UX
UI Design
Modelagem de conteúdo
Estruturação de blocos
Fluxo Word para SCORM
Implementação assistida por IA
```

## Stack

Com base no projeto atual:

```text
Next.js
React
TypeScript
Tailwind CSS
Microsoft Word Add-in
Vercel
GitHub
ChatGPT
Codex
```

Confirmar as tecnologias do Studio antes de publicar.

## Tags

```text
Learning Technology
Next.js
SCORM
```

## Imagens recomendadas

```text
1. Hero ou visão geral do produto
2. Add-in do Word
3. Fluxo do DiscereNow Studio
4. Aplicação de temas ou revisão de blocos
5. Exportação SCORM/Web
```

---

# 19. Cards dos projetos

Os cards atuais não devem continuar com placeholders abstratos quando houver mídia real.

Cada card deverá possuir:

```text
Imagem real ou thumbnail real
Categoria
Título
Resumo curto
Papel principal
Até três tags
CTA
```

Exemplo:

```text
Instructional Design

Canteiro de Ideias

Experiência interativa criada para apresentar um programa interno de inovação e incentivar colaboradores a desenvolver e compartilhar ideias.

Storyline Developer · Visual Designer

Storyline 360
Visual Identity
Learning Experience

Ver case
```

Não colocar longos parágrafos nos cards.

Não exibir todas as ferramentas nos cards.

Não usar imagens genéricas de wireframe quando já houver imagens reais.

Os wireframes abstratos atuais podem ser mantidos somente enquanto um asset ainda não tiver sido preparado.

---

# 20. Página Work

Atualizar a página `/work` e `/pt-br/work`.

## Título em português

> Projetos em aprendizagem, comunicação visual e produtos digitais.

## Texto

> Esta seleção reúne experiências interativas, sistemas visuais, vídeos e produtos digitais. Cada projeto apresenta o contexto, meu papel, as decisões tomadas e a solução construída.

## Filtros

```text
Todos
Instructional Design
Visual Design
Produtos Digitais
```

## Ordem dos projetos

Ordem recomendada:

```text
1. Canteiro de Ideias
2. EvoluIR Cotrijal
3. JonJobs H2
4. Jornada do Pós-venda — Trilha Montagem
5. Mini MIV Classic
6. JonJobs Canada
7. Diversidade — Cotrijal
8. Transformação e Experiência do Cliente — C&C
9. DiscereNow
10. Selected Social Media Work
```

Também é aceitável organizar primeiro os três destaques e depois os demais.

Não ordenar por ano.

---

# 21. Páginas de especialidade

## Instructional Design

Exibir:

```text
Canteiro de Ideias
Jornada do Pós-venda — Trilha Montagem
Diversidade — Cotrijal
```

Adicionar uma observação editorial curta:

> Os projetos desta seção incluem diferentes níveis de atuação em Design Instrucional. Em alguns, fui responsável pela estrutura e adaptação instrucional; em outros, atuei principalmente no desenvolvimento, na identidade visual e na transformação do conteúdo em uma experiência digital.

A versão em inglês deverá preservar essa precisão.

## Visual Design

Exibir:

```text
EvoluIR Cotrijal
Transformação e Experiência do Cliente — C&C
Mini MIV Classic
Selected Social Media Work
```

## Digital Products

Exibir:

```text
JonJobs H2
JonJobs Canada
DiscereNow
```

---

# 22. Navegação entre cases

Ao final de cada case, exibir:

```text
Projeto anterior
Próximo projeto
Projetos relacionados
CTA de contato
```

Projetos relacionados devem priorizar a mesma categoria.

Exemplo para Canteiro de Ideias:

```text
Jornada do Pós-venda
Diversidade
```

Exemplo para JonJobs H2:

```text
JonJobs Canada
DiscereNow
```

---

# 23. Links externos

Todos os projetos com links externos devem possuir botão visível.

## Cursos

```text
Abrir demonstração
Open interactive demo
```

## Vídeos

```text
Assistir ao vídeo
Watch video
```

## Produtos

```text
Visitar produto
Visit live product
```

Não usar apenas ícones sem label.

Todos os links externos devem:

```html
target="_blank" rel="noopener noreferrer"
```

Adicionar ícone discreto de link externo.

---

# 24. Imagens e assets

## Regras

- utilizar imagens reais dos projetos;
- converter para WebP ou AVIF quando adequado;
- manter os arquivos originais fora do bundle, caso sejam muito grandes;
- não usar screenshots com barras do navegador quando houver alternativa;
- recortar interfaces de maneira consistente;
- preservar a legibilidade;
- criar thumbnails separadas das imagens grandes;
- usar nomes descritivos;
- incluir alt text;
- não comprimir excessivamente.

## Convenção de nomes

```text
cover.webp
thumbnail.webp
screen-filters.webp
screen-jobs.webp
screen-resume-builder.webp
brand-cover.webp
brand-typography.webp
brand-colors.webp
brand-clear-space.webp
social-01.webp
social-02.webp
video-thumbnail.webp
course-introduction.webp
```

---

# 25. Alt texts iniciais

## Canteiro de Ideias

> Tela introdutória do curso Canteiro de Ideias com identidade visual verde inspirada em cultivo e crescimento.

## Jornada do Pós-venda

> Tela do curso Jornada do Pós-venda para equipes de montagem da Todeschini.

## Diversidade

> Tela do curso gamificado sobre diversidade desenvolvido para a Cotrijal.

## EvoluIR

> Thumbnail do vídeo de apresentação da plataforma de aprendizagem EvoluIR Cotrijal.

## C&C

> Thumbnail do vídeo institucional sobre transformação e experiência do cliente da C&C.

## Mini MIV Classic

> Capa do guia essencial de identidade visual da Classic Administrações e Participações.

## Social Media

Criar alt específico para cada uma das seis peças, sem usar:

```text
Imagem 1
Imagem 2
Post social
```

## JonJobs H2

> Dashboard do JonJobs H2 com busca e filtros para vagas sazonais nos Estados Unidos.

## JonJobs Canada

> Interface do JonJobs Canada com filtros para vagas abertas a candidatos internacionais.

## DiscereNow

> Interface do DiscereNow mostrando o fluxo de documentos Word para cursos SCORM ou Web.

---

# 26. Responsividade

Os cases devem funcionar adequadamente em:

```text
360px
390px
768px
1024px
1280px
1440px
```

No mobile:

- metadata do projeto em uma coluna;
- botões externos com largura confortável;
- vídeos em 16:9;
- carrossel com swipe;
- textos sem largura excessiva;
- galerias sem rolagem horizontal involuntária;
- tabelas de ferramentas convertidas em listas ou grids;
- títulos longos com quebra equilibrada.

---

# 27. Acessibilidade

- manter um único `h1` por case;
- usar headings em ordem;
- botões do carrossel acessíveis;
- foco visível;
- iframe com `title`;
- links externos identificáveis;
- alt text;
- não depender somente da cor da categoria;
- permitir navegação por teclado;
- respeitar `prefers-reduced-motion`;
- não bloquear conteúdo atrás de animações;
- não usar autoplay;
- não usar carrossel automático;
- manter contraste AA.

---

# 28. SEO dos projetos

Criar metadata individual para todos os cases.

Formato sugerido:

```text
[Título do projeto] — [Tipo de trabalho] | Jonatha Teixeira
```

Exemplos:

```text
Canteiro de Ideias — Storyline e Learning Experience | Jonatha Teixeira

EvoluIR Cotrijal — Visual Storytelling e Motion Design | Jonatha Teixeira

JonJobs H2 — Product Design e UX/UI | Jonatha Teixeira
```

Descriptions devem:

- explicar o projeto;
- mencionar o papel;
- incluir a especialidade naturalmente;
- não exagerar resultados;
- não incluir listas de palavras-chave;
- não exceder aproximadamente 160 caracteres quando possível.

Adicionar Open Graph por projeto.

Usar a imagem de capa correspondente.

---

# 29. Tom editorial

Combinar linguagem institucional e primeira pessoa.

## Contexto

Usar linguagem objetiva:

> A Cotrijal precisava apresentar sua plataforma de aprendizagem durante um evento de grande porte.

## Meu papel

Usar primeira pessoa:

> Fui responsável pela adaptação do roteiro, construção do storytelling e edição do vídeo.

## Resultado

Usar linguagem objetiva e verificável:

> O vídeo foi aprovado na primeira apresentação e recebeu pequenos ajustes antes do evento.

Não usar tom de autopromoção exagerada.

Evitar:

```text
Projeto revolucionário
Resultado incrível
Design espetacular
Experiência incomparável
Solução perfeita
```

Preferir:

```text
claro
coerente
estruturado
funcional
adequado ao contexto
validado
publicado
aprovado
```

---

# 30. Informações que não devem ser inventadas

Não inventar:

- anos;
- métricas;
- receita;
- número de usuários;
- conversões;
- número de colaboradores dos clientes;
- resultados de aprendizagem;
- aumento de desempenho;
- taxa de conclusão;
- impacto financeiro;
- depoimentos;
- tamanho das empresas;
- alcance dos vídeos;
- participação de Jonatha em atividades não mencionadas;
- ferramentas não confirmadas;
- responsabilidades integrais de DI quando ele atuou como suporte;
- resultados de mercado do Mini MIV Classic.

No Mini MIV Classic, a narrativa conceitual pode utilizar a interpretação visual fornecida neste documento, mas não deve criar fatos empresariais.

---

# 31. Implementação por etapas

## Etapa 1 — Dados

- atualizar schema de projetos;
- cadastrar os dez projetos;
- configurar categorias;
- configurar featured;
- adicionar links externos;
- adicionar textos PT-BR;
- criar traduções em inglês;
- remover placeholders.

## Etapa 2 — Cards

- substituir imagens abstratas;
- aplicar dados reais;
- ajustar resumos;
- limitar tags;
- manter o grid atual;
- validar filtros.

## Etapa 3 — Componentes de mídia

- criar `VideoEmbed`;
- criar `ProjectCarousel`;
- criar `ExternalDemoPreview`;
- criar ou ajustar `ProjectImageGallery`.

## Etapa 4 — Cases

- implementar conteúdo;
- adicionar galerias;
- adicionar vídeos;
- adicionar demonstrações;
- adicionar links para produtos;
- adicionar relacionados.

## Etapa 5 — Home e páginas de especialidade

- configurar três destaques;
- atualizar listas por categoria;
- ajustar textos introdutórios;
- remover qualquer projeto genérico.

## Etapa 6 — Validação

Executar:

```bash
npm run lint
```

Executar build somente ao final, porque esta etapa altera:

- rotas;
- dados;
- metadata;
- componentes;
- renderização de mídia.

```bash
npm run build
```

Não executar build entre cada projeto.

---

# 32. Critérios de aceite

A implementação estará correta quando:

- não houver mais cards genéricos;
- os dez projetos estiverem cadastrados;
- os três projetos corretos estiverem em destaque;
- cada destaque representar uma categoria;
- os cursos possuírem links externos;
- o Canteiro de Ideias estiver em destaque;
- o EvoluIR estiver em destaque;
- o JonJobs H2 estiver em destaque;
- os vídeos possuírem embed responsivo;
- o Social Media possuir carrossel sem autoplay;
- o Mini MIV possuir galeria;
- JonJobs H2, Canada e DiscereNow possuírem links para os produtos;
- todos os cases possuírem textos em português e inglês;
- o inglês continuar padrão;
- não houver datas exibidas;
- não houver métricas inventadas;
- o papel de Jonatha estiver descrito corretamente;
- o projeto da Todeschini não o apresente como DI principal;
- Diversidade o apresente como Genially Developer e suporte de DI;
- os produtos digitais expliquem o desenvolvimento assistido por IA;
- o site continue responsivo;
- header e footer atuais sejam preservados;
- a identidade visual continue consistente;
- lint e build sejam concluídos sem erros.

---

# 33. Resumo final para implementação

Substituir o portfólio genérico por uma seleção real e diversa que demonstre:

```text
Instructional Design
Storyline
Genially
Identidade visual para aprendizagem
Suporte instrucional
Gamificação

Visual Design
Brand identity
Social media
Visual storytelling
Vídeo
Motion
Direção visual

Digital Products
Product design
UX/UI
Arquitetura de solução
Web applications
Learning technology
Desenvolvimento assistido por IA
```

A narrativa global deve mostrar que Jonatha não apenas produz telas ou peças isoladas.

Ele:

```text
entende o problema;
organiza requisitos;
define uma direção;
constrói a experiência;
seleciona ferramentas;
adapta conteúdo;
coordena decisões;
e transforma a proposta em uma solução utilizável.
```

As diferentes competências devem reforçar umas às outras sem criar a impressão de três profissionais desconectados.
