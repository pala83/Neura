import { component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

/** Trazos de los íconos del diseño (viewBox 24×24, línea redondeada). */
const PATHS = {
  // Disciplinas
  book: "M3 5.5c2.6-1 5.6-.8 9 1.2v13c-3.4-2-6.4-2.2-9-1.2z M21 5.5c-2.6-1-5.6-.8-9 1.2v13c3.4-2 6.4-2.2 9-1.2z",
  puzzle: "M5 7h5a2 2 0 0 1 4 0h3v3a2 2 0 0 1 0 4v5H5z",
  body: "M10.5 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0 M6 9.5l6 1.5 6-1.5 M12 11v4l-3.5 5.5 M12 15l3.5 5.5",
  waves:
    "M4 19.5h16 M7.5 15.5c0-2 2-2.5 2-4.5s-2-2.5-2-4.5 M12 15.5c0-2 2-2.5 2-4.5s-2-2.5-2-4.5 M16.5 15.5c0-2 2-2.5 2-4.5s-2-2.5-2-4.5",
  eye: "M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
  speech: "M4 5h16v11h-8.5l-4.5 3.5V16H4z M9 9.5v2 M12 8v5 M15 9.5v2",
  mind: "M8 20v-3.5A7 7 0 1 1 18.5 10l1.5 3.5h-1.5V16a2 2 0 0 1-2 2H15v2 M10 12.5c0-2.5 2-4 5-4 0 3-1.5 5-4.5 5 M10 13.5l2.5-2.5",
  // Interfaz
  clock: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0 M12 7v5l3 2",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z M9.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0",
  phone:
    "M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z",
  mail: "M5 5.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z M3.5 7l8.5 6 8.5-6",
  calendar:
    "M6 5h12a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5v-10A2.5 2.5 0 0 1 6 5z M3.5 10h17 M8 3v4 M16 3v4",
  user: "M8.5 8.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0 M5 20c1-3.8 3.8-5.5 7-5.5s6 1.7 7 5.5",
  "arrow-right": "M5 12h14 M13 6l6 6-6 6",
  "arrow-up-right": "M7 17L17 7 M9 7h8v8",
  "chevron-left": "M15 6l-6 6 6 6",
  "chevron-right": "M9 6l6 6-6 6",
  menu: "M4 7h16 M4 12h16 M4 17h16",
  close: "M6 6l12 12 M18 6L6 18",
} as const;

export type IconName = keyof typeof PATHS;

type IconProps = PropsOf<"svg"> & { name: IconName };

export const Icon = component$<IconProps>(({ name, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
    class={cn("size-5 shrink-0", props.class)}
  >
    <path d={PATHS[name]} />
  </svg>
));
