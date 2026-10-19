# Project decisions
- Keep product records in `src/data/products.ts` and category presentation in `src/pages/productsData.tsx` and reference PDF-sourced media through checked-in `.asset.json` pointers in `src/assets` so category pages share one catalog and image binaries stay off-repo.
- Define shared contact details, including WhatsApp, in `src/lib/siteConfig.ts` and import them wherever contact links render to prevent inconsistent destinations.
- Render privacy and terms routes through the shared LegalPage with existing page styles to keep legal placeholders consistent without redesigning the site.
- Keep optional leadership and customer sections gated by their typed arrays in src/data so empty client data never renders fabricated profiles or logos.
- Use the shared PhotoPlaceholder for missing real photos so neutral icon panels replace stock imagery consistently.
- Keep equipment definitions in src/data/equipment.ts with page-specific summaries so Home, About and Technology share one inventory without changing their copy.
- Define category colours only in src/index.css and reference category tokens from shared catalog data and application pages so product technologies remain visually consistent.
- Use index.css and CSS Modules only; unused shadcn scaffolding is removed to keep the static site dependency surface minimal.

- Retain HashRouter for refresh-safe static hosting; resolve category IDs and product slugs through the shared product route to preserve existing links.
- Keep quote selections in QuoteContext with guarded localStorage persistence because RFQ drafts must survive reloads without a backend.
- Validate quote fields and attachments in src/lib/rfq.ts and call its single submitRfq boundary; future delivery connects here without changing the form.
- Apply client-side route titles and descriptions through RouteMeta and useDocumentMeta; static social previews remain sitewide.
- Keep one focusable main landmark around route content and lazy-load all non-Home pages so navigation stays accessible and the initial bundle stays lean.
- Use the shared carousel playback hook so every timer respects reduced motion, focus, touch and explicit pause.
- Serve Source Sans 3 through Fontsource with swap, avoiding third-party font requests on static hosting.
- Allow the resolved dependency directory in Vite's development file serving so symlinked Fontsource assets load in the preview.
