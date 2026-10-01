import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 rounded-full whitespace-nowrap font-heading font-semibold tracking-button uppercase no-underline transition duration-350 ease-soft focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      look: {
        primary:
          "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:text-primary-foreground hover:shadow-sm hover:brightness-90 active:press",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:press",
        alert: "bg-alert text-alert-foreground hover:bg-alert/90 active:press",
        outline:
          "border border-primary/45 bg-transparent text-accent-foreground hover:bg-primary/10 hover:text-foreground",
        light:
          "bg-background text-foreground hover:-translate-y-0.5 hover:bg-card",
        ghost: "text-foreground hover:bg-accent",
        link: "text-accent-foreground hover:text-foreground",
      },
      size: {
        sm: "min-h-11 px-5 text-xs",
        md: "min-h-12 px-5 text-sm",
        lg: "min-h-13.5 px-7 text-sm",
        icon: "size-11.5 border border-primary/35 tracking-normal",
        inline: "min-h-11 gap-2 text-xs",
      },
    },
    defaultVariants: {
      look: "primary",
      size: "md",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = PropsOf<"button"> & ButtonVariants;

export const Button = component$<ButtonProps>(({ size, look, ...props }) => {
  return (
    <button {...props} class={cn(buttonVariants({ size, look }), props.class)}>
      <Slot />
    </button>
  );
});

type LinkButtonProps = PropsOf<"a"> & ButtonVariants;

/** Mismo estilo que `Button`, renderizado como enlace (navegación, mailto, tel). */
export const LinkButton = component$<LinkButtonProps>(
  ({ size, look, ...props }) => {
    return (
      <a {...props} class={cn(buttonVariants({ size, look }), props.class)}>
        <Slot />
      </a>
    );
  },
);
