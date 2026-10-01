import { component$ } from "@builder.io/qwik";
import { Container } from "~/components/brand/container";
import { Eyebrow } from "~/components/brand/eyebrow";
import { Icon } from "~/components/icons/icon";
import { MosaicHillsBackground } from "~/components/layout/mosaic-strip";
import { LinkButton } from "~/components/ui";
import { HeroEmblem } from "./hero-emblem";
import { HeroRings } from "./hero-rings";
import { QuickFacts } from "./quick-facts";

export const Hero = component$(() => (
  <section
    id="inicio"
    class="h-hero grid-rows-hero relative grid min-h-fit overflow-hidden"
  >
    <HeroRings />
    <MosaicHillsBackground />
    <Container class="relative z-10 grid items-center gap-8 self-center py-8 lg:grid-cols-2 lg:gap-16 lg:py-10">
      <div class="gap-hero-gap flex flex-col">
        <Eyebrow class="animate-rise animation-delay-50">
          Estimulación y rehabilitación cognitiva y sensoriomotriz
        </Eyebrow>
        <h1 class="animate-rise font-heading text-display text-foreground animation-delay-150 font-light">
          Rehabilitación integral,{" "}
          <span class="text-primary font-medium">a tu ritmo.</span>
        </h1>
        <p class="animate-rise text-lead text-muted-foreground animation-delay-300 short:text-body-sm tiny:hidden max-w-136">
          Siete disciplinas trabajan en conjunto para acompañar cada proceso de
          estimulación y rehabilitación, en un espacio pensado para la calma y
          la concentración.
        </p>
        <div class="animate-rise animation-delay-450 flex flex-wrap gap-3.5 md:flex-nowrap">
          <LinkButton href="#turnos" size="lg" class="short:min-h-12">
            Consultar turnos <Icon name="arrow-right" class="size-4.5" />
          </LinkButton>
          <LinkButton
            href="#disciplinas"
            size="lg"
            look="outline"
            class="short:min-h-12"
          >
            Conocer al equipo
          </LinkButton>
        </div>
        <QuickFacts />
      </div>
      <div class="animate-rise animation-delay-200 hidden justify-center lg:flex">
        <HeroEmblem />
      </div>
    </Container>
  </section>
));
