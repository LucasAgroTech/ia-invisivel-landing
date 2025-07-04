# 🚀 IA Invisível Landing Page

Landing page construída com Qwik para deploy no Vercel com funcionalidades serverless.

## ✅ Deploy Configurado

O projeto está configurado para deploy automático no Vercel com as seguintes funcionalidades:

### 🏗️ Arquitetura
- **Frontend**: Qwik com SSR usando Vercel Edge Functions
- **APIs**: Python serverless functions (`@vercel/python`)
- **Build**: Automatizado com Vercel Build API v3

### 📁 Estrutura de Deploy
```
vercel.json (raiz)           # Configuração principal do projeto
frontend/
├── .vercel/output/          # Output Build API v3
│   ├── config.json         # Configuração de rotas
│   ├── static/             # Arquivos estáticos
│   └── functions/          # Função _qwik-city Edge
├── src/entry.vercel-edge.tsx # Entry point Vercel Edge
└── adapters/vercel-edge/    # Configuração do adaptador
api/
├── leads.py                # API de captura de leads
└── remaining-spots.py      # API de vagas restantes
```

### ⚙️ Configuração de Build
- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `frontend/.vercel/output`
- **Framework**: `null` (usando Build API v3)
- **Node.js**: `20.x`

### 🔄 Como Funciona
1. **Vercel detecta** mudanças no repositório
2. **Instala dependências** do frontend
3. **Executa build completo** incluindo:
   - `build.client` - Gera arquivos estáticos
   - `build.server` - Gera função Edge para SSR
   - `build.types` - Verificação TypeScript
4. **Deploy automático** usando Build API v3

### 🛠️ Scripts Disponíveis
```bash
# Desenvolvimento local
cd frontend
npm run dev

# Build completo (igual ao Vercel)
npm run build

# Deploy manual (se necessário)
npm run deploy
```

### 🔗 URLs em Produção
- **Site**: https://seu-dominio.vercel.app
- **API Leads**: https://seu-dominio.vercel.app/api/leads
- **API Spots**: https://seu-dominio.vercel.app/api/remaining-spots

### 🚨 Resolução de Problemas

#### ❌ Erro 404 NOT_FOUND
**Causa**: Falta de integração Vercel Edge
**Solução**: ✅ Adicionado `vercel-edge` adapter

#### ❌ Build Command não encontra dependências
**Causa**: Configuração incorreta do diretório
**Solução**: ✅ `buildCommand` ajustado para `cd frontend && npm install && npm run build`

#### ❌ Framework auto-detection conflitando
**Causa**: Vercel tentando detectar framework automaticamente
**Solução**: ✅ `framework: null` para usar Build API v3

### 📊 Monitoramento
- **Logs**: Vercel Dashboard → Functions → View Logs
- **Performance**: Vercel Analytics
- **Errors**: Vercel Dashboard → Functions

## 🔧 Desenvolvimento Local

```bash
# 1. Clone o repositório
git clone https://github.com/LucasAgroTech/ia-invisivel-landing.git
cd ia-invisivel-landing

# 2. Instale dependências
cd frontend
npm install

# 3. Execute em desenvolvimento
npm run dev
```

## 📝 Variáveis de Ambiente

Configure no Vercel Dashboard:
```bash
ADMIN_KEY=sua-chave-admin-secreta
```

---

**✨ Deploy funcionando corretamente!** 🎉