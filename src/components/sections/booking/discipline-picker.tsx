import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Icon } from "~/components/icons/icon";
import { ToggleGroup } from "~/components/ui";
import { DISCIPLINES } from "~/data/neura";
import { selectDiscipline } from "./booking-context";
import { useBooking } from "./use-booking";

/** Chips de disciplina (qwik-ui ToggleGroup, selección única). */
export const DisciplinePicker = component$(() => {
  const { state } = useBooking();
  const value = useSignal(state.disc);

  // Sincroniza cuando la disciplina cambia desde otra parte (tarjetas "Ver disponibilidad").
  useTask$(({ track }) => {
    value.value = track(() => state.disc);
  });

  const onChange$ = $((id: string) => {
    if (id) selectDiscipline(state, id);
    else value.value = state.disc; // no se permite quedar sin selección
  });

  return (
    <ToggleGroup.Root
      bind:value={value}
      onChange$={onChange$}
      aria-label="Elegir disciplina"
      class="no-scrollbar max-sm:-mx-gutter max-sm:px-gutter mt-11 flex-wrap gap-2.5 max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:pt-0.5 max-sm:pb-2"
    >
      {DISCIPLINES.map((d) => (
        <ToggleGroup.Item key={d.id} value={d.id} look="chip" size="chip">
          <Icon name={d.icon} />
          <span>{d.name}</span>
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
});
