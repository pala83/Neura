import { component$ } from "@builder.io/qwik";

interface ProcessStepProps {
  index: number;
  title: string;
  text: string;
}

/** Paso numerado del abordaje del centro. */
export const ProcessStep = component$<ProcessStepProps>(
  ({ index, title, text }) => (
    <li class="reveal flex gap-5 border-t py-7 last:border-b">
      <span class="font-heading text-primary w-18 shrink-0 text-4xl leading-none font-light">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div class="flex min-w-0 flex-col gap-2">
        <h3 class="font-heading text-foreground text-xl font-medium">
          {title}
        </h3>
        <p class="text-muted-foreground text-base leading-relaxed">{text}</p>
      </div>
    </li>
  ),
);
