import { $, component$, useContext } from "@builder.io/qwik";
import { Tesserae } from "~/components/brand/tesserae";
import { Icon } from "~/components/icons/icon";
import { Avatar, Card, LinkButton, Separator } from "~/components/ui";
import type { Discipline } from "~/data/neura";
import { BookingContext, selectDiscipline } from "../booking/booking-context";

/** Ícono circular de disciplina sobre fondo de acento. */
export const DisciplineIcon = component$<{
  discipline: Discipline;
  class?: string;
}>(({ discipline, class: className }) => (
  <span
    class={[
      "bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-14 shrink-0 items-center justify-center rounded-full transition-colors duration-500",
      className,
    ]}
  >
    <Icon name={discipline.icon} class="size-6.5" />
  </span>
));

export const DisciplineCard = component$<{ discipline: Discipline }>(
  ({ discipline }) => {
    const booking = useContext(BookingContext);
    const pick$ = $(() => selectDiscipline(booking, discipline.id));

    return (
      <Card.Root class="group reveal ease-soft hover:border-primary/45 flex flex-col gap-4.5 p-6.5 shadow-none transition duration-500 hover:-translate-y-1.5 hover:shadow-xl">
        <div class="flex items-start justify-between">
          <DisciplineIcon discipline={discipline} />
          <Tesserae colors={discipline.tiles} />
        </div>
        <h3 class="font-heading text-foreground text-xl font-medium">
          {discipline.name}
        </h3>
        <p class="text-body-sm text-muted-foreground grow">
          {discipline.description}
        </p>
        <Separator />
        <div class="flex items-center gap-3">
          <Avatar.Root class="border-subtle-foreground/50 bg-muted text-subtle-foreground size-11 border border-dashed">
            <Icon name="user" />
          </Avatar.Root>
          <div class="flex min-w-0 flex-col gap-0.75">
            <span class="text-foreground text-sm font-bold">
              {discipline.professional}
            </span>
            <span class="text-subtle-foreground text-sm leading-snug">
              {discipline.title} · {discipline.license}
            </span>
          </div>
        </div>
        <LinkButton
          href="#turnos"
          look="link"
          size="inline"
          class="group/link self-start"
          onClick$={pick$}
        >
          Ver disponibilidad
          <Icon
            name="arrow-right"
            class="ease-soft size-4 transition-transform duration-350 group-hover/link:translate-x-1.25"
          />
        </LinkButton>
      </Card.Root>
    );
  },
);
