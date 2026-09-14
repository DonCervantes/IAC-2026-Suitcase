# IAC 2026 Suitcase — México → Antalya

Landing de patrocinio para el **equipaje** de **Daniel Adrian Elias Cruz Cervantes** rumbo al **International Astronautical Congress 2026** en Antalya, Turquía. 22 posiciones numeradas. Meta de recaudación: **$14,999 MXN**. Pago por SPEI o USDC (placeholders hasta que cargues tus datos).

Base independiente del proyecto original [Cbiux/Cbiux-Suitecase](https://github.com/Cbiux/Cbiux-Suitecase). Stack: Next.js (App Router) + TypeScript + Tailwind + shadcn/ui.

## Correr en local

```bash
npm install
cp .env.example .env.local
npm run dev -- --port 43147
```

Abre [http://localhost:43147](http://localhost:43147). El UI arranca en español; el toggle ES/EN y el de Día/Noche están en el header.

## Admin

`/admin` — login con `ADMIN_PASSWORD` (en local: `IAC2026admin` si no cambiaste `.env.local`).

Desde ahí puedes marcar un spot `available` / `reserved` / `sold`, ver comprobantes y confirmar o rechazar reservas.

## Variables de entorno

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica (OG / metadata) |
| `NEXT_PUBLIC_SINPE_PHONE` | SPEI / CLABE (placeholder) |
| `NEXT_PUBLIC_USDC_BASE_ADDRESS` | Wallet EVM/Base USDC |
| `NEXT_PUBLIC_USDC_STELLAR_ADDRESS` | Wallet Stellar USDC |
| `NEXT_PUBLIC_USDC_SOLANA_ADDRESS` | Wallet Solana (opcional) |
| `ADMIN_PASSWORD` | Clave de `/admin` |
| `DATABASE_URL` | Neon Postgres (obligatorio en prod) |

Sin `DATABASE_URL`, local usa `data/store.json`.

## Pendiente antes de un deploy público

- Fotos propias de la maleta (`public/suitcase-front.png`, `suitcase-side.png`, `photo.jpg`)
- Handles reales (X, Instagram, LinkedIn, email, WhatsApp)
- SPEI y wallets
- Ajuste de precios por posición si quieres alinearlos a la meta de $14,999 MXN
