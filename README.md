# 🏠 Seusite - Plataforma SaaS para Corretores de Imóveis

Uma plataforma completa para corretores criarem sites modernos com IA integrada para geração de conteúdo.

## ✨ Funcionalidades Implementadas

### 🎨 **Interface e Design**
- ✅ **Sistema de Dark Mode** com padrão claro
- ✅ **Design System** completo com variáveis CSS
- ✅ **Animações suaves** com Framer Motion
- ✅ **Layout responsivo** para mobile e desktop
- ✅ **Componentes reutilizáveis** e modulares

### 🏠 **Páginas Principais**
- ✅ **Landing Page** com hero, features, templates e pricing
- ✅ **Página de Imóveis** com galeria interativa
- ✅ **Dashboard do Corretor** com estatísticas e gerenciamento
- ✅ **Painel Administrativo** para gestão da plataforma
- ✅ **Páginas de Templates, Pricing, Blog, Sobre e Contato**

### 🔧 **Funcionalidades Avançadas**
- ✅ **Galeria de Imagens Interativa** com navegação
- ✅ **Sistema de Compartilhamento** nativo e redes sociais
- ✅ **Sistema de Favoritos** com localStorage
- ✅ **Calculadora de Financiamento** interativa
- ✅ **Mapa Integrado** com Google Maps
- ✅ **Formulários de Contato** funcionais
- ✅ **Autenticação Mock** com credenciais de teste

### 🤖 **IA e Automação**
- ✅ **Preview de IA** para geração de conteúdo
- ✅ **Botões "Gerar com IA"** em toda interface
- ✅ **Sistema preparado** para integração com OpenAI

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS, CSS Variables
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Imagens**: Next.js Image Optimization
- **Estado**: React Context API
- **Persistência**: localStorage

## 📱 Credenciais de Teste

### 👨‍💼 **Administrador**
- **Email**: `admin@seusite.com`
- **Senha**: `admin123`
- **Acesso**: `/admin`

### 🏠 **Corretor**
- **Email**: `corretor@exemplo.com`
- **Senha**: `corretor123`
- **Acesso**: `/dashboard`

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <seu-repositorio>
cd frontend

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Acesse
- **Local**: http://localhost:3000
- **Página Principal**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **Dashboard**: http://localhost:3000/dashboard
- **Admin**: http://localhost:3000/admin

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/                 # Páginas Next.js (App Router)
│   │   ├── admin/          # Painel administrativo
│   │   ├── dashboard/      # Dashboard do corretor
│   │   ├── property/       # Páginas de imóveis
│   │   └── ...
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ShareButton.tsx
│   │   ├── FavoriteButton.tsx
│   │   └── ThemeToggle.tsx
│   └── contexts/           # Contextos React
│       └── ThemeContext.tsx
├── public/
│   └── images/            # Imagens e assets
└── ...
```

## 🎯 Funcionalidades em Destaque

### 🌓 **Sistema de Tema**
- Toggle entre tema claro e escuro
- Persistência da preferência
- Transições suaves
- Variáveis CSS dinâmicas

### 📤 **Compartilhamento**
- Web Share API nativa
- Redes sociais (Facebook, Twitter, WhatsApp)
- Copiar link
- E-mail direto

### ❤️ **Favoritos**
- Salvar imóveis favoritos
- Persistência no localStorage
- Animações de feedback
- Notificações visuais

### 🧮 **Calculadora de Financiamento**
- Sliders interativos
- Cálculo automático de parcelas
- Taxas atualizadas
- Interface intuitiva

## 🔮 Próximas Implementações

- [ ] Sistema de blog robusto com categorias
- [ ] Filtros avançados na página de anúncios
- [ ] Preview da versão mobile
- [ ] Integração real com OpenAI
- [ ] Sistema de pagamentos
- [ ] Backend com NestJS
- [ ] Banco de dados PostgreSQL

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

**Desenvolvido com ❤️ para revolucionar o mercado imobiliário**