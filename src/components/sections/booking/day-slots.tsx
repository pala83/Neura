import { component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { Icon } from "~/components/icons/icon";
import { cap, formatLongDate } from "~/lib/availability";
import { useBooking } from "./use-booking";

const slotClass =
  "min-h-11.5 rounded-md border border-input bg-card font-heading text-sm font-semibold text-foreground transition duration-250 enabled:cursor-pointer enabled:hover:-translate-y-px enabled:hover:border-primary enabled:hover:text-primary disabled:cursor-not-allowed disabled:border-dashed disabled:bg-transparent disabled:text-subtle-foreground disabled:line-through";

/** Encabezado del día elegido y sus horarios. */
export const DaySlots = component$(() => {
  const { state, view } = useBooking();
  const { disc, day, dayInfo } = view.value;
  const slots = dayInfo?.slots ?? [];
  const hasPick = slots.some((s) => s.label === state.slot && !s.booked);

  return (
    <>
      <div class="flex flex-col gap-2">
        <span class="font-heading text-2xs tracking-eyebrow text-accent-foreground font-semibold uppercase">
          Horarios del día
        </span>
        <h3
          aria-live="polite"
          class="font-heading text-foreground text-2xl leading-tight font-normal"
        >
          {day ? formatLongDate(day) : "Ningún día seleccionado"}
        </h3>
        <p class="text-subtle-foreground text-sm">
          {dayInfo
            ? `${cap(dayInfo.text)} · sesiones de ${disc.duration} min`
            : "Los días resaltados tienen horarios libres."}
        </p>
      </div>

      {slots.length > 0 ? (
        <div class="grid grid-cols-3 gap-2.5">
          {slots.map((s) => {
            const selected = s.label === state.slot;
            return (
              <button
                key={s.label}
                type="button"
                disabled={s.booked}
                aria-pressed={selected}
                aria-label={`${s.label} h, ${s.booked ? "ocupado" : "disponible"}`}
                onClick$={() => {
                  state.slot = s.label;
                }}
                class={cn(
                  slotClass,
                  selected &&
                    "border-primary bg-primary text-primary-foreground enabled:hover:text-primary-foreground",
                )}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      ) : (
        <div class="border-input text-subtle-foreground flex flex-col items-center gap-3 rounded-xl border border-dashed px-4 py-7 text-center text-sm leading-relaxed">
          <Icon name="calendar" class="text-primary size-7" />
          <span>
            Elegí un día marcado en el calendario para ver sus horarios.
          </span>
        </div>
      )}

      {slots.length > 0 && !hasPick && (dayInfo?.free ?? 0) > 0 && (
        <p class="text-subtle-foreground text-sm leading-relaxed">
          Tocá un horario libre para preparar tu solicitud.
        </p>
      )}
    </>
  );
});
