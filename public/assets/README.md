# Asset drop-in slot

All visuals on the site are currently **code-generated** (Canvas particle
network, SVG charts, CSS gradient meshes) — no external image files required.

When you have real renders (refinery photography, plant 3D renders, founder
portrait, etc.), drop them here and swap the relevant code visual:

| Where | Component to replace |
|-------|----------------------|
| Home hero backdrop | `src/components/visual/ParticleField.tsx` |
| Founder portrait | `src/components/home/Founder.tsx` |
| Plant-type cards | `src/app/bio-bitumen/page.tsx` |
| Software dashboard | `src/app/it-software/page.tsx` |

Use `next/image` with explicit `width`/`height` and prefer AVIF/WebP
(keep hero images < 100 KB per the project performance budget).
