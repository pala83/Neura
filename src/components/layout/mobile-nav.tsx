import { $, component$, useSignal } from "@builder.io/qwik";
import { Icon } from "~/components/icons/icon";
import { Collapsible, buttonVariants, LinkButton } from "~/components/ui";
import { NAV_LINKS } from "~/data/neura";

/** Menú desplegable para pantallas angostas (qwik-ui Collapsible). */
export const MobileNav = component$(() => {
  const open = useSignal(false);
  const close$ = $(() => {
    open.value = false;
  });

  return (
    <Collapsible.Root bind:open={open} class="nav:hidden">
      <Collapsible.Trigger
        aria-label="Menú"
        class={buttonVariants({ look: "ghost", size: "icon" })}
      >
        <Icon name={open.value ? "close" : "menu"} />
      </Collapsible.Trigger>
      <Collapsible.Content class="border-primary/20 bg-background data-[open]:animate-in data-[open]:fade-in-0 data-[open]:slide-in-from-top-4 absolute inset-x-0 top-full border-b shadow-lg">
        <nav
          aria-label="Menú móvil"
          class="px-gutter flex flex-col pt-2 pb-5.5"
        >
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick$={close$}
              class={[
                "font-heading text-body-sm text-foreground flex min-h-13 items-center font-medium tracking-wide no-underline",
                i < NAV_LINKS.length - 1 && "border-b",
              ]}
            >
              {l.long}
            </a>
          ))}
          <LinkButton href="#turnos" onClick$={close$} class="mt-3.5 min-h-13">
            Consultar turnos
          </LinkButton>
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
});
