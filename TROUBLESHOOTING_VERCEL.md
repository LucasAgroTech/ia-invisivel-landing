# 🚨 TROUBLESHOOTING - Deploy Vercel não funciona

## 🔍 Diagnóstico Rápido

### Passo 1: Verifique o status do deploy
1. Acesse [vercel.com](https://vercel.com) → Seu projeto
2. Clique no último deployment
3. Verifique se há erros no build

### Passo 2: Tente acessar sua aplicação
```bash
# URL do seu projeto
https://seu-projeto.vercel.app

# Se aparecer:
❌ "Function not found" → Problema com Edge Function
❌ "500 Internal Error" → Problema de runtime
❌ Página em branco → Problema de routing
❌ "404 Not Found" → Problema de configuração
```

### Passo 3: Verifique as APIs
```bash
# Teste suas APIs diretamente:
curl https://seu-projeto.vercel.app/api/leads
curl https://seu-projeto.vercel.app/api/remaining-spots

# Se não funcionarem → Problema com Python functions
```

## 🛠️ Soluções por tipo de erro

### ❌ Erro 1: "Function not found" ou "404"

**Causa**: Configuração incorreta no Vercel Dashboard

**Solução:**
1. Vá em **Settings** → **General**
2. Configure:
   ```
   Build Command: cd frontend && npm install && npm run build
   Output Directory: (DEIXE VAZIO)
   Install Command: cd frontend && npm install
   Framework Preset: Other
   ```
3. **Redeploy** o projeto

### ❌ Erro 2: "500 Internal Server Error"

**Causa**: Problema na Edge Function ou variáveis de ambiente

**Solução:**
1. Vá em **Settings** → **Environment Variables**
2. Adicione:
   ```
   ADMIN_KEY=sua-chave-admin-secreta
   NODE_ENV=production
   ```
3. Vá em **Functions** → **View Logs** para ver o erro específico

### ❌ Erro 3: Página carrega mas fica em branco

**Causa**: Problema de hydration ou routing do Qwik

**Solução:**
1. Verifique o console do browser (F12)
2. Procure por erros JavaScript
3. Teste em modo incógnito
4. Se o problema persistir, pode ser um bug do SSR

### ❌ Erro 4: Build falha no Vercel

**Causas comuns:**
- Dependências não encontradas
- TypeScript errors
- Memory limit exceeded

**Solução:**
```bash
# Teste o build localmente primeiro:
cd frontend
npm install
npm run build

# Se funcionar localmente mas falhar no Vercel:
# 1. Clear build cache no Vercel
# 2. Verifique se todas as dependências estão no package.json
# 3. Verifique se não há arquivos .env commitados
```

### ❌ Erro 5: APIs Python não funcionam

**Causa**: Problema com serverless functions

**Solução:**
1. Verifique se os arquivos estão em `/api/`
2. Confirme o runtime no `vercel.json`:
   ```json
   {
     "functions": {
       "api/leads.py": {
         "runtime": "@vercel/python@4.3.0"
       }
     }
   }
   ```
3. Teste localmente com `vercel dev`

## 🔧 Comandos de debugging

### 1. Deploy local para testar
```bash
# No diretório raiz do projeto
npx vercel --prod

# Ou para testar em desenvolvimento:
npx vercel dev
```

### 2. Limpar cache do Vercel
```bash
# No Vercel Dashboard:
# Settings → General → Clear Build Cache
```

### 3. Ver logs detalhados
```bash
# No terminal:
npx vercel logs [deployment-url]

# Ou no dashboard:
# Functions → View Logs
```

## 📞 O que me dizer para ajudar

Quando pedir ajuda, me informe:

1. **URL do seu projeto**: `https://seu-projeto.vercel.app`
2. **Erro específico**: O que aparece quando acessa?
3. **Logs do Vercel**: Copie os erros do dashboard
4. **Configurações atuais**: Screenshot das configurações no Vercel
5. **Funcionamento local**: `npm run build` funciona localmente?

## 🚀 Solução definitiva (Reset completo)

Se nada funcionar, faça um reset:

1. **Delete o projeto** no Vercel
2. **Re-importe** do GitHub
3. **Configure novamente**:
   ```
   Build Command: cd frontend && npm install && npm run build
   Output Directory: (vazio)
   Framework: Other
   ```
4. **Adicione variáveis** de ambiente
5. **Deploy manual**: `npx vercel --prod`

## 📊 Monitoramento pós-deploy

Após resolver, monitore:
- **Performance**: Vercel Analytics
- **Errors**: Function logs
- **Usage**: API calls

---

**💡 Dica**: 90% dos problemas são configuração incorreta no Dashboard do Vercel. Sempre verifique isso primeiro! 