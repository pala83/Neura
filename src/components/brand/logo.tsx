import { component$ } from "@builder.io/qwik";
import LogoN from "~/media/logo-n.webp?jsx";

/** Isotipo + wordmark del header. */
export const Logo = component$(() => (
  <a
    href="#inicio"
    aria-label="Neura, ir al inicio"
    class="text-foreground flex items-center gap-3 no-underline"
  >
    <LogoN alt="" class="block h-9.5 w-auto" loading="eager" />
    <span class="flex flex-col gap-1.25 whitespace-nowrap">
      <span class="font-heading tracking-logo text-lg leading-none font-normal">
        NEURA
      </span>
      <span class="font-heading text-3xs text-subtle-foreground leading-none font-semibold tracking-widest uppercase">
        Centro de rehabilitación
      </span>
    </span>
  </a>
));
