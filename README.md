# Nerd Em Foco 🎮

Uma plataforma moderna de notícias sobre o universo nerd desenvolvida com as últimas tecnologias web.

## 🚀 Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Type safety em todo o projeto
- **Tailwind CSS**: Estilização utility-first
- **React 18**: Para componentes interativos
- **Prisma ORM**: Para gerenciar banco de dados (preparado)
- **date-fns**: Formatação de datas
- **ESLint**: Linting e análise de código

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Home page
│   ├── globals.css        # Estilos globais
│   ├── login/             # Página de login
│   ├── news/              # Notícias
│   │   ├── page.tsx       # Lista de notícias
│   │   └── [id]/          # Notícia individual
│   ├── about/             # Página sobre
│   └── contact/           # Página de contato
└── components/            # Componentes React
    ├── Header.tsx         # Cabeçalho
    ├── NewsCard.tsx       # Card de notícia
    ├── Sidebar.tsx        # Barra lateral
    └── CommentSection.tsx # Seção de comentários
```

## 🎨 Cores do Tema

- **Primary**: `#8B2BFF` (Roxo vibrante)
- **Secondary**: `#FF006E` (Rosa)
- **Accent**: `#00D9FF` (Ciano)
- **Dark**: `#0A0E27` (Fundo escuro)
- **Light**: `#F0F1FF` (Texto claro)

## 🌟 Recursos Principais

✅ **Homepage**: Exibição de notícias recentes  
✅ **Página de Notícias**: Lista completa com filtros  
✅ **Notícia Individual**: Leitura completa com comentários  
✅ **Sistema de Comentários**: Interativo e dinâmico  
✅ **Login/Registro**: Formulários com validação  
✅ **Sidebar**: Categorias, trending e newsletter  
✅ **Design Responsivo**: Mobile-first com Tailwind CSS  
✅ **UI/UX Moderno**: Gradientes, animações e efeitos hover  

## 🚀 Como Executar

### Requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Acessar em http://localhost:3000
```

### Build para Produção

```bash
npm run build
npm start
```

## 📝 Próximas Melhorias

- [ ] Integração com banco de dados (Prisma + PostgreSQL)
- [ ] Autenticação com NextAuth.js
- [ ] Sistema de publicação de notícias
- [ ] Dashboard administrativo
- [ ] Busca avançada com Elasticsearch
- [ ] Cache com Redis
- [ ] Analytics e SEO avançado
- [ ] API REST completa
- [ ] WebSocket para comentários em tempo real
- [ ] Integração com redes sociais

## 📧 Contato

**Email**: contato@nerdmemfoco.com  
**Website**: nerdmemfoco.com

## 📄 Licença

MIT License - Todos os direitos reservados © 2024 Nerd Em Foco

---

**Desenvolvido com ❤️ para a comunidade nerd** 🎮🎬📺✨
