import data from "./center.json";

/**
 * Información general del centro. La fuente es `center.json`: editá ese archivo
 * (horarios, dirección, localidad, teléfono, email) y todo el sitio se actualiza.
 * Este módulo solo deriva los formatos que usan los componentes.
 */

type DayKey = keyof typeof data.hours;
type DayHours = { open: string; close: string } | null;

/** Orden de `Date.getDay()`: índice 0 = domingo. */
const DAY_KEYS: DayKey[] = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];
const DAY_NAMES = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const DAY_PLURALS = [
  "Domingos",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábados",
];
const DAY_SHORT = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
/** Semana empezando en lunes, como se muestra en el sitio. */
const WEEK = [1, 2, 3, 4, 5, 6, 0];

const { address, phone } = data;
const fullAddress = `${address.street}, ${address.locality}, ${address.province}`;

export const CENTER = {
  name: data.name,
  timeZone: data.timeZone,
  phoneLabel: phone.display,
  phoneHref: `tel:${phone.number.replace(/[^\d+]/g, "") || phone.number}`,
  email: data.email,
  street: address.street,
  /** "Localidad, provincia · CP" */
  city: `${address.locality}, ${address.province} · ${address.postalCode}`,
  /** "Calle y número, Localidad" */
  shortAddress: `${address.street}, ${address.locality}`,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
} as const;

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const rangeLabel = (h: DayHours) => (h ? `${h.open} – ${h.close}` : "Cerrado");

export interface OpeningDay {
  day: string;
  /** Minutos desde las 00:00 [apertura, cierre), o null si está cerrado. */
  open: [number, number] | null;
  label: string;
}

/** Horario por día. Índice 0 = domingo. */
export const OPENING_HOURS: OpeningDay[] = DAY_KEYS.map((key, i) => {
  const h: DayHours = data.hours[key];
  return {
    day: DAY_NAMES[i],
    open: h ? [toMinutes(h.open), toMinutes(h.close)] : null,
    label: rangeLabel(h),
  };
});

/** Agrupa días consecutivos (lunes a domingo) con el mismo horario. */
function groupWeek() {
  const groups: { from: number; to: number; label: string }[] = [];
  for (const d of WEEK) {
    const label = OPENING_HOURS[d].label;
    const last = groups.at(-1);
    if (last && last.label === label) last.to = d;
    else groups.push({ from: d, to: d, label });
  }
  return groups;
}

/** Resumen largo: ["Lunes a viernes · 08:00 – 20:00", "Sábados · 09:00 – 13:00", "Domingos · Cerrado"]. */
export const HOURS_SUMMARY = groupWeek().map(({ from, to, label }) => {
  const days =
    from === to
      ? DAY_PLURALS[from]
      : `${DAY_NAMES[from]} a ${DAY_NAMES[to].toLowerCase()}`;
  return `${days} · ${label}`;
});

/** Resumen corto del primer bloque de la semana: "Lun a vie · 08:00 – 20:00". */
export const HOURS_SHORT = (() => {
  const { from, to, label } = groupWeek()[0];
  const days =
    from === to
      ? DAY_SHORT[from]
      : `${DAY_SHORT[from]} a ${DAY_SHORT[to].toLowerCase()}`;
  return `${days} · ${label}`;
})();
