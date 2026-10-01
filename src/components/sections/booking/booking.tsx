import { component$ } from "@builder.io/qwik";
import { Container, Section } from "~/components/brand/container";
import {
  SectionHeading,
  SectionLead,
} from "~/components/brand/section-heading";
import { Card } from "~/components/ui";
import { BookingPanelHeader } from "./booking-panel-header";
import { BookingSummary } from "./booking-summary";
import { CalendarLegend } from "./calendar-legend";
import { DaySlots } from "./day-slots";
import { DisciplinePicker } from "./discipline-picker";
import { MonthCalendar } from "./month-calendar";

export const Booking = component$(() => (
  <Section id="turnos">
    <Container>
      <div class="reveal flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
        <SectionHeading eyebrow="Calendario de turnos" class="max-w-160">
          Consultá la disponibilidad
          <span q:slot="highlight">por disciplina.</span>
        </SectionHeading>
        <SectionLead>
          Elegí una especialidad y un día para ver los horarios libres. Después,
          solicitá tu turno por email o por teléfono.
        </SectionLead>
      </div>

      <DisciplinePicker />

      <Card.Root class="mt-6 grid overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-[minmax(0,1fr)_auto]">
        <div class="min-w-0 p-3.5 sm:p-6 lg:p-9">
          <BookingPanelHeader />
          <MonthCalendar />
          <CalendarLegend />
        </div>
        <aside class="bg-muted/70 flex min-w-0 flex-col gap-5 border-t p-4.5 sm:p-6 lg:w-95 lg:border-t-0 lg:border-l lg:p-8.5">
          <DaySlots />
          <BookingSummary />
          <p class="text-subtle-foreground mt-auto border-t pt-4 text-sm leading-relaxed">
            La disponibilidad es orientativa. El turno queda confirmado cuando
            el centro se comunica con vos.
          </p>
        </aside>
      </Card.Root>
    </Container>
  </Section>
));
