# 🚀 DEPLOY & PRODUÇÃO - NERD EM FOCO

## 🌐 OPÇÕES DE DEPLOY

### 1️⃣ VERCEL (Recomendado)

Vercel é criada pelos desenvolvedores do Next.js e é a forma mais simples.

#### Passos:
1. Criar conta em https://vercel.com
2. Conectar seu GitHub
3. Importar repositório `Nerd-Em-Foco`
4. Clicar em "Deploy"
5. Pronto! Site estará ao vivo em `seu-projeto.vercel.app`

#### Vantagens:
- ✅ Deploy automático (push no git)
- ✅ HTTPS gratuito
- ✅ CDN global
- ✅ Zero configuração
- ✅ Preview de cada PR

---

### 2️⃣ NETLIFY

#### Passos:
1. Criar conta em https://netlify.com
2. Conectar GitHub
3. Selecionar repositório
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

---

### 3️⃣ AWS/Google Cloud/Azure

Para deployments mais avançados com banco de dados:

```bash
# Build
npm run build

# Usar container Docker
docker build -t nerd-em-foco .
docker run -p 3000:3000 nerd-em-foco
```

---

### 4️⃣ LOCALHOST (Seu PC)

#### Para manter rodando 24/7:
```powershell
# Terminal 1: Build
npm run build

# Terminal 2: Rodar continuamente
npm start
```

Use **ngrok** para expor localmente:
```powershell
npm install -g ngrok
ngrok http 3000
```

---

## 📋 PRÉ-REQUISITOS PARA PRODUÇÃO

### Antes de publicar:

- [ ] Instalar Node.js 18+ no servidor
- [ ] Clonar repositório
- [ ] Criar arquivo `.env.local` com variáveis
- [ ] Executar `npm install`
- [ ] Executar `npm run build`
- [ ] Executar `npm start`

---

## 🔐 VARIÁVEIS DE AMBIENTE

Crie arquivo `.env.local`:

```bash
# Banco de Dados (quando integrado)
DATABASE_URL="postgresql://user:pass@localhost/nerd_em_foco"

# NextAuth (quando integrado)
NEXTAUTH_SECRET="sua-chave-super-secreta-aqui"
NEXTAUTH_URL="https://seu-dominio.com"

# OAuth (quando integrado)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# API
NEXT_PUBLIC_API_URL="https://seu-dominio.com/api"
```

---

## 📊 PERFORMANCE

### Otimizações Já Implementadas:
- ✅ Next.js Image Optimization
- ✅ Code Splitting Automático
- ✅ CSS-in-JS com Tailwind
- ✅ Lazy Loading de componentes
- ✅ Static Generation (quando possível)

### Pontuações Esperadas:
- Lighthouse: 90+
- Core Web Vitals: Green ✅
- Performance: Excelente

---

## 🚀 CI/CD AUTOMÁTICO

### GitHub Actions (Recomendado)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - run: npm run lint
      # Deploy para Vercel, Netlify, etc
```

---

## 🌍 DOMÍNIO CUSTOMIZADO

### Na Vercel:
1. Ir em Settings > Domains
2. Adicionar seu domínio
3. Atualizando DNS records
4. Pronto!

### Na Netlify:
1. Domain settings
2. Mesmo processo

---

## 📈 MONITORAMENTO

### Ferramentas Recomendadas:
- **Sentry** - Error tracking
- **New Relic** - Performance
- **Vercel Analytics** - Built-in
- **Google Analytics** - Traffic

---

## 🔄 ATUALIZAÇÕES

### Atualizar Dependências:
```bash
npm update
npm audit
npm audit fix
```

### Deploy de Atualização:
```bash
git add .
git commit -m "feat: nova funcionalidade"
git push origin main
# Deploy automático na Vercel!
```

---

## 💾 BACKUP & SEGURANÇA

- [ ] Ativar 2FA em produção
- [ ] Usar secrets manager
- [ ] Backup regular do banco
- [ ] SSL/TLS obrigatório
- [ ] Rate limiting nas APIs
- [ ] CORS configurado

---

## 📞 TROUBLESHOOTING

### Erro: "Build failed"
```bash
npm install
npm run build
```

### Erro: "Port 3000 in use"
```powershell
npm run dev -- -p 3001
```

### Erro: "Database connection"
Verificar `.env.local` e credentials

---

## ✅ CHECKLIST PRÉ-DEPLOY

- [ ] Remover console.logs
- [ ] Remover arquivos temporários
- [ ] Testar em staging
- [ ] Verificar links das páginas
- [ ] Testar responsividade
- [ ] Verificar SEO
- [ ] Backup do código
- [ ] Testar com diferentes navegadores
- [ ] Verificar performance
- [ ] Documentar configurações

---

## 🎉 PARABÉNS!

Seu site **Nerd Em Foco** está pronto para o mundo! 🌍

Escolha uma opção de deploy, siga os passos e vá live em minutos! 🚀

---

**Para dúvidas**: Veja `README.md`, `SETUP.md` ou `QUICK_START.md`

**Desenvolvido com ❤️ para a comunidade nerd** 🎮🎬📺✨
