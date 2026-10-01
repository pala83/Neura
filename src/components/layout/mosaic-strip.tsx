import { component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import MosaicHills from "~/media/mosaic-hills.webp?jsx";
import MosaicStrip from "~/media/mosaic-strip.jpg?jsx";

/** Colinas en mosaico como fondo del borde inferior del hero. */
export const MosaicHillsBackground = component$<{ class?: string }>(
  ({ class: className }) => (
    <MosaicHills
      alt=""
      aria-hidden="true"
      loading="eager"
      class={cn(
        "h-hero-mosaic pointer-events-none absolute inset-x-0 bottom-0 block w-full object-cover object-top",
        className,
      )}
    />
  ),
);

/** Franja delgada de mosaico sobre el footer. */
export const MosaicStripImage = component$(() => (
  <MosaicStrip
    alt=""
    aria-hidden="true"
    class="h-mosaic block w-full object-cover"
  />
));
