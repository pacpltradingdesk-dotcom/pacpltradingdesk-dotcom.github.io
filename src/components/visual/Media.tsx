"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { img, type ImgKey } from "@/lib/media";

/**
 * Cinematic image wrapper around next/image.
 * - `name` keys into the media map (or pass raw `src`).
 * - Always `fill`; parent must be positioned with a height/aspect.
 * - Dark gradient/scrim overlay unifies disparate stock into one look.
 * - On load error, degrades to a code-generated gradient so the layout
 *   never breaks (graceful fallback for the hybrid asset strategy).
 */
export function Media({
  name,
  src,
  alt,
  className,
  overlay = "bottom",
  priority = false,
  sizes = "100vw",
  grayscale = false,
}: {
  name?: ImgKey;
  src?: string;
  alt?: string;
  className?: string;
  overlay?: "bottom" | "full" | "side" | "none";
  priority?: boolean;
  sizes?: string;
  grayscale?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const item = name ? img[name] : undefined;
  const finalSrc = src ?? item?.src;
  const finalAlt = alt ?? item?.alt ?? "";

  return (
    <div className={cn("relative overflow-hidden bg-[var(--color-raised)]", className)}>
      {finalSrc && !failed ? (
        <Image
          src={finalSrc}
          alt={finalAlt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover transition-transform duration-700 ease-[var(--ease-expo)]", grayscale && "grayscale")}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(120%_120%_at_25%_15%,var(--color-amber-deep),transparent_55%),radial-gradient(120%_120%_at_85%_85%,var(--color-cyan-deep),transparent_55%)]" />
      )}

      {overlay === "bottom" && (
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)] via-[var(--color-void)]/35 to-transparent" />
      )}
      {overlay === "full" && <div className="absolute inset-0 bg-[var(--color-void)]/55" />}
      {overlay === "side" && (
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-void)] via-[var(--color-void)]/40 to-transparent" />
      )}
    </div>
  );
}
