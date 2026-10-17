# Project decisions
- Keep product records in `src/data/products.ts` and category presentation in `src/pages/productsData.tsx` and reference PDF-sourced media through checked-in `.asset.json` pointers in `src/assets` so category pages share one catalog and image binaries stay off-repo.
- Define shared contact details in `src/lib/siteConfig.ts` and import them in the navbar, footer, and contact page to prevent inconsistent contact links.
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
