# Youssef Elbasiouny — Portfolio

Personal portfolio built with Next.js 16 (App Router), React 19 and Tailwind CSS 4.
It is a single statically rendered page: Hero, About, Skills, Projects, Experience and Contact.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` produces the production build and `npm run lint` runs ESLint.

## Edit the content

All text lives in [`lib/site.ts`](lib/site.ts) — profile details, skills, projects, experience and
links. Change it there and every section updates.

- Section layout: one file per section in [`components/`](components).
- Hero graphic: [`components/system-diagram.tsx`](components/system-diagram.tsx).
- Photo: replace `public/youssef-elbasiouny.jpg` (square, ideally 800×800 or larger). It is used
  in the header and at the centre of the hero graphic.

## Themes

The site opens in the light theme. The sun/moon button in the header switches to dark and the
choice is remembered in the visitor's browser.

Both palettes are plain CSS variables at the top of [`app/globals.css`](app/globals.css): `:root`
holds the light colours and `[data-theme="dark"]` the dark ones. Change a value there and every
component follows.

## Motion

- Elements with the `reveal` class animate in when scrolled into view. Add `data-reveal="left"`,
  `"right"` or `"zoom"` to change the direction, and `style={stagger(n)}` to delay items in a row.
- The scroll progress bar, hero parallax, tech ticker and theme-switch reveal are in the Motion
  section of `globals.css`.
- All of it is switched off for visitors whose system is set to reduce motion.

## Contact form

With no configuration, submitting the form opens the visitor's email app with the message
pre-filled and addressed to `profile.email`.

To have messages delivered without leaving the page, create a form on a service that accepts a
JSON `POST` (Formspree, for example) and set its URL in `.env.local`:

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

## Deploy

Push the repository to GitHub and import it in Vercel — no extra settings are needed. If you use a
contact endpoint, add `NEXT_PUBLIC_CONTACT_ENDPOINT` to the Vercel project's environment variables.
