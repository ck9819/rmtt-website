# Project decisions
- Keep product-category content in `src/pages/productsData.tsx` and reference PDF-sourced media through checked-in `.asset.json` pointers in `src/assets` so category pages share one catalog and image binaries stay off-repo.
- Define shared contact details in `src/lib/siteConfig.ts` and import them in the navbar, footer, and contact page to prevent inconsistent contact links.
- Render privacy and terms routes through the shared LegalPage with existing page styles to keep legal placeholders consistent without redesigning the site.
- Keep optional leadership and customer sections gated by their typed arrays in src/data so empty client data never renders fabricated profiles or logos.
- Use the shared PhotoPlaceholder for missing real photos so neutral icon panels replace stock imagery consistently.