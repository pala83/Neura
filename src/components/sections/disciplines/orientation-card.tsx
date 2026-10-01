import { component$ } from "@builder.io/qwik";
import { Tesserae } from "~/components/brand/tesserae";
import { LinkButton } from "~/components/ui";
import MosaicHills from "~/media/mosaic-hills.webp?jsx";

/** Tarjeta oscura que invita a consultar cuando no se sabe qué disciplina elegir. */
export const OrientationCard = component$(() => (
  <article class="reveal bg-secondary text-secondary-foreground relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6.5 pb-42.5">
    <Tesserae colors={["gold", "sage", "sky"]} />
    <h3 class="font-heading text-2xl font-normal">
      ¿No sabés qué disciplina necesitás?
    </h3>
    <p class="text-body-sm text-secondary-foreground/80">
      Contanos tu situación y te orientamos hacia el abordaje adecuado.
    </p>
    <LinkButton
      href="#contacto"
      look="light"
      size="sm"
      class="relative z-10 min-h-11.5 self-start"
    >
      Hablar con el centro
    </LinkButton>
    <MosaicHills
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute bottom-0 left-0 h-auto w-11/5 max-w-none"
    />
  </article>
));
