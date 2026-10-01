import { component$ } from "@builder.io/qwik";
import { Container, Section } from "~/components/brand/container";
import { SectionHeading } from "~/components/brand/section-heading";
import { CENTER } from "~/data/neura";
import { ContactLink } from "./contact-link";

export const Contact = component$(() => (
  <Section id="contacto">
    <Container class="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
      <div class="reveal flex flex-col gap-6">
        <SectionHeading eyebrow="Contacto">
          Estamos para
          <span q:slot="highlight">orientarte.</span>
        </SectionHeading>
        <p class="text-muted-foreground max-w-128 text-lg leading-relaxed">
          Escribinos o llamanos para hacer consultas, pedir un turno o coordinar
          una primera entrevista. Respondemos dentro del horario de atención.
        </p>
      </div>
      <div class="flex flex-col gap-3.5">
        <ContactLink
          href={CENTER.phoneHref}
          icon="phone"
          label="Teléfono"
          value={CENTER.phoneLabel}
        />
        <ContactLink
          href={`mailto:${CENTER.email}`}
          icon="mail"
          label="Gmail"
          value={CENTER.email}
        />
        <ContactLink
          href="#horarios"
          icon="pin"
          label="Dirección"
          value={CENTER.shortAddress}
        />
      </div>
    </Container>
  </Section>
));
