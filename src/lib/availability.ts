import { CENTER, type Discipline } from "~/data/neura";

/**
 * Disponibilidad de ejemplo (portada del diseño). Es determinística: el estado de
 * cada horario sale de un hash, así SSR y cliente producen el mismo resultado.
 * Las fechas se manejan como día civil en la zona horaria del centro.
 */

export const DAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const DAYS_SHORT = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
export const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];
export const WEEKDAY_HEADERS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

export interface CivilDate {
  y: number;
  /** Mes 0-11. */
  m: number;
  d: number;
}

export interface Now extends CivilDate {
  dow: number;
  minutes: number;
}

export type DayStatus = "past" | "off" | "free" | "few" | "full";

export interface Slot {
  label: string;
  booked: boolean;
}

export interface DayInfo {
  status: DayStatus;
  free: number;
  slots: Slot[] | null;
  text: string;
}

export const pad = (n: number) => (n < 10 ? "0" : "") + n;
export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const keyOf = ({ y, m, d }: CivilDate) => `${y}-${pad(m + 1)}-${pad(d)}`;
export const parseKey = (k: string): CivilDate => {
  const [y, m, d] = k.split("-").map(Number);
  return { y, m: m - 1, d };
};
const serial = ({ y, m, d }: CivilDate) => Date.UTC(y, m, d);
export const dayOfWeek = (c: CivilDate) => new Date(serial(c)).getUTCDay();
export const daysInMonth = (y: number, m: number) => new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
const addDays = (c: CivilDate, n: number): CivilDate => {
  const t = new Date(serial(c) + n * 86_400_000);
  return { y: t.getUTCFullYear(), m: t.getUTCMonth(), d: t.getUTCDate() };
};

/** Fecha y hora actuales en la zona horaria del centro. */
export function centerNow(date = new Date()): Now {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: CENTER.timeZone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  const c = { y: +parts.year, m: +parts.month - 1, d: +parts.day };
  return { ...c, dow: dayOfWeek(c), minutes: +parts.hour * 60 + +parts.minute };
}

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function formatDays(days: number[]) {
  const weekdays = [1, 2, 3, 4, 5];
  if (days.length === 5 && weekdays.every((d) => days.includes(d))) return "Lun a vie";
  return days.map((d) => DAYS_SHORT[d]).join(" · ");
}

export const formatSchedule = (disc: Discipline) =>
  `${formatDays(disc.days)} · ${pad(disc.from)}:00 a ${pad(disc.to)}:00 h`;

export const formatLongDate = (c: CivilDate) =>
  `${cap(DAYS[dayOfWeek(c)])} ${c.d} de ${MONTHS[c.m]}`;

export function statusOf(disc: Discipline, date: CivilDate, now: Now): DayInfo {
  const cmp = serial(date) - serial(now);
  if (cmp < 0) return { status: "past", free: 0, slots: null, text: "fecha pasada" };
  if (!disc.days.includes(dayOfWeek(date)))
    return { status: "off", free: 0, slots: null, text: "sin atención" };
  const isToday = cmp === 0;
  const k = keyOf(date);
  const slots: Slot[] = [];
  for (let t = disc.from * 60; t + disc.duration <= disc.to * 60; t += disc.duration) {
    const label = `${pad(Math.floor(t / 60))}:${pad(t % 60)}`;
    const booked = (isToday && t <= now.minutes) || hash(`${disc.id}|${k}|${label}`) % 100 < 52;
    slots.push({ label, booked });
  }
  const free = slots.filter((x) => !x.booked).length;
  const status: DayStatus = free >= 3 ? "free" : free > 0 ? "few" : "full";
  const text =
    free === 0 ? "sin turnos libres" : free === 1 ? "1 turno libre" : `${free} turnos libres`;
  return { status, free, slots, text };
}

export function firstAvailable(disc: Discipline, now: Now): CivilDate {
  for (let i = 0; i < 90; i++) {
    const d = addDays(now, i);
    if (statusOf(disc, d, now).free > 0) return d;
  }
  return now;
}

export interface CalendarCell {
  date: CivilDate | null;
  info: DayInfo | null;
  isToday: boolean;
}

/** Celdas del mes empezando en lunes, completadas hasta múltiplo de 7. */
export function monthCells(disc: Discipline, y: number, m: number, now: Now): CalendarCell[] {
  const cells: CalendarCell[] = [];
  const offset = (dayOfWeek({ y, m, d: 1 }) + 6) % 7;
  for (let i = 0; i < offset; i++) cells.push({ date: null, info: null, isToday: false });
  for (let d = 1; d <= daysInMonth(y, m); d++) {
    const date = { y, m, d };
    cells.push({
      date,
      info: statusOf(disc, date, now),
      isToday: y === now.y && m === now.m && d === now.d,
    });
  }
  while (cells.length % 7 !== 0) cells.push({ date: null, info: null, isToday: false });
  return cells;
}
