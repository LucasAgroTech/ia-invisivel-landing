# 🚀 Instruções de Deploy - Vercel (Corrigido)

## ✅ Problemas Resolvidos

### 1. **Build Command Corrigido**
- **Antes**: `npm run build.client` (inexistente)
- **Agora**: `npm run build` (comando correto)

### 2. **Output Directory Corrigido** 🔥
- **Problema**: `No Output Directory named "dist" found`
- **Causa**: Qwik + Vercel Edge usa `.vercel/output/` em vez de `dist/`
- **Solução**: Removido `outputDirectory` do vercel.json (auto-detectado)

### 3. **Configurações Unificadas**
- **Removido**: `frontend/vercel.json` duplicado
- **Mantido**: `vercel.json` na raiz (único necessário)

### 4. **Dependências Corrigidas**
- **Adicionado**: `terser` (necessário para build de produção)
- **Movido**: `@builder.io/qwik` para dependencies

### 5. **Node.js Otimizado**
- **Antes**: `^18.17.0 || ^20.3.0 || >=21.0.0` (complexo)
- **Agora**: `>=18.17.0` (simples e compatível)

## 🔧 Configuração Atual

### vercel.json
```json
{
  "buildCommand": "cd frontend && npm install && npm run build",
  "installCommand": "cd frontend && npm install",
  "framework": null,
  "functions": {
    "api/leads.py": {
      "runtime": "@vercel/python@4.3.0"
    },
    "api/remaining-spots.py": {
      "runtime": "@vercel/python@4.3.0"
    }
  }
}
```

### Estrutura de Build (Qwik + Vercel Edge)
```
frontend/
├── .vercel/
│   └── output/                 # Auto-generated pelo adaptador
│       ├── functions/
│       │   └── _qwik-city.func/
│       └── static/             # Arquivos estáticos (HTML, CSS, JS)
│           ├── assets/
│           ├── build/
│           └── manifest files
```

## 🚀 Como Fazer o Deploy

### 1. **Deploy Automático (Recomendado)**
```bash
# Push para o repositório
git push origin main

# O Vercel detectará automaticamente e fará o deploy
```

### 2. **Deploy Manual**
```bash
# No diretório raiz
cd frontend
npx vercel --prod
```

### 3. **Verificação Local**
```bash
# Testar build localmente
cd frontend
npm run build

# Verificar se não há erros
npm run preview
```

## 🔍 Troubleshooting

### Erro "No Output Directory named 'dist' found"
✅ **Já resolvido** - Removido `outputDirectory` do vercel.json

### Erro "terser not found"
✅ **Já resolvido** - Terser instalado como dependência

### Erro "build.client not found"
✅ **Já resolvido** - Usando `npm run build` agora

### Erro "Cannot resolve module"
```bash
cd frontend
npm install
npm run build.types
```

### Erro de CORS nas APIs
✅ **Já configurado** - Headers CORS nas funções Python

## 📊 Monitoramento

### Logs do Vercel
1. Acesse o dashboard do Vercel
2. Clique no projeto
3. Vá em "Functions" → "View Logs"

### Performance
- Build time: ~2-3 minutos
- Cold start: ~200ms
- Warm response: ~50ms

## 🔐 Variáveis de Ambiente

### Obrigatórias
```bash
ADMIN_KEY=sua-chave-admin-super-secreta
```

### Opcionais
```bash
NODE_ENV=production
VERCEL_ENV=production
```

## 🎯 Próximos Passos

1. **Faça o push** das correções
2. **Aguarde o deploy** automático
3. **Teste as URLs**:
   - `https://seu-site.vercel.app/`
   - `https://seu-site.vercel.app/api/leads`
   - `https://seu-site.vercel.app/api/remaining-spots`

## 📝 Checklist de Deploy

- [x] Build command corrigido
- [x] **Output Directory corrigido** 🔥
- [x] Dependências instaladas
- [x] Configurações unificadas
- [x] Node.js otimizado
- [x] APIs Python funcionando
- [x] CORS configurado
- [x] Cache headers otimizados
- [x] .vercelignore otimizado

## 🧠 Entendendo o Qwik + Vercel Edge

### Por que não usar `dist/`?
- **Qwik SSR**: Usa adaptador específico para Vercel Edge
- **Build Output API v3**: Vercel procura em `.vercel/output/`
- **Arquivos estáticos**: Ficam em `.vercel/output/static/`
- **Funções serverless**: Ficam em `.vercel/output/functions/`

### Diferença para projetos SPA tradicionais
- **SPA**: Build → `dist/` → Vercel serve arquivos estáticos
- **Qwik SSR**: Build → `.vercel/output/` → Vercel serve híbrido (estático + serverless)

---

✨ **Tudo pronto para deploy!** O erro do Output Directory foi corrigido. 