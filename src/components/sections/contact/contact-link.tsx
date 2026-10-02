import { component$ } from "@builder.io/qwik";
import { Icon, type IconName } from "~/components/icons/icon";
import { trackContact, type ContactChannel } from "~/lib/analytics";

interface ContactLinkProps {
  href: string;
  icon: IconName;
  label: string;
  value: string;
  /** Si se indica, el click se registra como evento "contacto" en Analytics. */
  channel?: ContactChannel;
}

/** Tarjeta-enlace de contacto (teléfono, email, dirección). */
export const ContactLink = component$<ContactLinkProps>(
  ({ href, icon, label, value, channel }) => (
    <a
      href={href}
      onClick$={() => channel && trackContact(channel)}
      class="group reveal bg-card text-foreground hover:border-primary/45 hover:bg-muted flex items-center gap-4.5 rounded-xl border px-6 py-5.5 no-underline transition duration-350 hover:-translate-y-0.5"
    >
      <span class="bg-accent text-primary flex size-13 shrink-0 items-center justify-center rounded-full">
        <Icon name={icon} class="size-5.5" />
      </span>
      <span class="flex min-w-0 grow flex-col gap-1">
        <span class="font-heading text-2xs tracking-eyebrow text-accent-foreground font-semibold uppercase">
          {label}
        </span>
        <span class="font-heading text-foreground text-lg font-medium wrap-anywhere lg:text-xl">
          {value}
        </span>
      </span>
      <Icon
        name="arrow-right"
        class="text-primary transition-transform duration-350 group-hover:translate-x-1.25"
      />
    </a>
  ),
);
