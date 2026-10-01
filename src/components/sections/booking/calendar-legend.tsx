import { component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { dotVariants } from "./calendar-day";

const ITEMS = [
  {
    label: "Disponible",
    box: "bg-accent",
    dot: dotVariants({ status: "free" }),
  },
  {
    label: "Pocos turnos",
    box: "bg-warning",
    dot: dotVariants({ status: "few" }),
  },
  { label: "Completo", box: "bg-muted", dot: dotVariants({ status: "full" }) },
  { label: "Sin atención", box: "inset-ring inset-ring-input", dot: null },
  { label: "Hoy", box: "inset-ring-2 inset-ring-foreground", dot: null },
];

export const CalendarLegend = component$(() => (
  <ul class="text-muted-foreground mt-6 flex flex-wrap gap-x-5.5 gap-y-2.5 text-sm">
    {ITEMS.map((it) => (
      <li key={it.label} class="inline-flex items-center gap-2">
        <span
          class={cn(
            "inline-flex size-5.5 shrink-0 items-center justify-center rounded-xs",
            it.box,
          )}
        >
          {it.dot && <span class={it.dot} />}
        </span>
        {it.label}
      </li>
    ))}
  </ul>
));
