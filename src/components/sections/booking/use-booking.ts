import { useComputed$, useContext } from "@builder.io/qwik";
import { DISCIPLINES } from "~/data/neura";
import { centerNow, parseKey, statusOf } from "~/lib/availability";
import { BookingContext } from "./booking-context";

/** Estado del calendario + valores derivados (disciplina, día elegido y su disponibilidad). */
export function useBooking() {
  const state = useContext(BookingContext);
  const view = useComputed$(() => {
    const now = centerNow();
    const disc = DISCIPLINES.find((d) => d.id === state.disc) ?? DISCIPLINES[0];
    const day = state.day ? parseKey(state.day) : null;
    const dayInfo = day ? statusOf(disc, day, now) : null;
    return { now, disc, day, dayInfo };
  });
  return { state, view };
}
