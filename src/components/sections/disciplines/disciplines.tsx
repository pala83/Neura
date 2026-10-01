import { component$ } from "@builder.io/qwik";
import { Container, Section } from "~/components/brand/container";
import {
  SectionHeading,
  SectionLead,
} from "~/components/brand/section-heading";
import { DISCIPLINES } from "~/data/neura";
import { DisciplineCard } from "./discipline-card";
import { OrientationCard } from "./orientation-card";

export const Disciplines = component$(() => (
  <Section id="disciplinas" tone="muted">
    <Container>
      <div class="reveal flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
        <SectionHeading
          highlight="strong"
          eyebrow="Disciplinas y profesionales"
          class="max-w-155"
        >
          Siete especialidades,
          <span q:slot="highlight">un mismo equipo.</span>
        </SectionHeading>
        <SectionLead>
          Cada área está a cargo de profesionales que trabajan de forma
          coordinada. Conocé a quienes te van a acompañar.
        </SectionLead>
      </div>
      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DISCIPLINES.map((d) => (
          <DisciplineCard key={d.id} discipline={d} />
        ))}
        <OrientationCard />
      </div>
    </Container>
  </Section>
));
