import { $, component$ } from "@builder.io/qwik";
import { Icon } from "~/components/icons/icon";
import { Button } from "~/components/ui";
import {
  MONTHS,
  WEEKDAY_HEADERS,
  cap,
  keyOf,
  monthCells,
} from "~/lib/availability";
import { CalendarDay } from "./calendar-day";
import { useBooking } from "./use-booking";

/** Calendario mensual: hasta dos meses hacia adelante desde el actual. */
export const MonthCalendar = component$(() => {
  const { state, view } = useBooking();
  const { now, disc } = view.value;
  const current = now.y * 12 + now.m;
  const shown = state.year * 12 + state.month;
  const cells = monthCells(disc, state.year, state.month, now);

  const go$ = $((delta: number) => {
    const n = state.year * 12 + state.month + delta;
    state.year = Math.floor(n / 12);
    state.month = n % 12;
    state.day = null;
    state.slot = null;
  });

  return (
    <div>
      <div class="mt-5.5 flex items-center justify-between gap-3">
        <h3
          aria-live="polite"
          class="font-heading text-foreground text-2xl font-normal tracking-wide"
        >
          {cap(MONTHS[state.month])} {state.year}
        </h3>
        <div class="flex gap-2">
          <Button
            look="ghost"
            size="icon"
            aria-label="Mes anterior"
            disabled={shown <= current}
            onClick$={() => go$(-1)}
            class="border-input bg-card hover:border-primary hover:bg-card hover:text-primary size-11 disabled:opacity-35"
          >
            <Icon name="chevron-left" class="size-4.5" />
          </Button>
          <Button
            look="ghost"
            size="icon"
            aria-label="Mes siguiente"
            disabled={shown >= current + 2}
            onClick$={() => go$(1)}
            class="border-input bg-card hover:border-primary hover:bg-card hover:text-primary size-11 disabled:opacity-35"
          >
            <Icon name="chevron-right" class="size-4.5" />
          </Button>
        </div>
      </div>
      <div aria-hidden="true" class="mt-5 mb-2 grid grid-cols-7 gap-1 sm:gap-2">
        {WEEKDAY_HEADERS.map((d) => (
          <span
            key={d}
            class="font-heading text-2xs tracking-eyebrow text-subtle-foreground text-center font-semibold uppercase"
          >
            {d}
          </span>
        ))}
      </div>
      <div class="grid grid-cols-7 gap-1 sm:gap-2">
        {cells.map((cell, i) => {
          const key = cell.date ? keyOf(cell.date) : null;
          return (
            <CalendarDay
              key={key ?? `blank-${i}`}
              cell={cell}
              selected={key !== null && key === state.day}
              onPick$={() => {
                state.day = key;
                state.slot = null;
              }}
            />
          );
        })}
      </div>
    </div>
  );
});
