import {
  Braces,
  Cloud,
  Component,
  Database,
  FileType2,
  GitBranch,
  Palette,
  Server,
  Wind,
} from "lucide-react";

export const PROFILE = {
  name: "Jean Carlos da Silva Gonçalves",
  role: "Desenvolvedor Full-Stack Júnior com foco em Front-end",
  pitch:
    "Desenvolvedor Full-Stack Júnior com foco em Front-end, usando React, TypeScript e Material UI para construir interfaces responsivas e integrações com APIs REST. Atuei em projeto freelancer para consultoria de saúde, participando do levantamento de requisitos, reuniões semanais com o cliente e entregas iterativas. Tenho experiência complementar em backend com AdonisJS, Docker, PostgreSQL e AWS S3, com ajustes pontuais e suporte a integrações. Busco oportunidade de vaga júnior em equipe ágil para crescer tecnicamente, aprender rápido e contribuir com soluções reais.",
  github: "https://github.com/Jamcarlos1",
  linkedin:
    "https://www.linkedin.com/in/jean-carlos-da-silva-gon%C3%A7alves-a95448100/",
  email: "jeancarlossilva1234@gmail.com",
};

export const STAT = { value: "3+", label: "Projetos Desenvolvidos" };
export const HERO_SKILLS = ["React", "TypeScript", "Tailwind"];
export const SOFT_SKILLS = [
  "Proatividade",
  "Aprendizado constante",
  "Trabalho em equipe",
];

export const SKILLS = [
  { name: "JavaScript", tag: "const", level: "Avançado", Icon: Braces },
  { name: "React", tag: "import", level: "Avançado", Icon: Component },
  {
    name: "Material UI",
    tag: "component",
    level: "Intermediário",
    Icon: Component,
  },
  { name: "Vue", tag: "template", level: "Intermediário", Icon: Component },
  { name: "Angular", tag: "module", level: "Básico", Icon: Component },
  { name: "HTML/CSS", tag: "tag", level: "Avançado", Icon: Palette },
  { name: "Tailwind", tag: "class", level: "Intermediário", Icon: Wind },
  { name: "Git", tag: "commit", level: "Intermediário", Icon: GitBranch },
  { name: "GitHub", tag: "push", level: "Intermediário", Icon: GitBranch },
  { name: "Node.js", tag: "async", level: "Básico", Icon: Server },
  { name: "NestJS", tag: "controller", level: "Básico", Icon: Server },
  { name: "AdonisJS", tag: "route", level: "Básico", Icon: Server },
  { name: "PHP", tag: "echo", level: "Básico", Icon: Braces },
  { name: "Laravel", tag: "route", level: "Básico", Icon: Wind },
  { name: "MySQL", tag: "select", level: "Básico", Icon: Database },
  { name: "PostgreSQL", tag: "query", level: "Básico", Icon: Database },
  { name: "API REST", tag: "fetch", level: "Intermediário", Icon: Server },
  { name: "AWS S3", tag: "bucket", level: "Básico", Icon: Cloud },
  { name: "TypeScript", tag: "type", level: "Avançado", Icon: FileType2 },
];

export const PROJECTS = [
  {
    id: "01",
    name: "users-management-react",
    title: "Users Management System",
    featured: true,
    description:
      "Painel administrativo para gerenciamento de usuários com CRUD completo, formulário dinâmico, upload de foto e persistência local. O projeto demonstra organização de componentes, boas práticas de UI e uso de React para criar uma experiência funcional e responsiva.",
    stack: ["React", "Styled Components", "localStorage", "React Icons"],
    challenge:
      "organizar um fluxo de cadastro, edição e exclusão de usuários com persistência no navegador e upload de imagem. A solução foi centralizar o estado do formulário e armazenar os dados com localStorage para manter a consistência da interface.",
    demo: "https://users-management-react.vercel.app/",
    repo: "https://github.com/Jamcarlos1/UsersManagement.React",
    images: [new URL("../assets/users.png", import.meta.url).href],
  },
  {
    id: "02",
    name: "grp-gestao-recursos-publicos",
    title: "GRP — Sistema de Gestão de Recursos Públicos",
    featured: true,
    description:
      "Sistema web full-stack sob medida para consultoria de saúde, integrando dois módulos: gestão de consultoria em saúde (beneficiários, atos normativos, adesões e contas bancárias) e gestão de compras (solicitações, empenhos e ordens de pagamento). Atuei desde o levantamento de requisitos, com reuniões semanais e ajustes constantes com o cliente. No front-end, desenvolvi com React, TypeScript e Material UI. No back-end, fiz ajustes pontuais em AdonisJS, Docker e PostgreSQL, com foco em upload de avatares e configuração de CORS para AWS S3.",
    stack: [
      "React",
      "TypeScript",
      "Material UI",
      "AdonisJS",
      "Docker",
      "PostgreSQL",
      "AWS",
    ],
    challenge:
      "Desenvolver a maior parte do front-end e ajustar pontos específicos no back-end para suportar upload seguro de arquivos para AWS S3. A solução incluiu comunicação contínua com o cliente e entrega de uma plataforma modular capaz de atender às necessidades da consultoria de saúde.",
    demo: null,
    repo: null,
    confidentialNote:
      "Projeto confidencial — o código pertence ao cliente e não pode ser compartilhado publicamente.",
    images: [
      new URL("../assets/grp-01-home.png", import.meta.url).href,
      new URL("../assets/grp-02-home-sidebar.png", import.meta.url).href,
      new URL("../assets/grp-03-menu-usuario.png", import.meta.url).href,
      new URL("../assets/grp-04-selecao-modulo.png", import.meta.url).href,
      new URL("../assets/grp-05-login.png", import.meta.url).href,
      new URL("../assets/grp-06-modulo-compras.png", import.meta.url).href,
    ],
  },
  {
    id: "03",
    name: "spotify-clone",
    title: "Spotify Clone",
    featured: false,
    description:
      "Clone da interface do Spotify desenvolvido durante a Imersão Front-end da Alura. O projeto reproduz a experiência visual da plataforma e implementa busca dinâmica de artistas consumindo uma API REST com JSON Server.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "JSON Server",
      "Font Awesome",
      "Google Fonts",
    ],
    challenge:
      "Implementar uma busca dinâmica de artistas consumindo uma API REST fake com JSON Server, manipulando o DOM em tempo real e mantendo um layout responsivo e organizado.",
    demo: "https://spotify-imersao-alura-78yz.vercel.app/",
    repo: "https://github.com/Jamcarlos1/Spotify-imersao-alura",
    images: [new URL("../assets/spotify.png", import.meta.url).href],
  },
];

export const NAV_ITEMS = [
  { id: "perfil", label: "perfil" },
  { id: "projetos", label: "projetos" },
  { id: "sobre", label: "sobre" },
  { id: "contato", label: "contato" },
];
