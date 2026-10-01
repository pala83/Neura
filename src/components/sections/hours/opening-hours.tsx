import { component$ } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { Icon } from "~/components/icons/icon";
import { Badge, Card, LinkButton } from "~/components/ui";
import { OPENING_HOURS } from "~/data/neura";
import { centerNow } from "~/lib/availability";

/** Lunes primero, domingo al final. */
const WEEK = [1, 2, 3, 4, 5, 6, 0];

export const OpeningHours = component$(() => {
  const now = centerNow();
  const today = OPENING_HOURS[now.dow].open;
  const openNow = !!today && now.minutes >= today[0] && now.minutes < today[1];

  return (
    <Card.Root class="reveal flex flex-col rounded-3xl p-5 shadow-none sm:p-6 lg:p-9">
      <div class="flex flex-wrap items-center justify-between gap-3.5 pb-4.5">
        <h3 class="font-heading text-foreground text-xl font-medium">
          Horarios de atención
        </h3>
        <Badge look={openNow ? "accent" : "muted"}>
          <span
            class={cn(
              "size-2 rounded-full",
              openNow
                ? "animate-glow-fast bg-primary"
                : "bg-subtle-foreground/60",
            )}
          />
          {openNow ? "Abierto ahora" : "Cerrado ahora"}
        </Badge>
      </div>
      <ul class="flex flex-col gap-0.5">
        {WEEK.map((i) => {
          const row = OPENING_HOURS[i];
          const isToday = i === now.dow;
          return (
            <li
              key={row.day}
              class={cn(
                "flex items-center justify-between gap-4 rounded-md px-4 py-3.5 transition-colors duration-300",
                isToday && "bg-accent",
              )}
            >
              <div
                class={cn(
                  "flex items-center gap-2.5 text-base",
                  isToday
                    ? "text-foreground font-bold"
                    : "text-muted-foreground",
                )}
              >
                {row.day}
                {isToday && <Badge size="tag">Hoy</Badge>}
              </div>
              <span
                class={cn(
                  "font-heading text-body-sm font-medium",
                  row.open ? "text-foreground" : "text-subtle-foreground",
                )}
              >
                {row.label}
              </span>
            </li>
          );
        })}
      </ul>
      <LinkButton
        href="#turnos"
        look="link"
        size="inline"
        class="group/link mt-4.5 self-start"
      >
        Ver horarios por disciplina
        <Icon
          name="arrow-right"
          class="ease-soft size-4 transition-transform duration-350 group-hover/link:translate-x-1.25"
        />
      </LinkButton>
    </Card.Root>
  );
});
