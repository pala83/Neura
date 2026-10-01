import {
  createContextId,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { DISCIPLINES } from "~/data/neura";
import { centerNow, firstAvailable, keyOf } from "~/lib/availability";

/** Estado del calendario de turnos, compartido entre las tarjetas de disciplina y la sección de turnos. */
export interface BookingState {
  disc: string;
  year: number;
  /** Mes 0-11 visible en el calendario. */
  month: number;
  /** Día seleccionado (`YYYY-MM-DD`) o null. */
  day: string | null;
  slot: string | null;
}

export const BookingContext = createContextId<BookingState>("neura.booking");

/** Selecciona una disciplina y salta a su primer día con turnos libres. */
export function selectDiscipline(state: BookingState, id: string) {
  const disc = DISCIPLINES.find((d) => d.id === id) ?? DISCIPLINES[0];
  const first = firstAvailable(disc, centerNow());
  state.disc = disc.id;
  state.year = first.y;
  state.month = first.m;
  state.day = keyOf(first);
  state.slot = null;
}

export function useBookingProvider() {
  const disc = DISCIPLINES[0];
  const first = firstAvailable(disc, centerNow());
  const state = useStore<BookingState>({
    disc: disc.id,
    year: first.y,
    month: first.m,
    day: keyOf(first),
    slot: null,
  });
  useContextProvider(BookingContext, state);
  return state;
}
