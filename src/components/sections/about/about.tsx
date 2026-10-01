import { component$ } from "@builder.io/qwik";
import { Container, Section } from "~/components/brand/container";
import { SectionHeading } from "~/components/brand/section-heading";
import { PROCESS_STEPS } from "~/data/neura";
import { ProcessStep } from "./process-step";

export const About = component$(() => (
  <Section id="centro">
    <Container class="grid items-start gap-10 lg:grid-cols-2 lg:gap-24">
      <div class="reveal flex flex-col gap-6">
        <SectionHeading eyebrow="El centro">
          Estimular, rehabilitar y acompañar,
          <span q:slot="highlight">con una mirada integral.</span>
        </SectionHeading>
        <p class="text-muted-foreground max-w-144 text-lg leading-relaxed">
          Neura es un centro de estimulación y rehabilitación cognitiva y
          sensoriomotriz. Reunimos en un mismo lugar a profesionales de siete
          disciplinas para que cada paciente reciba un abordaje coordinado, con
          objetivos claros y un seguimiento cercano junto a su familia.
        </p>
      </div>
      <ol class="flex flex-col">
        {PROCESS_STEPS.map((s, i) => (
          <ProcessStep key={s.title} index={i} title={s.title} text={s.text} />
        ))}
      </ol>
    </Container>
  </Section>
));
