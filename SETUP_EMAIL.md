# Email Configuration Setup

O formulário de contacto do seu portfolio usa **Resend** para enviar emails profissionais.

## ✅ Configuração Rápida

### 1. Crie uma conta no Resend

Visite [https://resend.com](https://resend.com) e crie uma conta gratuita.

### 2. Obtenha sua chave API

1. Entre na dashboard do Resend
2. Clique em "API Keys" no menu lateral
3. Copie a chave de produção (começa com `re_`)

### 3. Configure as variáveis de ambiente

Crie um ficheiro `.env.local` na raiz do projeto:

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=dropecosta@gmail.com
NEXT_PUBLIC_SITE_URL=https://pedroreis.dev
```

### 4. Reinicie o servidor de desenvolvimento

```bash
npm run dev
```

## 📧 Como funciona

- O formulário em `/contacto` envia dados para `/api/contact`
- A rota da API valida os dados e envia um email via Resend
- O email é enviado para `dropecosta@gmail.com` (configurável)
- O remetente responde via email (reply-to)

## 🎨 Template do Email

O email é enviado com um template profissional que inclui:
- Nome do contacto
- Email para responder
- Empresa (opcional)
- Mensagem formatada

## 🧪 Teste em modo preview

Sem configurar `RESEND_API_KEY`, o formulário funciona mas não envia emails:
- A API retorna `{ ok: true, preview: true }`
- Útil para testar o formulário antes de configurar Resend

## 🚀 Deploy no Vercel

Ao fazer deploy no Vercel:
1. Adicione as variáveis de ambiente nas **Project Settings** → **Environment Variables**
2. Deploy automaticamente começará a enviar emails reais

## ❓ Troubleshooting

**Erro: "RESEND_API_KEY not configured"**
- Crie o ficheiro `.env.local` com sua chave API
- Reinicie `npm run dev`

**Email não é entregue**
- Verifique se a chave API está correta
- Confirme que `CONTACT_TO_EMAIL` é um email válido
- Resend pode solicitar verificação do domínio para emails em produção
