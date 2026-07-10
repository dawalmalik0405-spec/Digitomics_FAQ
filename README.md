# Digitomics Front-End Intern Assignment

Responsive FAQ landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Live Demo

[https://dawalmalik0405-spec.github.io/Digitomics_FAQ/](https://dawalmalik0405-spec.github.io/Digitomics_FAQ/)

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

If preview has trouble in a restricted shell, serve the built files with:

```bash
npm run serve:dist
```

## Structure

- `src/data/faqData.ts` keeps category and FAQ content separate from components.
- `src/components/` contains reusable category, accordion, support, and hero components.
- `src/App.tsx` composes the page and manages active category and accordion state.
