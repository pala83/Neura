import { component$ } from "@builder.io/qwik";
import { Icon } from "~/components/icons/icon";
import { Badge } from "~/components/ui";
import { formatSchedule } from "~/lib/availability";
import { DisciplineIcon } from "../disciplines/discipline-card";
import { useBooking } from "./use-booking";

/** Disciplina elegida, profesional y franja horaria. */
export const BookingPanelHeader = component$(() => {
  const { view } = useBooking();
  const { disc } = view.value;

  return (
    <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-5.5">
      <div class="flex min-w-0 items-center gap-3.5">
        <DisciplineIcon discipline={disc} class="size-13" />
        <div class="flex min-w-0 flex-col gap-1">
          <span class="font-heading text-foreground text-xl font-medium">
            {disc.name}
          </span>
          <span class="text-subtle-foreground text-sm">
            {disc.professional} · {disc.title}
          </span>
        </div>
      </div>
      <Badge look="accent" size="pill">
        <Icon name="clock" class="size-4" />
        <span>{formatSchedule(disc)}</span>
      </Badge>
    </div>
  );
});
