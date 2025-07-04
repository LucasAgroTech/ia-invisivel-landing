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
   - O arquivo `vercel.json` já está configurado
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

## 🔗 Endpoints da API

- `GET /api/remaining-spots` - Vagas restantes
- `POST /api/leads` - Capturar lead
- `GET /api/leads` - Listar leads (protegido)

## ⚙️ Variáveis de Ambiente

No Vercel, configure as seguintes variáveis:

- `ADMIN_KEY` - Chave para acessar lista de leads

## 🔧 Troubleshooting

### Erro de Runtime Python
Se você receber o erro: `Function Runtimes must have a valid version`

**Solução**: O `vercel.json` deve usar `@vercel/python` como runtime:
```json
{
  "functions": {
    "api/leads.py": {
      "runtime": "@vercel/python"
    }
  }
}
```

### Build Errors
- Certifique-se que o diretório `frontend/` contém o projeto Qwik
- Verifique se `frontend/package.json` existe
- Confirme que `frontend/vite.config.ts` está configurado

## 🏃‍♂️ Como Usar

1. **Clone o repositório**
2. **Faça push para seu GitHub**
3. **Conecte ao Vercel**
4. **Deploy automático!**

O Vercel cuidará de todo o processo de build e deploy automaticamente.

## 🔧 Tecnologias

### Frontend
- **Qwik** - Framework ultra-rápido com resumability
- **Tailwind CSS** - Framework CSS utilitário
- **TypeScript** - Linguagem principal

### Backend
- **Python** - Serverless Functions
- **Vercel** - Plataforma de deploy

---

**Nota:** Este projeto está otimizado para performance máxima no Vercel com Qwik e Serverless Functions.