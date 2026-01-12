# 🚀 INSTRUÇÕES PARA EXECUTAR O NERD EM FOCO

## ⚡ PASSO 1: Instalar Node.js

O projeto requer Node.js 18 ou superior. Siga os passos abaixo:

### Windows:
1. Acesse: https://nodejs.org/en/
2. Baixe o **LTS (Long Term Support)**
3. Execute o instalador e siga as instruções
4. Reinicie seu terminal/PowerShell depois da instalação

### Verificar se foi instalado:
```powershell
node --version
npm --version
```

## ⚡ PASSO 2: Instalar Dependências

Abra o terminal na pasta do projeto e execute:

```powershell
npm install
```

Este comando baixará todas as dependências necessárias (React, Next.js, Tailwind CSS, etc).

## ⚡ PASSO 3: Executar em Desenvolvimento

Para rodar o servidor de desenvolvimento localmente:

```powershell
npm run dev
```

Você verá algo como:
```
> nerd-em-foco@1.0.0 dev
> next dev

  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
```

## ✅ Acesse o Site

Abra seu navegador e acesse: **http://localhost:3000**

## 🎮 O Que Você Pode Fazer

1. **Home Page** - Visualize notícias recentes
2. **Notícias** - Acesse a página completa com filtros
3. **Ler Notícia** - Clique em uma notícia para ver detalhes e comentários
4. **Login** - Faça login ou crie uma conta
5. **Sobre** - Conheça mais sobre o projeto
6. **Contato** - Entre em contato conosco

## 🛑 Para Parar o Servidor

No terminal, pressione: **CTRL + C**

## 📦 Build para Produção

```powershell
npm run build
npm start
```

## 🐛 Troubleshooting

### Erro: "npm: O termo 'npm' não é reconhecido"
**Solução**: Node.js não foi instalado corretamente. Reinstale e reinicie o terminal.

### Porta 3000 já está em uso
**Solução**: O servidor já está rodando ou outra aplicação usa a porta. Use:
```powershell
npm run dev -- -p 3001
```

### Erro ao instalar dependências
**Solução**: Limpe o cache do npm:
```powershell
npm cache clean --force
npm install
```

## 📝 Estrutura de Pastas

- `src/app/` - Páginas do site
- `src/components/` - Componentes React reutilizáveis
- `public/` - Imagens e arquivos estáticos
- `package.json` - Dependências e scripts

## 🎨 Tecnologias Utilizadas

- ✅ React 18 - UI interativa
- ✅ Next.js 14 - Framework fullstack
- ✅ TypeScript - Type safety
- ✅ Tailwind CSS - Estilos modernos
- ✅ date-fns - Formatação de datas

## 📧 Suporte

Qualquer dúvida? Entre em contato:
- Email: contato@nerdmemfoco.com
- GitHub: [Nerd Em Foco](https://github.com)

---

**Desenvolvido com ❤️ para a comunidade nerd** 🎮🎬📺✨
