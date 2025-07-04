# IA Invisível Landing Page

Landing page exclusiva para AiHacker construída com Qwik e otimizada para deploy no Vercel.

## 🚀 Deploy no Vercel

### Deploy Automático (Recomendado)

1. **Conecte o repositório ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Import Project"
   - Conecte seu repositório do GitHub
   - O Vercel detectará automaticamente as configurações

2. **Configuração automática:**
   - O arquivo `vercel.json` já está configurado com funções Python
   - O build será executado automaticamente
   - As APIs Python serão convertidas em Serverless Functions

### Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🏗️ Estrutura do Projeto

```
ia-invisivel-landing/
├── frontend/          # Aplicação Qwik
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── api/              # Serverless Functions (Python)
│   ├── leads.py
│   └── remaining-spots.py
├── vercel.json       # Configuração do Vercel
├── package.json      # Configuração raiz
└── requirements.txt  # Dependências Python
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar desenvolvimento
npm run dev
```

## 📋 Funcionalidades

- ✅ **SSR com Qwik** - Performance otimizada
- ✅ **Serverless APIs** - Python no Vercel
- ✅ **Captura de Leads** - Formulário integrado
- ✅ **Sistema de Exclusividade** - Contador de vagas
- ✅ **CORS configurado** - APIs acessíveis
- ✅ **Cache otimizado** - Assets com cache longo
- ✅ **ESLint 9** - Configuração moderna
- ✅ **TypeScript** - Tipagem completa

## 🔗 Endpoints da API

- `GET /api/remaining-spots` - Vagas restantes
- `POST /api/leads` - Capturar lead
- `GET /api/leads` - Listar leads (protegido)

## ⚙️ Variáveis de Ambiente

No Vercel, configure as seguintes variáveis:

- `ADMIN_KEY` - Chave para acessar lista de leads

## 🔧 Troubleshooting

### Erro de Runtime Python
✅ **Resolvido**: O `vercel.json` agora inclui explicitamente:
```json
{
  "functions": {
    "api/leads.py": {
      "runtime": "@vercel/python"
    },
    "api/remaining-spots.py": {
      "runtime": "@vercel/python"  
    }
  }
}
```

### Build Errors
✅ **Resolvido**: 
- Node.js configurado para versão 18.x (compatibilidade otimizada)
- Dependências atualizadas para versões mais recentes
- ESLint configurado para versão 9+

### Warnings de Pacotes Deprecados  
✅ **Resolvido**: Todas as dependências foram atualizadas para suas versões mais recentes.

## 🚀 Melhorias Implementadas

### 1. **Vercel.json Otimizado**
- Configuração explícita das funções Python
- Framework Qwik detectado automaticamente
- Cache headers otimizados

### 2. **Dependências Atualizadas**
- Qwik 1.9.0+ (performance melhorada)
- ESLint 9+ (configuração moderna)
- TypeScript 5.6+ (recursos mais recentes)

### 3. **Build Otimizado**
- Node.js 18.x para máxima compatibilidade
- Build command especializado para Qwik
- Output directory configurado corretamente

## 🏃‍♂️ Como Usar

1. **Clone o repositório**
2. **Faça push para seu GitHub**
3. **Conecte ao Vercel**
4. **Deploy automático!**

O Vercel cuidará de todo o processo de build e deploy automaticamente.

## 🔧 Tecnologias

### Frontend
- **Qwik 1.9+** - Framework ultra-rápido com resumability
- **Tailwind CSS** - Framework CSS utilitário
- **TypeScript 5.6+** - Linguagem principal

### Backend
- **Python 3.9+** - Serverless Functions
- **Vercel** - Plataforma de deploy

---

**Nota:** Este projeto está otimizado para performance máxima no Vercel com Qwik e Serverless Functions.