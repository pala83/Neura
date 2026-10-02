import { component$ } from "@builder.io/qwik";
import { Icon, type IconName } from "~/components/icons/icon";
import { CENTER, HOURS_SHORT } from "~/data/center";

const FACTS: { icon: IconName; text: string }[] = [
  { icon: "clock", text: HOURS_SHORT },
  { icon: "pin", text: CENTER.shortAddress },
  { icon: "phone", text: CENTER.phoneLabel },
];

/** Datos rápidos (horario, dirección, teléfono) bajo los CTAs del hero. */
export const QuickFacts = component$(() => (
  <ul class="short:hidden animate-rise animation-delay-600 flex flex-wrap gap-x-7 gap-y-3 border-t pt-6">
    {FACTS.map((f) => (
      <li
        key={f.icon}
        class="text-muted-foreground flex items-center gap-2.5 text-sm"
      >
        <Icon name={f.icon} class="text-primary size-4.5" />
        <span>{f.text}</span>
      </li>
    ))}
  </ul>
));
