import { component$ } from "@builder.io/qwik";
import LogoNeura from "~/media/logo-neura.webp?jsx";

/** Vértices de la red neuronal que rodea al logo (coordenadas del viewBox 460×460). */
const NODES: [number, number, number][] = [
  [78, 128, 4],
  [160, 46, 3.5],
  [305, 42, 4.5],
  [398, 118, 3.5],
  [432, 262, 4],
  [370, 384, 3.5],
  [240, 438, 4.5],
  [104, 380, 3.5],
  [30, 246, 4],
];
/** Aristas entre vértices (índices de NODES), en orden de dibujo. */
const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 0],
  [0, 2],
  [1, 8],
  [3, 5],
];

/** Emblema del hero: logo que "respira" dentro de una red de nodos animada. */
export const HeroEmblem = component$(() => (
  <div class="max-w-emblem relative aspect-square w-full">
    <div class="animate-breathe bg-muted absolute inset-1/11 rounded-full" />
    <div class="animate-breathe border-primary/20 -animation-delay-600 absolute inset-1/33 rounded-full border" />
    <svg
      viewBox="0 0 460 460"
      aria-hidden="true"
      class="absolute inset-0 size-full overflow-visible"
    >
      <circle
        cx="230"
        cy="230"
        r="222"
        class="stroke-primary fill-none opacity-55"
        stroke-width="1"
        stroke-dasharray="2 7"
      />
      <g class="stroke-primary opacity-40" stroke-width="1.1">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            class="stroke-dash-draw animate-draw"
            style={{ animationDelay: `${300 + i * 120}ms` }}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
          />
        ))}
      </g>
      <g class="fill-primary">
        {NODES.map(([cx, cy, r], i) => (
          <circle
            key={i}
            class="origin-fill-center animate-glow"
            style={{ animationDelay: `${-i * 500}ms` }}
            cx={cx}
            cy={cy}
            r={r}
          />
        ))}
      </g>
      <g class="origin-view-center animate-orbit">
        <circle cx="230" cy="8" r="4.5" class="fill-brand-gold" />
      </g>
    </svg>
    <LogoNeura
      alt="Neura"
      loading="eager"
      fetchPriority="high"
      class="absolute top-23/50 left-1/2 h-auto w-23/50 -translate-1/2"
    />
    <div
      aria-hidden="true"
      class="absolute inset-x-0 bottom-2/15 flex justify-center"
    >
      <div class="font-heading text-2xs tracking-logo text-accent-foreground relative h-4 w-35 text-center leading-4 font-semibold uppercase">
        <span class="animate-inhale absolute inset-0">Inhalá</span>
        <span class="animate-exhale absolute inset-0 opacity-0">Exhalá</span>
      </div>
    </div>
  </div>
));
