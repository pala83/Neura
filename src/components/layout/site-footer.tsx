import { component$, Slot } from "@builder.io/qwik";
import { Container } from "~/components/brand/container";
import { Separator } from "~/components/ui";
import { CENTER, HOURS_SUMMARY } from "~/data/center";
import { NAV_LINKS } from "~/data/neura";
import LogoLight from "~/media/logo-neura-light.webp?jsx";

const FooterColumn = component$<{ title: string }>(({ title }) => (
  <div class="text-body-sm flex flex-col gap-3">
    <span class="font-heading text-2xs tracking-eyebrow text-secondary-foreground font-semibold uppercase">
      {title}
    </span>
    <Slot />
  </div>
));

const linkClass =
  "text-secondary-foreground/90 no-underline hover:text-secondary-foreground";

export const SiteFooter = component$(() => (
  <footer class="bg-secondary text-secondary-foreground/80 grow">
    <Container class="flex flex-col gap-12 pt-12 pb-8 lg:pt-20">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col gap-5">
          <LogoLight alt="Neura" class="block h-auto w-24" />
          <p class="font-heading text-2xs tracking-eyebrow text-secondary-foreground/90 leading-loose font-semibold uppercase">
            Centro de estimulación
            <br />y rehabilitación cognitiva
            <br />y sensoriomotriz
          </p>
        </div>
        <FooterColumn title="Secciones">
          {NAV_LINKS.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href} class={linkClass}>
              {l.long}
            </a>
          ))}
        </FooterColumn>
        <FooterColumn title="Contacto">
          <a href={CENTER.phoneHref} class={linkClass}>
            {CENTER.phoneLabel}
          </a>
          <a href={`mailto:${CENTER.email}`} class={linkClass}>
            {CENTER.email}
          </a>
          <span>{CENTER.shortAddress}</span>
        </FooterColumn>
        <FooterColumn title="Atención">
          {HOURS_SUMMARY.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </FooterColumn>
      </div>
      <div class="flex flex-col gap-6">
        <Separator class="bg-secondary-foreground/15" />
        <div class="text-secondary-foreground/65 flex flex-wrap justify-between gap-x-8 gap-y-3 text-sm">
          <span>© 2026 Neura. Todos los derechos reservados.</span>
          <span>
            Centro de estimulación y rehabilitación cognitiva y sensoriomotriz
          </span>
        </div>
      </div>
    </Container>
  </footer>
));
