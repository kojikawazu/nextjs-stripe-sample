# commands

```bash
npm i @supabase/auth-helpers-nextjs

npx shadcn-ui@latest init
npx shadcn-ui@latest add card

npx supabase login
npx supabase gen types typescript --project-id uniavlkydrbtfipwcydi > src/lib/database.types.ts

npx shadcn-ui@latest add button

# Stripeのインストール
npm i stripe

# [ngrok] インストール
sudo npm i -g ngrok
# [ngrok] Authtokenの設定
ngrok config add-authtoken [あなたのアカウント]
# [ngrok] 一時的にホームページを公開
ngrok http 3000

npm i @stripe/stripe-js
```

# vercel

1. GitHubへプッシュ
2. Vercelへデプロイ
3. SupabaseのAuthenticationのURL Configurationを修正する
4. SupabaseのWebhookを修正する
5. StripeのBillingのカスタマーポータルの修正→ビジネス情報を修正する
6. Stripeの開発者のWebhookを修正する
7. Stripeの本番環境の申請を行う

# supabase

Row Level Security Policyに新しく作成する。

「Enable read access for all users」

# URL

- supabase

https://supabase.com/dashboard/project/uniavlkydrbtfipwcydi

https://supabase.com/docs/guides/cli/getting-started

https://supabase.com/docs/guides/database/postgres/triggers

- shadcn/ui

https://ui.shadcn.com/

- stripe

https://dashboard.stripe.com/test/dashboard

- ngrok

https://ngrok.com/
