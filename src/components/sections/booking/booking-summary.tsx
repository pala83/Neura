import { component$ } from "@builder.io/qwik";
import { Icon } from "~/components/icons/icon";
import { Card, LinkButton } from "~/components/ui";
import { CENTER } from "~/data/center";
import { formatLongDate, pad } from "~/lib/availability";
import { useBooking } from "./use-booking";

/** Resumen del turno elegido con accesos para pedirlo por email o teléfono. */
export const BookingSummary = component$(() => {
  const { state, view } = useBooking();
  const { disc, day, dayInfo } = view.value;
  const slot = state.slot;
  const valid = !!(
    day &&
    slot &&
    dayInfo?.slots?.some((s) => s.label === slot && !s.booked)
  );
  if (!valid || !day) return null;

  const subject = `Solicitud de turno · ${disc.name} · ${pad(day.d)}/${pad(day.m + 1)} ${slot} h`;

  return (
    <Card.Root class="animate-rise border-primary/20 flex flex-col gap-3.5 rounded-xl p-5 shadow-none">
      <span class="font-heading text-2xs tracking-eyebrow text-accent-foreground font-semibold uppercase">
        Tu selección
      </span>
      <div class="flex flex-col gap-1">
        <span class="font-heading text-foreground text-lg leading-snug font-medium">
          {disc.name} · {slot} h
        </span>
        <span class="text-muted-foreground text-sm">
          {formatLongDate(day)} · con {disc.professional}
        </span>
      </div>
      <LinkButton
        href={`mailto:${CENTER.email}?subject=${encodeURIComponent(subject)}`}
      >
        <Icon name="mail" class="size-4.5" />
        Solicitar por email
      </LinkButton>
      <LinkButton href={CENTER.phoneHref} look="outline">
        <Icon name="phone" class="size-4.5" />
        Llamar al centro
      </LinkButton>
    </Card.Root>
  );
});
