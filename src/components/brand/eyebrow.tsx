import { component$, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { Tesserae } from "./tesserae";

/** Etiqueta en mayúsculas con teselas que encabeza cada sección. */
export const Eyebrow = component$<{ class?: string }>(
  ({ class: className }) => (
    <div class={cn("flex items-center gap-3.5", className)}>
      <Tesserae />
      <span class="font-heading tracking-eyebrow text-accent-foreground text-xs leading-normal font-semibold uppercase">
        <Slot />
      </span>
    </div>
  ),
);
