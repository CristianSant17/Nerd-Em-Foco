# 📖 DOCUMENTAÇÃO DAS PÁGINAS

## 🏠 Home Page (`/`)

A página inicial do site com as notícias mais recentes.

### Componentes:
- **Header**: Navegação principal
- **Hero Section**: Banner com busca
- **NewsCard Grid**: Cards de notícias
- **Sidebar**: Categorias, trending e newsletter
- **Footer**: Rodapé

### Features:
- Exibição de 6 notícias recentes
- Busca de notícias (preparado para integração)
- Newsletter signup
- Categorias por ícone

---

## 📰 Notícias (`/news`)

Página com todas as notícias do site com filtros e paginação.

### URL: `/news`

### Funcionalidades:
- Grid de 12 notícias
- Filtro por categoria
- Ordenação (Recentes, Visualizadas, Comentadas)
- Paginação
- Design responsivo

### Dados Mockados:
- Games, Cinema, Anime, Séries, Tecnologia, HQs

---

## 📄 Notícia Individual (`/news/[id]`)

Página completa de uma notícia com comentários e artigos relacionados.

### URL: `/news/{id}`

### Seções:
1. **Breadcrumb** - Navegação estruturada
2. **Header do Artigo** - Título, categoria, meta
3. **Imagem Destaque** - Foto principal
4. **Conteúdo** - Texto completo
5. **Blockquote** - Citações destacadas
6. **Links Relacionados** - Artigos sugeridos
7. **Tags** - Palavras-chave
8. **Social Share** - Compartilhamento
9. **CommentSection** - Comentários com like
10. **Related News** - Notícias relacionadas

### Funcionalidades de Comentários:
- ✅ Adicionar comentários
- ✅ Like em comentários
- ✅ Exibir tempo relativo (ex: "há 2 horas")
- ✅ Avatar do comentarista

---

## 🔐 Login (`/login`)

Página para autenticação de usuários.

### URL: `/login`

### Features:
- Toggle entre Login e Registro
- Campos: Email e Senha
- Confirmação de senha (no registro)
- "Lembrar-me" (checkbox)
- "Esqueci a senha" (link)
- OAuth: Google e GitHub
- Validação básica

---

## ℹ️ Sobre (`/about`)

Página informativa sobre o site.

### URL: `/about`

### Seções:
1. **Nossa Missão** - Descrição do site
2. **Quem Somos** - Time (Editores, Designers, Devs)
3. **Estatísticas** - Visitantes, artigos, seguidores
4. **Categorias** - Botões das 6 categorias principais
5. **Trabalhe Conosco** - CTA para enviar currículo

---

## 📧 Contato (`/contact`)

Formulário de contato e informações.

### URL: `/contact`

### Seções:
1. **Informações de Contato** - Email, redes sociais, endereço
2. **Formulário** - Nome, email, assunto, mensagem
3. **FAQ** - 3 perguntas frequentes com accordion

### Validação:
- Email obrigatório
- Mensagem não vazia
- Feedback após envio

---

## 🎨 Componentes Reutilizáveis

### Header (`src/components/Header.tsx`)
- Logo com ícone
- Menu de navegação
- Menu mobile responsivo
- Link para login

### NewsCard (`src/components/NewsCard.tsx`)
- Imagem com overlay
- Categoria badge
- Título e descrição
- Autor e data
- Contador de visualizações
- Link "Ler Completo"

### Sidebar (`src/components/Sidebar.tsx`)
- Categorias com contador
- Trending (top 5)
- Newsletter signup

### CommentSection (`src/components/CommentSection.tsx`)
- Textarea para novo comentário
- Lista de comentários
- Like em comentários
- Tempo relativo (date-fns)

---

## 🎯 Fluxo de Navegação

```
/ (Home)
├── /news (Lista de notícias)
│   └── /news/[id] (Notícia individual)
├── /about (Sobre)
├── /contact (Contato)
└── /login (Login/Registro)
```

---

## 🎨 Paleta de Cores

```css
--primary: #8B2BFF   /* Roxo */
--secondary: #FF006E /* Rosa */
--accent: #00D9FF    /* Ciano */
--dark: #0A0E27      /* Fundo */
--light: #F0F1FF     /* Texto */
```

---

## 📱 Responsividade

- `sm` (640px+): Mobile
- `md` (768px+): Tablet
- `lg` (1024px+): Desktop

Todos os componentes são **mobile-first** com Tailwind CSS.

---

## 🔄 Estado Dinâmico

### Componentes com State:
- **Header**: Menu mobile toggle
- **CommentSection**: Adicionar/like comentários
- **Login**: Toggle login/register
- **Contact**: Validação de formulário

---

## 🚀 Próximas Integrações

- [ ] API Backend
- [ ] Banco de Dados (Prisma)
- [ ] Autenticação (NextAuth.js)
- [ ] Busca Avançada
- [ ] Notificações
- [ ] Analytics
