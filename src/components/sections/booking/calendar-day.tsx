import { component$, type QRL } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { cva } from "class-variance-authority";
import type { CalendarCell } from "~/lib/availability";
import { DAYS, MONTHS, cap, dayOfWeek } from "~/lib/availability";

export const dayVariants = cva(
  "relative flex h-12 flex-col items-center justify-center gap-1 rounded-md border border-transparent font-heading text-sm font-medium text-foreground transition duration-250 enabled:cursor-pointer enabled:hover:-translate-y-0.5 enabled:hover:border-primary sm:h-15.5 sm:gap-1.5 sm:rounded-lg sm:text-body-sm",
  {
    variants: {
      status: {
        free: "bg-accent",
        few: "bg-warning",
        full: "bg-muted text-subtle-foreground",
        off: "text-foreground/30",
        past: "text-foreground/30",
      },
      today: { true: "inset-ring-2 inset-ring-foreground" },
      selected: { true: "animate-pop bg-primary text-primary-foreground" },
    },
  },
);

/** Marcador bajo el número: punto lleno, punto hueco o guion según disponibilidad. */
export const dotVariants = cva("block", {
  variants: {
    status: {
      free: "size-1.5 rounded-full bg-primary",
      few: "size-1.5 rounded-full border border-warning-foreground",
      full: "h-px w-2.5 bg-subtle-foreground/60",
      off: "size-1.5",
      past: "size-1.5",
    },
    selected: { true: "size-1.5 rounded-full bg-primary-foreground" },
  },
});

interface CalendarDayProps {
  cell: CalendarCell;
  selected: boolean;
  onPick$: QRL<() => void>;
}

export const CalendarDay = component$<CalendarDayProps>(
  ({ cell, selected, onPick$ }) => {
    if (!cell.date || !cell.info)
      return <span aria-hidden="true" class="h-12 sm:h-15.5" />;
    const { status, text } = cell.info;
    const disabled = status === "off" || status === "past";
    const label = `${cap(DAYS[dayOfWeek(cell.date)])} ${cell.date.d} de ${MONTHS[cell.date.m]}: ${text}`;

    return (
      <button
        type="button"
        disabled={disabled}
        aria-label={label}
        aria-pressed={selected}
        onClick$={onPick$}
        class={dayVariants({
          status: selected ? undefined : status,
          today: cell.isToday && !selected,
          selected,
        })}
      >
        <span class={cn(status === "full" && "line-through")}>
          {cell.date.d}
        </span>
        <span class={dotVariants(selected ? { selected } : { status })} />
      </button>
    );
  },
);
