import { component$ } from "@builder.io/qwik";
import { Logo } from "~/components/brand/logo";
import { Container } from "~/components/brand/container";
import { LinkButton } from "~/components/ui";
import { NAV_LINKS } from "~/data/neura";
import { MobileNav } from "./mobile-nav";

export const SiteHeader = component$(() => (
  <header class="border-primary/15 bg-background/85 sticky top-0 z-50 border-b backdrop-blur-md">
    <Container class="h-header flex items-center justify-between gap-6">
      <Logo />
      <nav aria-label="Principal" class="nav:flex hidden items-center gap-8.5">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            class="font-heading text-muted-foreground after:bg-primary after:ease-soft hover:text-foreground relative text-sm font-medium tracking-widest whitespace-nowrap uppercase no-underline after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-450 hover:after:scale-x-100"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div class="flex items-center gap-2.5">
        <LinkButton
          href="#turnos"
          size="sm"
          class="hidden text-sm sm:inline-flex"
        >
          Consultar turnos
        </LinkButton>
        <MobileNav />
      </div>
    </Container>
  </header>
));
