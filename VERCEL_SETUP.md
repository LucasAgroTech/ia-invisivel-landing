# 🚀 Configuração no Vercel

## 📋 Passo a Passo

### 1. **Deploy Automático**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe este repositório
4. O Vercel detectará automaticamente as configurações

### 2. **Variáveis de Ambiente**
No painel do Vercel, configure:

```bash
# Production Environment Variables
ADMIN_KEY=sua-chave-admin-super-secreta
```

### 3. **Configuração Automática**
✅ **Build Command**: `cd frontend && npm install && npm run build`  
✅ **Output Directory**: `frontend/dist`  
✅ **Install Command**: `cd frontend && npm install`  
✅ **Framework**: Detectado automaticamente  

## 🔗 URLs da API
Após o deploy, suas APIs estarão disponíveis em:
- `https://seu-site.vercel.app/api/leads` - Capturar leads
- `https://seu-site.vercel.app/api/remaining-spots` - Vagas restantes

## 🛠️ Desenvolvimento Local

```bash
# 1. Clone o repositório
git clone [seu-repositorio]
cd ia-invisivel-landing

# 2. Instale dependências
cd frontend
npm install

# 3. Configure ambiente local (opcional)
cp .env.example .env.local
# Edite .env.local se necessário

# 4. Execute em desenvolvimento
npm run dev
```

## ⚙️ Como Funciona

### Frontend (Qwik)
- **Produção**: APIs usando a mesma URL (`''`)
- **Desenvolvimento**: APIs em `localhost:3000`
- **Configuração**: `frontend/src/lib/api.ts`

### Backend (Serverless Functions)
- **Localização**: `api/` directory
- **Runtime**: Python 3.9
- **CORS**: Configurado automaticamente
- **Cache**: Otimizado pelo Vercel

## 🔐 Segurança

### Variáveis de Ambiente
- ✅ `ADMIN_KEY` - Protege endpoint de listagem de leads
- ✅ Nunca commite arquivos `.env` no repositório
- ✅ Use o painel do Vercel para configurar

### APIs
- ✅ CORS configurado para produção
- ✅ Validação de entrada nos endpoints
- ✅ Rate limiting automático do Vercel

## 📊 Monitoramento
- **Logs**: Painel do Vercel → Functions → View Logs
- **Analytics**: Painel do Vercel → Analytics
- **Performance**: Automatic monitoring by Vercel

---
**✨ Seu projeto está pronto para produção!** 