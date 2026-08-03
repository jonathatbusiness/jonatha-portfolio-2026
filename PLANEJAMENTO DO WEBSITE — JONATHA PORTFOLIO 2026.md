# PLANEJAMENTO DO WEBSITE — JONATHA PORTFOLIO 2026

## 1. Visão geral do projeto

Criar um website-portfólio moderno, bilíngue e responsivo para apresentar Jonatha como um profissional multidisciplinar que atua na criação de experiências digitais em três áreas principais:

1. Instructional Design
2. Visual Design
3. Digital Products

O website não deve transmitir a sensação de que Jonatha exerce diversas profissões desconectadas.

A narrativa central deve mostrar que todas essas competências fazem parte de uma capacidade principal:

> Transformar ideias, conteúdos e problemas em experiências digitais claras, úteis e visualmente bem resolvidas.

A inteligência artificial deve ser apresentada como ferramenta de aceleração, prototipação e construção de soluções, e não como um título profissional artificial ou exagerado.

---

## 2. Objetivo estratégico

O site deverá atender recrutadores e potenciais clientes que podem chegar procurando perfis diferentes, como:

- Instructional Designer
- Learning Designer
- Instructional Specialist
- Visual Designer
- Graphic Designer
- Web Designer
- UI Designer
- UX/UI Designer
- Digital Product Designer
- Creative Technologist
- Profissional que utiliza IA na criação de soluções digitais

Todos esses visitantes devem conseguir identificar rapidamente as competências que procuram, sem precisar compreender toda a trajetória profissional antes de encontrar o conteúdo relevante.

O site deverá evitar as seguintes percepções:

- “O que esse profissional realmente faz?”
- “Ele trabalha com muitas coisas, mas não sei em qual delas é realmente bom.”
- “Não encontrei rapidamente o que estava procurando.”
- “Parece que ele está tentando assumir muitos cargos ao mesmo tempo.”
- “Ele parece mais experiente ou mais especializado do que a vaga exige.”
- “O conteúdo que me interessa está escondido entre muitas informações irrelevantes.”

O site deverá favorecer as seguintes percepções:

- “Ele possui exatamente as experiências que estou procurando.”
- “Além da especialidade principal, ele possui competências complementares úteis.”
- “Consigo ignorar as áreas que não preciso sem me perder.”
- “Ele consegue compreender problemas e construir soluções completas.”
- “A experiência dele em outras áreas fortalece, em vez de confundir, sua especialidade.”
- “Ele utiliza IA como ferramenta prática, não apenas como discurso.”

---

## 3. Posicionamento profissional

### 3.1. Posicionamento principal

O posicionamento não deverá ser construído a partir de uma lista de cargos.

Evitar:

> Instructional Designer, Visual Designer, UX/UI Designer, Web Designer, Front-end Developer e AI Specialist.

Usar uma proposta de valor central.

Sugestão conceitual:

> Eu projeto experiências digitais que unem clareza, design e tecnologia.

As três áreas devem aparecer como especialidades ou contextos de aplicação dessa capacidade:

- Learning Experiences
- Visual Communication
- Digital Products

### 3.2. Termo profissional de apoio

Usar “Multidisciplinary Designer” como termo institucional principal.

Usar “Creative Technologist” apenas em contextos nos quais seja necessário explicar a interseção entre design, tecnologia, prototipação e inteligência artificial.

Não usar:

- AI Engineer
- AI Developer
- Software Engineer
- Solutions Architect como cargo formal
- Front-end Engineer

Esses títulos poderiam criar expectativas incompatíveis com a experiência formal atual.

### 3.3. Forma recomendada de apresentação

Versão em português:

> Designer multidisciplinar criando experiências digitais em aprendizagem, comunicação visual e produtos digitais.

Versão conceitual em inglês:

> Multidisciplinary designer creating digital experiences across learning, visual communication and digital products.

O inglês será o idioma padrão do site.

O português brasileiro deverá ser acessível por meio da rota `/pt-br`.

---

## 4. Idiomas e internacionalização

### 4.1. Idioma padrão

O idioma padrão será inglês.

Rotas em inglês não devem receber prefixo:

```text
/
/work
/expertise
/about
/contact
/work/[slug]
/instructional-design
/visual-design
/digital-products
```

Rotas em português deverão usar:

```text
/pt-br
/pt-br/work
/pt-br/expertise
/pt-br/about
/pt-br/contact
/pt-br/work/[slug]
/pt-br/instructional-design
/pt-br/visual-design
/pt-br/digital-products
```

### 4.2. Requisitos de i18n

- Criar a estrutura completa para inglês e português brasileiro.
- Implementar inicialmente os textos fornecidos neste documento em português.
- Criar as versões em inglês como idioma padrão.
- As traduções em inglês devem ser naturais e profissionais.
- Não realizar tradução palavra por palavra.
- Não misturar idiomas na mesma página.
- Todos os elementos de interface devem ser traduzidos.
- Metadados, títulos, descrições, labels, botões e mensagens também devem ser localizados.
- O idioma selecionado deverá ser preservado ao navegar entre páginas.
- O seletor de idioma deverá manter a página equivalente sempre que possível.
- Implementar `hreflang`.
- Implementar canonical URLs corretamente.
- Usar `lang="en"` nas páginas padrão.
- Usar `lang="pt-BR"` nas páginas em português.

### 4.3. Implementação recomendada

Usar uma solução de i18n compatível com Next.js App Router.

A implementação poderá ser feita com:

- rotas segmentadas;
- dicionários tipados;
- helpers internos;
- ou biblioteca leve e consolidada, caso seja realmente necessária.

Evitar adicionar uma dependência extensa se a solução puder ser construída com a estrutura nativa do Next.js.

---

## 5. Arquitetura principal do site

```text
Home
│
├── Hero
├── Featured Projects
├── Areas of Expertise
│   ├── Instructional Design
│   ├── Visual Design
│   └── Digital Products
├── Selected Projects
├── About Preview
├── Skills & Tools
├── Experience Preview
├── Contact CTA
└── Footer
```

Páginas principais:

```text
/
├── Home
├── Work
├── Project Case Study
├── Expertise
├── Instructional Design
├── Visual Design
├── Digital Products
├── About
└── Contact
```

---

## 6. Estrutura de arquivos

Organizar o projeto por domínio e responsabilidade.

Evitar uma única pasta `components` com dezenas de componentes sem contexto.

Estrutura proposta:

```text
jonatha-portfolio-2026/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   │   ├── jonjobs-h2/
│   │   │   ├── instructional-project-01/
│   │   │   ├── visual-project-01/
│   │   │   └── portfolio-legacy/
│   │   ├── decorative/
│   │   └── og/
│   ├── icons/
│   ├── documents/
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── opengraph-image.tsx
│   │   │
│   │   ├── work/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── expertise/
│   │   │   └── page.tsx
│   │   │
│   │   ├── instructional-design/
│   │   │   └── page.tsx
│   │   │
│   │   ├── visual-design/
│   │   │   └── page.tsx
│   │   │
│   │   ├── digital-products/
│   │   │   └── page.tsx
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   └── pt-br/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── work/
│   │       │   ├── page.tsx
│   │       │   └── [slug]/
│   │       │       └── page.tsx
│   │       ├── expertise/
│   │       │   └── page.tsx
│   │       ├── instructional-design/
│   │       │   └── page.tsx
│   │       ├── visual-design/
│   │       │   └── page.tsx
│   │       ├── digital-products/
│   │       │   └── page.tsx
│   │       ├── about/
│   │       │   └── page.tsx
│   │       └── contact/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── IconButton.tsx
│   │   │   ├── Divider.tsx
│   │   │   └── SkipLink.tsx
│   │   ├── media/
│   │   │   ├── ResponsiveImage.tsx
│   │   │   ├── ProjectGallery.tsx
│   │   │   └── VideoEmbed.tsx
│   │   └── icons/
│   │       └── index.ts
│   │
│   ├── features/
│   │   ├── navigation/
│   │   │   ├── Header.tsx
│   │   │   ├── DesktopNavigation.tsx
│   │   │   ├── MobileNavigation.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── NavigationLink.tsx
│   │   │   ├── ExpertiseDropdown.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── navigation.types.ts
│   │   │
│   │   ├── footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── FooterCta.tsx
│   │   │   ├── FooterNavigation.tsx
│   │   │   ├── FooterSocialLinks.tsx
│   │   │   └── FooterSignature.tsx
│   │   │
│   │   ├── hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroContent.tsx
│   │   │   ├── HeroVisual.tsx
│   │   │   ├── HeroActions.tsx
│   │   │   └── HeroExpertiseLinks.tsx
│   │   │
│   │   ├── expertise/
│   │   │   ├── ExpertiseSection.tsx
│   │   │   ├── ExpertiseCard.tsx
│   │   │   ├── ExpertiseGrid.tsx
│   │   │   └── ExpertiseIntro.tsx
│   │   │
│   │   ├── portfolio/
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectFilters.tsx
│   │   │   ├── ProjectCategoryFilter.tsx
│   │   │   ├── RelatedProjects.tsx
│   │   │   └── ProjectCaseStudy.tsx
│   │   │
│   │   ├── about/
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── AboutProfile.tsx
│   │   │   ├── AboutPrinciples.tsx
│   │   │   └── AboutCapabilities.tsx
│   │   │
│   │   ├── experience/
│   │   │   ├── ExperiencePreview.tsx
│   │   │   ├── ExperienceTimeline.tsx
│   │   │   └── ExperienceItem.tsx
│   │   │
│   │   ├── skills/
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── SkillGroup.tsx
│   │   │   └── ToolList.tsx
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactSection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactLinks.tsx
│   │   │   └── AvailabilityStatus.tsx
│   │   │
│   │   └── motion/
│   │       ├── Reveal.tsx
│   │       ├── Stagger.tsx
│   │       └── motion.config.ts
│   │
│   ├── content/
│   │   ├── en/
│   │   │   ├── home.ts
│   │   │   ├── work.ts
│   │   │   ├── expertise.ts
│   │   │   ├── about.ts
│   │   │   ├── contact.ts
│   │   │   ├── navigation.ts
│   │   │   └── footer.ts
│   │   └── pt-BR/
│   │       ├── home.ts
│   │       ├── work.ts
│   │       ├── expertise.ts
│   │       ├── about.ts
│   │       ├── contact.ts
│   │       ├── navigation.ts
│   │       └── footer.ts
│   │
│   ├── projects/
│   │   ├── index.ts
│   │   ├── project.schema.ts
│   │   ├── jonjobs-h2/
│   │   │   ├── index.ts
│   │   │   ├── content.en.ts
│   │   │   ├── content.pt-BR.ts
│   │   │   └── media.ts
│   │   ├── instructional-project-01/
│   │   │   ├── index.ts
│   │   │   ├── content.en.ts
│   │   │   ├── content.pt-BR.ts
│   │   │   └── media.ts
│   │   └── visual-project-01/
│   │       ├── index.ts
│   │       ├── content.en.ts
│   │       ├── content.pt-BR.ts
│   │       └── media.ts
│   │
│   ├── data/
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   ├── tools.ts
│   │   ├── social.ts
│   │   └── expertise.ts
│   │
│   ├── config/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   ├── theme.ts
│   │   ├── social.ts
│   │   └── routes.ts
│   │
│   ├── lib/
│   │   ├── i18n.ts
│   │   ├── metadata.ts
│   │   ├── projects.ts
│   │   ├── routes.ts
│   │   ├── cn.ts
│   │   └── format.ts
│   │
│   ├── hooks/
│   │   ├── useScrollDirection.ts
│   │   ├── useLockBodyScroll.ts
│   │   └── useReducedMotion.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tokens.css
│   │   └── animations.css
│   │
│   └── types/
│       ├── content.ts
│       ├── locale.ts
│       ├── navigation.ts
│       ├── project.ts
│       └── experience.ts
│
├── AGENTS.md
├── next.config.ts
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

### Regras de organização

- `app` deverá conter principalmente composição de páginas e rotas.
- Não colocar grandes blocos de interface diretamente em `page.tsx`.
- `features` deverá conter seções e comportamentos relacionados a domínios do site.
- `components/ui` deverá conter apenas componentes realmente reutilizáveis.
- `projects` deverá conter cases autocontidos.
- Cada projeto deverá possuir conteúdo, metadados e referências de mídia próprios.
- `content` deverá armazenar textos institucionais e de interface.
- `data` deverá armazenar dados estruturados, como experiência, ferramentas e competências.
- `config` deverá armazenar configurações globais.
- Evitar criar pastas para um único arquivo sem motivo.
- Não transformar todos os pequenos elementos em componentes.
- Criar abstrações apenas quando houver reutilização concreta.

---

## 7. Sistema de projetos e cases

O portfólio não deverá funcionar como uma galeria de imagens.

Cada projeto deverá ser apresentado como um case.

Cada case deverá responder rapidamente:

1. Qual era o problema?
2. Qual foi o papel de Jonatha?
3. Como o problema foi resolvido?
4. Quais ferramentas e competências foram utilizadas?
5. Qual foi o resultado?

### 7.1. Estrutura mínima de um projeto

```ts
type ProjectCategory =
  | "instructional-design"
  | "visual-design"
  | "digital-products";

type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  summary: string;
  category: ProjectCategory;
  featured: boolean;
  year: number;
  client?: string;
  confidential?: boolean;
  role: string[];
  services: string[];
  tools: string[];
  coverImage: string;
  thumbnailImage?: string;
  gallery: ProjectMedia[];
  liveUrl?: string;
  repositoryUrl?: string;
  caseStudyUrl?: string;
  seo: {
    title: string;
    description: string;
  };
  content: {
    context: string;
    challenge: string;
    role: string;
    process: ProjectSection[];
    solution: string;
    outcome: string;
    learnings?: string;
  };
};
```

### 7.2. Estrutura visual do case

```text
Project Hero
├── Categoria
├── Título
├── Resumo
├── Ano
├── Papel
├── Serviços
├── Ferramentas
└── Imagem principal

Case Overview
├── Contexto
├── Desafio
├── Meu papel
└── Resultado resumido

Processo
├── Descoberta
├── Estratégia
├── Design
├── Desenvolvimento ou produção
└── Validação

Solução
├── Explicação
├── Imagens
├── Vídeos
└── Detalhes relevantes

Resultado
├── Impacto
├── Aprendizados
└── Próximos passos

Related Projects
Contact CTA
```

### 7.3. Projetos confidenciais

Para trabalhos protegidos por contrato ou confidencialidade:

- não expor informações internas;
- não inventar números;
- não exibir dados sensíveis;
- explicar o contexto de maneira genérica;
- focar no processo, nas responsabilidades e nas decisões;
- usar imagens recriadas ou abstraídas quando necessário;
- informar claramente que partes do projeto foram adaptadas por confidencialidade.

---

## 8. Identidade visual

### 8.1. Conceito central

O website deverá “vestir” como Jonatha se veste.

A identidade deverá se inspirar em:

- papel algodão;
- tecido cru;
- linho;
- couro;
- latão escovado;
- madeira clara;
- grafite;
- aço escovado;
- tons terrosos;
- mostarda;
- verde oliva;
- azul-marinho;
- vinho.

A interface deve ser moderna e digital, enquanto as cores e texturas visuais remetem a materiais reais.

A identidade não deverá parecer:

- retrô;
- rústica;
- artesanal em excesso;
- boho;
- cafeteria;
- marca de cosmético;
- template de startup;
- site genérico de inteligência artificial.

A composição deverá combinar:

> Estrutura digital contemporânea + paleta tátil e material.

### 8.2. Paleta de cores

#### Cores principais

| Papel                    | Referência escrita          | HEX       |
| ------------------------ | --------------------------- | --------- |
| Background principal     | Papel algodão               | `#F7F5F1` |
| Background secundário    | Linho claro                 | `#EFE9E1` |
| Texto principal          | Grafite profundo            | `#2B2A28` |
| Texto secundário         | Cinza quente                | `#67635D` |
| Texto discreto           | Taupe acinzentado           | `#8B857C` |
| Bordas                   | Grafite metálico claro      | `#CFC8BD` |
| Cor principal            | Mostarda / açafrão queimado | `#C68A1E` |
| Hover principal          | Mostarda escurecido         | `#A86F16` |
| Verde de apoio           | Oliva rico                  | `#6E8F3D` |
| Azul de apoio            | Azul-marinho profundo       | `#23395B` |
| Vinho de destaque        | Vinho seco                  | `#6B3C44` |
| Branco de alto contraste | Branco quente               | `#FFFDF9` |

#### Aplicação das cores

##### Papel algodão — `#F7F5F1`

Usar em:

- background principal;
- header;
- páginas de conteúdo;
- cards claros;
- áreas de leitura extensa.

##### Linho — `#EFE9E1`

Usar em:

- seções alternadas;
- menu mobile;
- blocos secundários;
- áreas de apoio;
- fundos de cards destacados.

##### Grafite — `#2B2A28`

Usar em:

- textos principais;
- títulos;
- ícones;
- bordas de CTA;
- fundos pontuais de contraste.

##### Mostarda — `#C68A1E`

Cor institucional principal.

Usar em:

- botões principais;
- detalhes gráficos;
- números;
- indicadores;
- links ativos;
- linhas de hover;
- elementos que guiam a leitura.

Não usar mostarda em grandes áreas contínuas, exceto no CTA final ou em uma composição muito controlada.

##### Verde oliva — `#6E8F3D`

Usar como apoio em:

- Instructional Design;
- aprendizado;
- crescimento;
- processos;
- badges;
- detalhes de cases.

##### Azul-marinho — `#23395B`

Usar como apoio em:

- Digital Products;
- tecnologia;
- links;
- footer;
- superfícies de alto contraste;
- estados ativos específicos.

##### Vinho — `#6B3C44`

Usar como apoio em:

- Visual Design;
- direção de arte;
- pequenos detalhes;
- indicadores de categoria.

### 8.3. Cores por área

A identidade global permanece mostarda.

Cada especialidade poderá usar uma cor auxiliar:

```text
Instructional Design
Verde oliva
#6E8F3D

Visual Design
Vinho seco
#6B3C44

Digital Products
Azul-marinho profundo
#23395B
```

Essas cores devem aparecer apenas em:

- labels;
- linhas;
- pequenos ícones;
- indicadores;
- números;
- badges;
- hovers;
- detalhes de composição.

Não criar três websites visualmente diferentes dentro do mesmo portfólio.

---

## 9. Tipografia

### 9.1. Direção tipográfica

A tipografia deverá transmitir:

- modernidade;
- clareza;
- maturidade;
- precisão;
- personalidade editorial;
- boa legibilidade internacional.

Usar no máximo duas famílias tipográficas.

### 9.2. Sugestão de combinação

#### Títulos

Usar uma grotesca contemporânea com personalidade.

Opções, em ordem de preferência:

1. Space Grotesk
2. Manrope
3. Geist
4. General Sans, somente se houver licença e carregamento adequado

#### Corpo

Usar uma sans-serif altamente legível.

Opções:

1. Inter
2. Geist Sans
3. Manrope

Recomendação inicial:

```text
Headings: Space Grotesk
Body/UI: Inter
```

### 9.3. Regras tipográficas

- Evitar títulos excessivamente pesados.
- Preferir pesos entre 500 e 650.
- Usar tracking ligeiramente negativo nos títulos grandes.
- Usar largura de texto controlada.
- Parágrafos não devem ultrapassar aproximadamente 65 a 75 caracteres por linha.
- Não usar caixa alta em grandes blocos.
- Caixa alta pode aparecer em labels pequenos.
- Usar números e labels como elementos editoriais.
- Não usar mais de quatro tamanhos principais por breakpoint sem necessidade.

### 9.4. Escala sugerida

```text
Display:
clamp(3rem, 7vw, 7rem)

H1:
clamp(2.5rem, 5vw, 5rem)

H2:
clamp(2rem, 3.5vw, 3.75rem)

H3:
clamp(1.4rem, 2vw, 2rem)

Body Large:
1.125rem a 1.25rem

Body:
1rem

Small:
0.875rem

Label:
0.75rem a 0.8125rem
```

---

## 10. Grid, layout e espaçamento

### 10.1. Container

Usar container centralizado com largura máxima entre:

```text
1280px e 1360px
```

Padding horizontal:

```text
Mobile: 20px
Tablet: 32px
Desktop: 48px
Large Desktop: 64px
```

### 10.2. Grid

Usar grid responsivo:

```text
Mobile: 4 colunas
Tablet: 8 colunas
Desktop: 12 colunas
```

### 10.3. Espaçamento entre seções

O site deverá respirar.

Sugestão:

```text
Mobile:
80px a 112px

Desktop:
128px a 192px
```

Não compactar excessivamente as seções.

### 10.4. Bordas e raios

- Borders: 1px, discretas.
- Cards: 16px a 24px.
- Botões: podem usar formato mais arredondado, mas não completamente “pill” em todos os casos.
- Imagens: 16px a 24px.
- Elementos editoriais menores: 8px a 12px.

Evitar excesso de cantos arredondados.

---

## 11. Shapes e linguagem gráfica

A identidade gráfica poderá usar elementos inspirados em:

- diagramas;
- trajetórias;
- linhas técnicas;
- grids;
- arcos;
- pontos;
- coordenadas;
- marcas de registro;
- linhas editoriais;
- conexões.

### 11.1. Fio condutor

Criar uma linha sutil que percorra a Home e conecte visualmente diferentes seções.

Essa linha representa uma trajetória profissional única que se manifesta em diferentes especialidades.

Características:

- espessura de 1px;
- contraste baixo;
- curvas suaves;
- pontos ou marcadores discretos;
- não deve competir com o conteúdo;
- não deve executar animação contínua;
- pode ser progressivamente revelada durante o scroll.

### 11.2. Elementos permitidos

- linhas horizontais;
- linhas verticais;
- arcos;
- pequenos círculos;
- índices numéricos;
- marcações técnicas;
- pequenos blocos de cor;
- recortes geométricos;
- grids muito sutis.

### 11.3. Elementos a evitar

- blobs genéricos;
- ondas decorativas sem função;
- partículas;
- neon;
- grandes gradientes roxos;
- ícones 3D;
- esferas cromadas;
- glassmorphism;
- ilustrações tecnológicas genéricas;
- grids excessivamente visíveis;
- fundos em movimento constante.

---

## 12. Animações e microinterações

### 12.1. Princípio

Nada deverá se mover apenas para chamar atenção.

Os elementos devem reagir à navegação e ao usuário.

A animação deve reforçar:

- hierarquia;
- continuidade;
- resposta;
- transição;
- descoberta.

### 12.2. Animações permitidas

#### Entrada de seções

```text
Opacity: 0 → 1
Translate Y: 16px → 0
Scale opcional: 0.985 → 1
Duration: 400ms a 650ms
```

#### Stagger

Usar apenas em:

- listas curtas;
- cards;
- menu mobile;
- itens de expertise.

Intervalo sugerido:

```text
30ms a 70ms
```

#### Hover de cards

- imagem aumenta entre 1.01 e 1.03;
- borda muda suavemente;
- título desloca até 2px;
- seta se move horizontalmente;
- tags podem aparecer;
- evitar elevar o card excessivamente.

#### Links

- linha cresce da esquerda para a direita;
- cor muda para mostarda;
- seta pode deslocar 2px ou 4px.

#### Header

- pequena redução de altura durante scroll;
- transição de fundo transparente para papel algodão;
- borda inferior sutil;
- opcionalmente esconder ao rolar para baixo e revelar ao rolar para cima.

### 12.3. Regras técnicas

- Respeitar `prefers-reduced-motion`.
- Preferir CSS para interações simples.
- Usar biblioteca de animação apenas quando houver ganho real.
- Não adicionar Framer Motion apenas para fades básicos.
- Evitar animações que prejudiquem Core Web Vitals.
- Não bloquear conteúdo até a animação ser executada.
- Não usar parallax pesado.

---

## 13. Header e navegação

### 13.1. Estrutura desktop

```text
[ Jonatha Teixeira ]     [ Work ] [ Expertise ] [ About ] [ Contact ]     [ EN / PT ]
```

Versão recomendada:

```text
Jonatha Teixeira

Work
Expertise
About
Contact

Language
```

O nome funciona como assinatura textual.

Não criar logotipo complexo nesta primeira versão.

### 13.2. Aparência

No topo:

- fundo transparente ou papel algodão;
- altura confortável;
- sem grande sombra;
- conteúdo alinhado ao container principal.

Após scroll:

- fundo `#F7F5F1`;
- borda inferior `#CFC8BD`;
- sombra extremamente sutil, se necessária;
- altura reduzida suavemente.

### 13.3. Navegação principal

Links em grafite.

Hover:

- linha inferior mostarda;
- alteração sutil da cor;
- duração entre 180ms e 240ms.

Link ativo:

- pequeno ponto mostarda;
- ou linha mostarda;
- não usar botão preenchido para link ativo.

### 13.4. Menu Expertise

O item Expertise poderá abrir um dropdown pequeno.

Conteúdo:

```text
Instructional Design
Visual Design
Digital Products
```

Cada item deverá possuir:

- título;
- descrição curta;
- cor auxiliar;
- link para a página da especialidade.

Não criar megamenu.

### 13.5. CTA

Usar:

> Let’s talk

ou, em português:

> Vamos conversar

Estilo:

- borda grafite;
- fundo transparente;
- hover mostarda;
- texto grafite no normal;
- texto claro no hover.

---

## 14. Navegação mobile

### 14.1. Header mobile

```text
[ Jonatha Teixeira ]                  [ Menu ☰ ]
```

Exibir a palavra “Menu” junto ao ícone.

Ao abrir:

```text
[ Jonatha Teixeira ]                  [ Fechar × ]
```

### 14.2. Menu

Usar painel amplo, quase fullscreen.

Fundo:

```text
#EFE9E1
```

Estrutura:

```text
Jonatha Teixeira

01 Work
02 Expertise
03 About
04 Contact

Instructional Design
Visual Design
Digital Products

EN / PT-BR

LinkedIn
GitHub
Email
```

### 14.3. Animação do menu

- painel entra da direita ou de cima;
- fundo entra primeiro;
- itens aparecem em sequência;
- duração firme e curta;
- bloquear scroll do body;
- restaurar foco ao fechar;
- fechar com Escape;
- fechar ao clicar em link;
- manter navegação por teclado;
- usar focus trap.

### 14.4. Elemento gráfico mobile

Adicionar um arco, linha ou marca técnica discreta ao fundo do menu.

Não usar animação infinita.

---

## 15. Footer

### 15.1. Estrutura

O footer será dividido em três partes.

#### Parte 1 — CTA

Português:

> Tem uma oportunidade, um projeto ou uma ideia em mente?

> Vamos construir algo útil.

Botão:

> Iniciar uma conversa

#### Parte 2 — Navegação

```text
Navegação
Projetos
Especialidades
Sobre
Contato

Especialidades
Instructional Design
Visual Design
Digital Products

Conexões
LinkedIn
GitHub
E-mail
```

#### Parte 3 — Assinatura

```text
Jonatha Teixeira

Designer multidisciplinar criando experiências digitais em aprendizagem, comunicação visual e produtos digitais.

Brasil
Disponível para oportunidades remotas e internacionais
```

### 15.2. Aparência

Fundo principal:

```text
Azul-marinho profundo
#23395B
```

Texto principal:

```text
Papel algodão
#F7F5F1
```

Texto secundário:

```text
Grafite metálico claro
#CFC8BD
```

Destaques:

```text
Mostarda
#C68A1E
```

### 15.3. Detalhes visuais

Usar:

- linha horizontal longa;
- pequenos pontos;
- índice de seção;
- assinatura gráfica;
- localização apresentada de forma discreta.

Evitar exagerar em coordenadas, mapas ou elementos decorativos.

---

## 16. Home — conteúdo em português

O Codex deverá implementar o conteúdo em português e criar uma versão natural em inglês.

O inglês deverá ser a versão padrão.

### 16.1. Hero

#### Eyebrow

> Designer multidisciplinar

#### Headline principal

> Eu transformo ideias em experiências digitais claras, úteis e bem construídas.

#### Texto de apoio

> Trabalho na interseção entre aprendizagem, comunicação visual e produtos digitais, usando design, tecnologia e inteligência artificial para transformar problemas em soluções que as pessoas conseguem entender e utilizar.

#### CTA principal

> Ver projetos

#### CTA secundário

> Conhecer minha experiência

#### Links de especialidade

```text
Instructional Design
Visual Design
Digital Products
```

#### Disponibilidade

> Disponível para oportunidades remotas e internacionais.

Evitar mencionar Canadá diretamente no Hero.

O objetivo pessoal de imigração não deve ser o centro da apresentação profissional.

---

### 16.2. Featured Projects

#### Eyebrow

> Projetos em destaque

#### Título

> Trabalhos selecionados que mostram como penso, projeto e construo soluções.

#### Texto

> Uma seleção de projetos em aprendizagem, design visual e produtos digitais. Cada case apresenta o contexto, as decisões tomadas, meu papel e o resultado alcançado.

#### CTA

> Ver todos os projetos

Apresentar entre três e cinco cases.

Cada área principal deverá possuir pelo menos um projeto em destaque, quando houver material disponível.

---

### 16.3. Areas of Expertise

#### Eyebrow

> Áreas de atuação

#### Título

> Uma mesma forma de pensar, aplicada a diferentes tipos de experiência.

#### Texto

> Minha atuação combina pensamento visual, estrutura, tecnologia e atenção à experiência do usuário. As ferramentas mudam conforme o projeto, mas o objetivo permanece: tornar informações, produtos e interações mais claros, úteis e eficientes.

#### Card 1 — Instructional Design

Título:

> Instructional Design

Texto:

> Projeto experiências de aprendizagem digitais que organizam conteúdos complexos, orientam o usuário e facilitam a aplicação prática do conhecimento.

Competências:

```text
Design instrucional
Learning Experience Design
Storyline 360
Rise 360
Roteirização
Arquitetura de conteúdo
SCORM
Design de interações
```

CTA:

> Explorar Instructional Design

#### Card 2 — Visual Design

Título:

> Visual Design

Texto:

> Transformo mensagens, marcas e informações em sistemas visuais claros, consistentes e adequados ao contexto em que serão utilizados.

Competências:

```text
Direção visual
Design gráfico
Identidade visual
Layouts editoriais
Apresentações
Conteúdo digital
Tratamento de imagens
Motion básico
```

CTA:

> Explorar Visual Design

#### Card 3 — Digital Products

Título:

> Digital Products

Texto:

> Crio websites, interfaces e aplicações digitais, combinando estratégia, experiência do usuário, design visual, desenvolvimento e ferramentas de inteligência artificial.

Competências:

```text
Web Design
UI Design
UX
Prototipação
Next.js
React
Tailwind CSS
Supabase
Automação
IA aplicada
```

CTA:

> Explorar Digital Products

---

### 16.4. Selected Projects

#### Eyebrow

> Outros trabalhos

#### Título

> Projetos construídos em diferentes contextos, formatos e níveis de complexidade.

#### Texto

> Nem todo trabalho precisa ser um grande case. Esta seleção apresenta outros projetos relevantes, organizados por especialidade e pelo tipo de problema resolvido.

Filtros:

```text
Todos
Instructional Design
Visual Design
Digital Products
```

Evitar filtros baseados apenas em mídia, como:

```text
Imagens
Vídeos
Websites
Storyline
```

Os filtros devem representar especialidades e tipos de solução.

---

### 16.5. About Preview

#### Eyebrow

> Sobre mim

#### Título

> Design, tecnologia e aprendizagem sempre fizeram parte da mesma trajetória.

#### Texto

> Sou um designer multidisciplinar com experiência em design visual, desenvolvimento de conteúdos de aprendizagem e criação de produtos digitais. Minha formação em tecnologia e minha atuação em projetos corporativos ampliaram minha capacidade de conectar necessidades de negócio, experiência do usuário e execução visual.

> Gosto de compreender o problema antes de escolher a ferramenta. Em alguns projetos, a melhor solução é um curso interativo. Em outros, uma interface, um sistema visual, uma automação ou uma aplicação web.

#### CTA

> Conhecer minha trajetória

---

### 16.6. Skills & Tools

#### Eyebrow

> Competências e ferramentas

#### Título

> Ferramentas são parte do processo, não o ponto de partida.

#### Texto

> Escolho tecnologias e métodos de acordo com o problema, o público e o resultado esperado.

#### Grupo 1

Título:

> Learning & Instructional Design

Itens:

```text
Storyline 360
Rise 360
SCORM
Enable Now
Genially
Roteirização
Arquitetura de conteúdo
Learning Experience Design
```

#### Grupo 2

Título:

> Visual & Interaction Design

Itens:

```text
Figma
Photoshop
Illustrator
After Effects
Camtasia
Design de interfaces
Design gráfico
Prototipação
```

#### Grupo 3

Título:

> Web & Digital Products

Itens:

```text
Next.js
React
TypeScript
Tailwind CSS
HTML
CSS
JavaScript
Supabase
Vercel
GitHub
```

#### Grupo 4

Título:

> AI-assisted Workflow

Itens:

```text
Prototipação acelerada
Exploração de soluções
Geração e refinamento de conteúdo
Apoio ao desenvolvimento
Automação de tarefas
Criação de ativos visuais
```

Evitar apresentar IA como competência isolada sem contexto.

---

### 16.7. Experience Preview

#### Eyebrow

> Experiência

#### Título

> Experiência em projetos de design, aprendizagem e tecnologia.

#### Texto

> Minha trajetória inclui criação visual, desenvolvimento de conteúdos digitais, projetos corporativos e construção de soluções para diferentes públicos e contextos.

Exibir uma versão resumida da experiência.

Experiências principais:

```text
TCS Brasil
Business Analyst / Learning Content and Digital Solutions
2024 — atual

Plural Web
Visual Designer and E-learning Designer
2021 — 2023
```

Não inventar responsabilidades.

Usar apenas informações fornecidas ou confirmadas.

CTA:

> Ver experiência completa

---

### 16.8. Contact CTA

#### Título

> Tem uma oportunidade, um projeto ou um problema que precisa ser melhor resolvido?

#### Texto

> Estou disponível para conversar sobre oportunidades em design instrucional, design visual, produtos digitais e projetos que combinem design, tecnologia e inteligência artificial.

#### CTA principal

> Entrar em contato

#### CTA secundário

> Ver LinkedIn

---

## 17. Página Work

### Hero

Eyebrow:

> Portfólio

Título:

> Projetos em aprendizagem, comunicação visual e produtos digitais.

Texto:

> Esta seleção apresenta trabalhos em diferentes contextos, organizados como cases para mostrar o problema, meu papel, o processo e a solução desenvolvida.

Filtros:

```text
Todos
Instructional Design
Visual Design
Digital Products
```

### Requisitos

- Exibir projetos em grid.
- Permitir filtrar sem recarregar desnecessariamente.
- Manter filtros acessíveis.
- Atualizar query string somente se isso melhorar compartilhamento e navegação.
- Não criar busca na primeira versão.
- Não criar ordenação complexa.
- Não usar paginação caso a quantidade de projetos ainda seja pequena.
- Priorizar imagens fortes, títulos claros e resumo curto.

---

## 18. Página Expertise

### Hero

Eyebrow:

> Especialidades

Título:

> Três áreas conectadas por uma mesma forma de resolver problemas.

Texto:

> Minha atuação se desenvolveu em contextos diferentes, mas sempre partiu da mesma base: organizar informações, compreender pessoas, construir uma direção clara e transformar ideias em experiências utilizáveis.

### Estrutura

```text
Instructional Design
├── Descrição
├── Competências
├── Projetos relacionados
└── CTA

Visual Design
├── Descrição
├── Competências
├── Projetos relacionados
└── CTA

Digital Products
├── Descrição
├── Competências
├── Projetos relacionados
└── CTA
```

---

## 19. Página Instructional Design

### SEO principal

Termos relevantes:

```text
Instructional Designer
Instructional Design Portfolio
Learning Designer
Learning Experience Designer
E-learning Developer
Storyline Developer
Articulate Storyline
Articulate Rise
SCORM
```

Não repetir palavras-chave de forma artificial.

### Hero

Eyebrow:

> Instructional Design

Título:

> Experiências de aprendizagem claras, interativas e orientadas à aplicação.

Texto:

> Projeto conteúdos digitais que transformam informações complexas em jornadas estruturadas de aprendizagem. Combino estratégia instrucional, arquitetura de conteúdo, design de interação e produção visual para criar materiais que ajudam as pessoas a compreender, praticar e aplicar.

### Capacidades

```text
Análise de necessidades
Arquitetura de aprendizagem
Roteirização
Storyboarding
Storyline 360
Rise 360
SCORM
Interações
Avaliações
Learning Experience Design
Design visual para aprendizagem
```

### Processo

```text
1. Entender o público, o contexto e a necessidade
2. Organizar o conteúdo e os objetivos
3. Definir a experiência de aprendizagem
4. Criar roteiro, storyboard e protótipo
5. Desenvolver e validar
6. Publicar, revisar e aprimorar
```

### Projetos relacionados

Exibir somente projetos de Instructional Design.

---

## 20. Página Visual Design

### SEO principal

Termos relevantes:

```text
Visual Designer
Graphic Designer
Visual Design Portfolio
Graphic Design Portfolio
Brand Design
Editorial Design
Digital Design
```

### Hero

Eyebrow:

> Visual Design

Título:

> Sistemas visuais que tornam mensagens mais claras, consistentes e memoráveis.

Texto:

> Crio soluções visuais para marcas, conteúdos, interfaces e comunicações digitais. Meu trabalho combina hierarquia, composição, tipografia, cor e contexto para construir peças que não sejam apenas bonitas, mas que cumpram uma função.

### Capacidades

```text
Direção visual
Identidade visual
Design gráfico
Design editorial
Layouts digitais
Apresentações
Social media
Tratamento de imagem
Motion básico
Design de interfaces
```

### Processo

```text
1. Compreender a mensagem e o contexto
2. Identificar o público e a intenção
3. Definir direção visual
4. Explorar composição, tipografia e cor
5. Criar e refinar o sistema
6. Adaptar para diferentes formatos
```

### Projetos relacionados

Exibir somente projetos de Visual Design.

---

## 21. Página Digital Products

### SEO principal

Termos relevantes:

```text
Web Designer
UI Designer
UX/UI Designer
Digital Product Designer
Creative Technologist
Next.js Portfolio
Web Application Design
AI-powered Products
```

### Hero

Eyebrow:

> Digital Products

Título:

> Websites e aplicações que conectam estratégia, experiência e tecnologia.

Texto:

> Projeto e construo experiências digitais que resolvem necessidades reais. Minha atuação pode envolver definição do produto, UX, interface, prototipação, desenvolvimento front-end, integração de serviços e uso de inteligência artificial para acelerar a criação e validar soluções.

### Capacidades

```text
Estratégia de produto
UX
UI Design
Web Design
Prototipação
Next.js
React
TypeScript
Tailwind CSS
Supabase
Vercel
Integrações
Automação
IA aplicada
```

### Observação sobre IA

Texto:

> Utilizo inteligência artificial como parte do processo de pesquisa, exploração, prototipação, desenvolvimento e automação. A ferramenta acelera a execução, mas as decisões de produto, experiência, conteúdo e design permanecem orientadas pelo problema e pelo usuário.

### Processo

```text
1. Compreender o problema e o público
2. Definir escopo e prioridades
3. Organizar fluxos e conteúdo
4. Prototipar a experiência
5. Construir a interface e as integrações
6. Validar, publicar e evoluir
```

### Projetos relacionados

Exibir somente projetos de Digital Products.

---

## 22. Página About

### Hero

Eyebrow:

> Sobre mim

Título:

> Um profissional de design que aprendeu a pensar também como alguém de tecnologia.

### Texto principal

> Minha trajetória começou no design visual e evoluiu para projetos de aprendizagem, tecnologia e produtos digitais. Ao longo dos anos, percebi que as áreas não estavam desconectadas. Em todas elas, eu precisava compreender um problema, organizar informações, tomar decisões visuais e construir uma experiência que funcionasse para alguém.

> Hoje, atuo de forma multidisciplinar. Posso desenvolver uma experiência de aprendizagem, estruturar uma comunicação visual, desenhar uma interface ou construir uma aplicação web. O formato depende da necessidade; a forma de pensar permanece consistente.

> Minha formação em Análise e Desenvolvimento de Sistemas, Design Instrucional e Gestão de Projetos complementa a experiência prática que construí trabalhando com design visual, e-learning, conteúdos corporativos e soluções digitais.

### Formação

```text
Tecnólogo em Análise e Desenvolvimento de Sistemas
UNINOVE

Pós-graduação em Design Instrucional
UNOPAR

MBA em Gestão de Projetos
```

### Princípios profissionais

#### Clareza antes da complexidade

> Uma boa solução não precisa parecer complicada para demonstrar valor.

#### A ferramenta vem depois do problema

> Não começo escolhendo tecnologia ou formato. Primeiro, procuro compreender o que precisa ser resolvido.

#### Design precisa cumprir uma função

> Estética, conteúdo e interação devem trabalhar juntos para orientar a experiência.

#### IA acelera, mas não substitui decisão

> Utilizo inteligência artificial para explorar, construir e automatizar, mantendo responsabilidade sobre as escolhas e o resultado.

#### Versatilidade com direção

> Atuar em diferentes áreas não significa tratar tudo da mesma forma. Cada projeto exige profundidade, contexto e critérios próprios.

### Idiomas

```text
Português: nativo
Inglês: B2 / Upper-intermediate
Francês: em desenvolvimento
```

### CTA

> Ver meus projetos

---

## 23. Página Contact

### Hero

Eyebrow:

> Contato

Título:

> Vamos conversar sobre uma oportunidade, um projeto ou uma ideia.

Texto:

> Estou disponível para oportunidades remotas e internacionais, projetos de design instrucional, design visual, produtos digitais e trabalhos que combinem design, tecnologia e inteligência artificial.

### Canais

```text
E-mail
LinkedIn
GitHub
```

### Formulário

Campos:

```text
Nome
E-mail
Empresa
Assunto
Mensagem
```

Assuntos sugeridos:

```text
Oportunidade profissional
Instructional Design
Visual Design
Website ou aplicação
Outro projeto
```

### Regras do formulário

- labels visíveis;
- mensagens de erro claras;
- validação acessível;
- honeypot anti-spam;
- não exigir empresa;
- não exigir telefone;
- feedback de envio;
- não depender exclusivamente de toast;
- manter alternativa de contato por e-mail.

### Mensagem de disponibilidade

> Costumo responder em até dois dias úteis.

Não exibir essa promessa caso não possa ser mantida.

---

## 24. Componentes principais

### Button

Variantes:

```text
primary
secondary
outline
text
inverse
```

### ProjectCard

Conteúdo:

```text
Categoria
Imagem
Título
Resumo curto
Ano
Papel
Tags essenciais
Link para o case
```

Não exibir uma lista extensa de ferramentas no card.

### ExpertiseCard

Conteúdo:

```text
Número
Título
Descrição
Competências resumidas
CTA
Cor auxiliar
```

### SectionHeading

Props sugeridas:

```ts
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: "small" | "medium" | "large";
};
```

### Container

Criar um único componente para controlar:

- largura máxima;
- padding;
- alinhamento;
- consistência responsiva.

---

## 25. SEO

### 25.1. Requisitos gerais

Implementar:

- metadata por página;
- title template;
- description;
- Open Graph;
- Twitter cards;
- canonical;
- hreflang;
- sitemap;
- robots;
- structured data;
- imagens OG;
- alt text;
- URLs legíveis;
- conteúdo indexável;
- headings semânticos.

### 25.2. Title padrão

Português:

> Jonatha Teixeira — Designer Multidisciplinar

Inglês:

> Jonatha Teixeira — Multidisciplinary Designer

### 25.3. Description padrão

Português:

> Portfólio de Jonatha Teixeira, designer multidisciplinar com experiência em Instructional Design, Visual Design e criação de websites e produtos digitais com tecnologia e inteligência artificial.

A versão em inglês deverá ser natural e não literal.

### 25.4. Structured data

Adicionar:

- `Person`
- `WebSite`
- `CreativeWork` ou `Article` para cases, quando adequado
- `BreadcrumbList`

Não inserir informações não confirmadas.

### 25.5. Conteúdo e palavras-chave

As palavras-chave devem aparecer naturalmente em:

- títulos;
- descrições;
- cases;
- metadados;
- textos das páginas especializadas.

Não criar blocos artificiais de palavras-chave.

---

## 26. Acessibilidade

Seguir WCAG 2.2 nível AA sempre que possível.

Requisitos:

- HTML semântico;
- apenas um `h1` principal por página;
- hierarquia correta de headings;
- skip link;
- contraste adequado;
- navegação por teclado;
- focus visível;
- menu mobile acessível;
- focus trap;
- fechamento por Escape;
- labels visíveis;
- alt text;
- `aria-expanded`;
- `aria-controls`;
- mensagens de erro associadas aos campos;
- não depender apenas de cor;
- respeitar redução de movimento;
- áreas clicáveis confortáveis;
- idioma correto no documento.

---

## 27. Performance

Prioridades:

- Server Components por padrão;
- reduzir JavaScript no cliente;
- imagens em WebP ou AVIF;
- `next/image`;
- `next/font`;
- lazy loading;
- conteúdo estático;
- geração estática dos cases;
- evitar bibliotecas pesadas;
- evitar vídeos automáticos;
- evitar canvas;
- evitar animações custosas;
- não carregar todas as imagens de cases na Home;
- não carregar scripts de terceiros sem necessidade.

Objetivos:

```text
Lighthouse Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

Não sacrificar experiência real apenas para atingir um número.

---

## 28. Responsividade

Breakpoints poderão seguir Tailwind, mas o layout deverá ser testado em:

```text
360px
390px
768px
1024px
1280px
1440px
```

Requisitos:

- nenhuma rolagem horizontal;
- títulos não devem quebrar de forma ruim;
- cards devem manter boa legibilidade;
- menu mobile não deve depender de hover;
- imagens devem manter proporção;
- grids devem adaptar de forma natural;
- CTAs devem permanecer acessíveis;
- footer deve reorganizar as colunas;
- layouts não devem parecer versões comprimidas do desktop.

---

## 29. Ícones

Usar apenas um sistema de ícones.

Recomendação:

```text
Lucide React
```

Não misturar:

- Lucide;
- Font Awesome;
- Heroicons;
- SVGs com pesos diferentes.

Usar SVG customizado apenas quando necessário para identidade visual.

---

## 30. Implementação por etapas

### Fase 1 — Fundação

- configurar i18n;
- definir rotas;
- criar tokens;
- configurar fontes;
- criar Container;
- criar Button;
- criar Section;
- criar SectionHeading;
- configurar metadata;
- configurar estrutura de conteúdo;
- criar modelos de projeto.

### Fase 2 — Navegação

- Header;
- DesktopNavigation;
- ExpertiseDropdown;
- LanguageSwitcher;
- MobileNavigation;
- MobileMenu;
- Footer.

### Fase 3 — Home

- Hero;
- Featured Projects;
- Expertise;
- Selected Projects;
- About Preview;
- Skills;
- Experience Preview;
- Contact CTA.

### Fase 4 — Páginas

- Work;
- Project Case Study;
- Expertise;
- Instructional Design;
- Visual Design;
- Digital Products;
- About;
- Contact.

### Fase 5 — Conteúdo

- adicionar projetos reais;
- inserir imagens;
- revisar textos;
- criar traduções;
- adicionar metadados individuais;
- revisar cases confidenciais.

### Fase 6 — Refinamento

- animações;
- estados de hover;
- acessibilidade;
- responsividade;
- SEO;
- performance;
- revisão de conteúdo;
- testes finais.

---

## 31. Orientações para o Codex

### 31.1. Antes de implementar

- Ler este documento.
- Ler o `AGENTS.md`.
- Inspecionar o projeto atual.
- Não substituir configurações existentes sem necessidade.
- Não instalar dependências automaticamente.
- Implementar em etapas.
- Não tentar construir todo o website em uma única alteração sem revisar a fundação.

### 31.2. Conteúdo

- Implementar os textos fornecidos em português brasileiro.
- Criar versões profissionais em inglês.
- Usar inglês como idioma padrão.
- Não usar traduções literais.
- Não inventar clientes, métricas, ferramentas ou resultados.
- Usar placeholders claramente identificados quando faltar informação.
- Não publicar informações confidenciais.

### 31.3. Design

- Seguir rigorosamente os tokens.
- Não substituir mostarda por azul ou roxo como cor principal.
- Não criar dark mode nesta primeira versão.
- Não usar glassmorphism.
- Não usar gradientes genéricos.
- Não criar efeitos neon.
- Não usar componentes visualmente genéricos de SaaS.
- Manter aparência editorial, contemporânea e tátil.
- Usar cores de apoio com moderação.
- Não transformar cada seção em um card.

### 31.4. Código

- Usar TypeScript strict.
- Preferir Server Components.
- Isolar Client Components.
- Não usar `any`.
- Não criar APIs para conteúdo estático.
- Não adicionar CMS.
- Não adicionar banco de dados.
- Não adicionar sistema de autenticação.
- Não criar testes para conteúdo estático trivial.
- Não executar build após cada pequena mudança.
- Executar lint como validação padrão.
- Executar build apenas quando necessário segundo o `AGENTS.md`.

---

## 32. Critérios de aceite

O projeto inicial será considerado corretamente implementado quando:

- o inglês for o idioma padrão;
- o português estiver disponível em `/pt-br`;
- Header e Footer estiverem em arquivos separados;
- o menu mobile estiver em arquivo separado;
- a navegação for acessível;
- a paleta definida estiver aplicada;
- a Home apresentar claramente as três áreas;
- o usuário compreender o posicionamento em poucos segundos;
- os projetos forem apresentados como cases;
- cada especialidade possuir página própria;
- o site não parecer três portfólios separados;
- o site não parecer um template genérico de tecnologia;
- os textos não criarem confusão sobre a experiência profissional;
- a IA estiver apresentada como ferramenta de aceleração e construção;
- os cases possuírem rotas individuais;
- o conteúdo estiver tipado;
- o layout estiver responsivo;
- as páginas possuírem metadata;
- o projeto estiver preparado para Vercel;
- não houver dependências desnecessárias;
- não houver animações excessivas;
- não houver dados inventados.

---

## 33. Resumo da direção

O website deverá apresentar Jonatha como:

> Um designer multidisciplinar que cria experiências digitais em aprendizagem, comunicação visual e produtos digitais.

A identidade visual deverá combinar:

> Papel, tecido, grafite, mostarda, oliva, vinho e azul-marinho com uma estrutura moderna e tecnológica.

A experiência deverá permitir que diferentes recrutadores encontrem rapidamente o que procuram sem ficarem confusos com as demais competências.

A Home deverá unificar a narrativa.

As páginas de especialidade deverão aprofundar os diferentes perfis profissionais.

Os projetos deverão comprovar competências por meio de contexto, processo, decisões e resultados.

A inteligência artificial deverá aparecer como parte concreta do processo de trabalho, e não como promessa vaga ou título profissional exagerado.
