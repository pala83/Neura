import { component$ } from "@builder.io/qwik";

/** Dos anillos punteados que giran lentamente en la esquina superior del hero. */
export const HeroRings = component$(() => (
  <svg
    viewBox="0 0 560 560"
    aria-hidden="true"
    class="stroke-primary pointer-events-none absolute -top-37.5 -right-42.5 size-90 fill-none opacity-70 sm:-top-52.5 sm:-right-47.5 sm:size-140"
  >
    <circle
      class="origin-fill-center animate-spin-slow"
      cx="200"
      cy="330"
      r="180"
      stroke-width="1.8"
      stroke-dasharray="9 9"
    />
    <circle
      class="origin-fill-center animate-spin-reverse"
      cx="370"
      cy="230"
      r="180"
      stroke-width="1.8"
      stroke-dasharray="9 9"
    />
  </svg>
));
