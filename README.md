This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

**Live:** https://dev-agency-landing.vercel.app

Auto-deploys on every push to `main`.

## Contact forms

Project and careers forms submit to `/api/contact` and are delivered through Resend.
Before deploying, add these server-side environment variables in the deployment provider:

```text
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Runmade <hello@runmadeagency.com>
CONTACT_RECIPIENT_EMAIL=your-inbox@example.com
```

`RESEND_FROM_EMAIL` must use a domain verified in Resend. Keep the API key out of `.env` files committed to Git; `.env.example` contains placeholders only.
