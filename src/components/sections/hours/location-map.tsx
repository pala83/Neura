import { component$ } from "@builder.io/qwik";
import { Icon } from "~/components/icons/icon";
import { Card, LinkButton } from "~/components/ui";
import { CENTER } from "~/data/center";

/** Mapa ilustrado (SVG) con la dirección y el acceso a Google Maps. */
export const LocationMap = component$(() => (
  <Card.Root class="reveal relative min-h-110 overflow-hidden rounded-3xl shadow-none">
    <svg
      viewBox="0 0 640 440"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      class="absolute inset-0 size-full"
    >
      <defs>
        <pattern
          id="neura-blocks"
          width="96"
          height="70"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-11)"
        >
          <rect
            x="7"
            y="7"
            width="82"
            height="56"
            rx="6"
            class="fill-brand-sage/20"
          />
        </pattern>
      </defs>
      <rect width="640" height="440" class="fill-card" />
      <rect width="640" height="440" fill="url(#neura-blocks)" />
      <path
        d="M-20 330 C 120 280, 230 360, 370 318 S 560 250, 680 284"
        class="stroke-brand-sky/40 fill-none"
        stroke-width="24"
        stroke-linecap="round"
      />
      <path
        d="M-20 130 L 680 34"
        class="stroke-brand-gold/25 fill-none"
        stroke-width="16"
      />
      <path
        d="M150 -20 L 262 460"
        class="stroke-card fill-none"
        stroke-width="12"
      />
      <g transform="rotate(-11 520 150)">
        <rect
          x="450"
          y="104"
          width="140"
          height="92"
          rx="10"
          class="fill-brand-sage/50"
        />
        <rect
          x="466"
          y="118"
          width="14"
          height="14"
          rx="3"
          class="fill-brand-sage"
        />
        <rect
          x="486"
          y="122"
          width="12"
          height="12"
          rx="3"
          class="fill-brand-sage/75"
        />
        <rect
          x="470"
          y="140"
          width="12"
          height="12"
          rx="3"
          class="fill-primary/60"
        />
        <rect
          x="548"
          y="160"
          width="14"
          height="14"
          rx="3"
          class="fill-brand-sage"
        />
        <rect
          x="566"
          y="146"
          width="10"
          height="10"
          rx="3"
          class="fill-brand-gold"
        />
      </g>
      <g transform="translate(320 196)">
        <circle
          r="16"
          class="origin-fill-center animate-ping-soft fill-primary/35"
        />
        <ellipse cy="2" rx="9" ry="3" class="fill-foreground/20" />
        <path
          d="M0 0 C0 0 -18 -17 -18 -30 A18 18 0 1 1 18 -30 C18 -17 0 0 0 0z"
          class="fill-primary"
        />
        <circle cy="-30" r="7" class="fill-primary-foreground" />
      </g>
    </svg>
    <div class="bg-card/95 absolute inset-x-4.5 bottom-4.5 flex flex-wrap items-center justify-between gap-3.5 rounded-xl px-5 py-4.5 shadow-md backdrop-blur-sm">
      <div class="flex min-w-0 flex-col gap-1">
        <span class="font-heading text-2xs tracking-eyebrow text-accent-foreground font-semibold uppercase">
          Dirección
        </span>
        <span class="font-heading text-foreground text-lg font-medium">
          {CENTER.street}
        </span>
        <span class="text-subtle-foreground text-sm">{CENTER.city}</span>
      </div>
      <LinkButton
        href={CENTER.mapsHref}
        target="_blank"
        rel="noopener"
        size="sm"
        class="min-h-11.5"
      >
        Cómo llegar <Icon name="arrow-up-right" class="size-4" />
      </LinkButton>
    </div>
  </Card.Root>
));
