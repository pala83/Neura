import { component$ } from "@builder.io/qwik";
import { Container, Section } from "~/components/brand/container";
import { SectionHeading } from "~/components/brand/section-heading";
import { LocationMap } from "./location-map";
import { OpeningHours } from "./opening-hours";

export const Hours = component$(() => (
  <Section id="horarios" tone="muted">
    <Container>
      <SectionHeading
        highlight="strong"
        eyebrow="Horarios y ubicación"
        class="reveal max-w-160"
      >
        Cuándo y dónde
        <span q:slot="highlight">encontrarnos.</span>
      </SectionHeading>
      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <OpeningHours />
        <LocationMap />
      </div>
    </Container>
  </Section>
));
