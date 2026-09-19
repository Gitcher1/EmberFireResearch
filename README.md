# EmberFire Research

EmberFire Research is the source-driven, long-form research and investigations publication of EmberFire Media. The site is designed around inspectable evidence, readable investigations, explicit uncertainty, research notes, and durable publication records.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- Git-maintained MDX publications
- Zod content and media validation
- Static generation for published investigations
- Vercel-compatible deployment

## Development

```bash
npm install
npm run dev
```

The application runs from the repository root. Publication source files live in `content/research/`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` first validates all publication metadata, media records, featured status, canonical URLs, and duplicated critical frontmatter.

## Adding a research publication

1. Add `content/research/<slug>.mdx` with the complete investigation.
2. Add or extend `content/research/<slug>.meta.json` with the required publication record.
3. Add `content/research/<slug>.media.json` when media is used, including source, alt, caption, credit, and license data.
4. Assign a valid category and granular topics.
5. Set publication status (`draft`, `review`, `published`, or `archived`).
6. Set featured status if appropriate; exactly one published investigation must be featured.
7. Run validation, lint, typecheck, and the production build.
8. Commit the publication and its companion records together.

The archive, homepage publication indexes, sitemap, RSS feed, categories, years, and topic filters are generated automatically from validated publication metadata. There is no duplicate global catalog to maintain.

## Deployment

Deploy the repository root as a standard Next.js project on Vercel. The production domain is [EmberFireResearch.com](https://emberfireresearch.com). No database, secrets, or external CMS are required for v1.

## Existing first publication

*The Book of Enoch: How an Ancient Jewish Library Survived Outside the Western Bible* was imported intact from `feature/enoch-publication`. Its authoritative MDX, metadata, and structured media data remain in `content/research/`. The earlier standalone HTML is retained only as an archival snapshot at `legacy/publication-snapshots/book-of-enoch-v1.html` and is not served at the canonical article route.
