# MyTechStudio Tools

Premium, no-registration online utility suite for `tools.mytechstudio.in`.

## Included
- Next.js + TypeScript + Tailwind UI
- SEO metadata
- Dynamic sitemap.xml
- Dynamic robots.txt
- Privacy + Terms pages
- Tool directory and search
- PDF Editor workspace shell
- PDF/image/text/developer/calculator tool routes
- AdSense-ready placeholder and `public/ads.txt`
- No database or login required

## Deploy to Vercel

1. Upload this project to a Git repository or import the ZIP/project into Vercel.
2. Build command: `next build`
3. Output: Next.js default.
4. Add the custom domain: `tools.mytechstudio.in`.
5. In your DNS provider, follow the DNS record Vercel shows for the custom domain.
6. Replace the placeholder publisher ID in `public/ads.txt` after AdSense approval.
7. Set `NEXT_PUBLIC_ADSENSE_CLIENT` if you add the real AdSense script.

## Important PDF conversion note

The project intentionally avoids claiming that every arbitrary PDF can be perfectly converted to DOCX/XLSX/PPTX in the browser. High-fidelity conversion of scanned, complex-layout and unusual PDFs generally requires heavier conversion/OCR engines. The launch architecture is browser-first so ordinary tools do not require a paid API or database.

The PDF Editor route currently provides a browser editing workspace and annotation interactions. Before production, wire the export layer to `pdf-lib` for persistent annotations and page operations, and add robust worker handling for PDF.js.

## Monetization

`components/AdSlot.tsx` and `public/ads.txt` are prepared as integration points. Do not publish placeholder IDs as real AdSense credentials. Add your approved publisher ID and AdSense code only after your account is approved.

## Domain

Production URL:
https://tools.mytechstudio.in
