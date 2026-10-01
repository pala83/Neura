import { component$, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  /** "strong" usa el verde oscuro de marca en lugar del acento. */
  highlight?: "primary" | "strong";
  class?: string;
}

/**
 * Eyebrow + título h2. El texto destacado va en el slot `highlight`:
 * `<SectionHeading eyebrow="…">Texto <span q:slot="highlight">resaltado.</span></SectionHeading>`
 */
export const SectionHeading = component$<SectionHeadingProps>(
  ({ eyebrow, highlight = "primary", class: className }) => (
    <div class={cn("flex flex-col gap-5.5", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 class="font-heading text-title text-foreground font-light">
        <Slot />{" "}
        <span
          class={cn(
            "font-medium",
            highlight === "strong" ? "text-accent-foreground" : "text-primary",
          )}
        >
          <Slot name="highlight" />
        </span>
      </h2>
    </div>
  ),
);

/** Párrafo introductorio que acompaña al encabezado de sección. */
export const SectionLead = component$<{ class?: string }>(
  ({ class: className }) => (
    <p
      class={cn(
        "text-muted-foreground max-w-100 text-base leading-relaxed",
        className,
      )}
    >
      <Slot />
    </p>
  ),
);
