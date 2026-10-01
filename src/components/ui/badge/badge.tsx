import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full transition-colors",
  {
    variants: {
      look: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        alert: "bg-alert text-alert-foreground",
        outline: "border text-foreground",
        accent: "bg-accent text-accent-foreground",
        muted: "bg-muted text-subtle-foreground",
      },
      size: {
        label:
          "px-3 py-1.75 font-heading text-2xs font-semibold tracking-eyebrow uppercase",
        tag: "px-2 py-0.75 font-heading text-3xs font-semibold tracking-eyebrow uppercase",
        pill: "px-3.5 py-2 text-sm",
      },
    },
    defaultVariants: {
      look: "primary",
      size: "label",
    },
  },
);

type BadgeProps = PropsOf<"div"> & VariantProps<typeof badgeVariants>;

export const Badge = component$<BadgeProps>(({ look, size, ...props }) => {
  return (
    <div {...props} class={cn(badgeVariants({ look, size }), props.class)}>
      <Slot />
    </div>
  );
});
