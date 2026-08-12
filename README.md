# Portfólio Pessoal — MeuPortfolio

Portfólio pessoal desenvolvido para apresentar perfil técnico e experiência profissional de forma clara, moderna e responsiva, com foco em vagas de desenvolvedor júnior.

## Descrição

Este projeto é uma vitrine front-end construída em React e Vite, com foco em:
- apresentação de perfil e projetos alinhados a vagas júnior
- visualização de skills técnicas e soft skills para equipes ágeis
- exibição de projetos com detalhes expandidos e galeria de imagens
- navegação fluida e acessibilidade básica

O portfólio foi pensado para vagas de desenvolvedor júnior, destacando competências em front-end e suporte full-stack.

## Tecnologias utilizadas

- React 19
- Vite
- Tailwind CSS
- Lucide Icons
- ESLint

## Estrutura principal

- `src/main.jsx` — inicialização da aplicação
- `src/App.jsx` — layout global e composição das seções da página
- `src/data/portfolio.js` — dados do portfólio: perfil, skills, projetos e navegação
- `src/components/sections/` — seções temáticas: Hero, Skills, Projects, About e Contact
- `src/components/layout/` — navegação, barra de progresso e controles de página
- `src/components/ui/` — componentes de interface reutilizáveis e estilizados
- `src/hooks/usePageNavigation.js` — lógica de navegação por seção e scroll

## Principais recursos

- Design responsivo e adaptado para desktop e mobile
- Seção de skills com classificação de proficiência
- Modal de projeto full-screen com preview de imagens
- Navegação por âncoras e indicador de seção ativa
- Animações suaves e carregamento progressivo de conteúdo
- Estrutura modular para fácil manutenção e expansão

## Uso

Instale dependências:

```bash
npm install
```

Execute em modo de desenvolvimento:

```bash
npm run dev
```

Acesse em `http://localhost:5173`.

## Scripts disponíveis

- `npm run dev` — inicia ambiente de desenvolvimento
- `npm run build` — gera build de produção
- `npm run preview` — serve a build localmente
- `npm run lint` — executa ESLint para análise de código

## Melhorias sugeridas

- adicionar TypeScript para tipagem estática
- incluir testes unitários e de integração
- transformar projetos em dados dinâmicos via API
- adicionar suporte a dark mode e temas

## Contexto do projeto

Este portfólio foi construído para demonstrar habilidades e potencial para vagas de desenvolvedor júnior. A arquitetura prioriza clareza, modularidade e facilidade de atualização, facilitando a inclusão de novos projetos e conteúdos.
