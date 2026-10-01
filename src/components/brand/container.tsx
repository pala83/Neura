import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

/** Ancho máximo del sitio con márgenes laterales fluidos. */
export const Container = component$<PropsOf<"div">>((props) => (
  <div
    {...props}
    class={cn("max-w-site px-gutter mx-auto w-full", props.class)}
  >
    <Slot />
  </div>
));

type SectionProps = PropsOf<"section"> & { tone?: "default" | "muted" };

/** Sección de página con el padding vertical estándar. */
export const Section = component$<SectionProps>(
  ({ tone = "default", ...props }) => (
    <section
      {...props}
      class={cn("py-section", tone === "muted" && "bg-muted", props.class)}
    >
      <Slot />
    </section>
  ),
);
