import { component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import type { TileColor } from "~/data/neura";

const TILE_BG: Record<TileColor, string> = {
  primary: "bg-primary",
  gold: "bg-brand-gold",
  sage: "bg-brand-sage",
  terracotta: "bg-brand-terracotta",
  sky: "bg-brand-sky",
};

/** Inclinación de cada tesela; al pasar el mouse sobre un `group` se "desacomodan". */
const TILT = [
  "-rotate-8 group-hover:-translate-x-0.75 group-hover:-translate-y-0.5 group-hover:rotate-22",
  "rotate-7 -translate-y-0.5 group-hover:-translate-y-1.25 group-hover:-rotate-14",
  "-rotate-3 translate-y-px group-hover:translate-x-0.75 group-hover:rotate-30",
];

interface TesseraeProps {
  colors?: [TileColor, TileColor, TileColor];
  class?: string;
}

/** Las tres teselas del mosaico que acompañan a cada eyebrow y tarjeta. */
export const Tesserae = component$<TesseraeProps>(
  ({ colors = ["primary", "gold", "sage"], class: className }) => (
    <span
      aria-hidden="true"
      class={cn("inline-flex items-center gap-0.75", className)}
    >
      {colors.map((c, i) => (
        <i
          key={i}
          class={cn(
            "rounded-2xs ease-soft block size-2 transition-transform duration-700",
            TILE_BG[c],
            TILT[i],
          )}
        />
      ))}
    </span>
  ),
);
