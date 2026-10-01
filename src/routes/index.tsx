import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MosaicStripImage } from "~/components/layout/mosaic-strip";
import { SiteFooter } from "~/components/layout/site-footer";
import { SiteHeader } from "~/components/layout/site-header";
import { About } from "~/components/sections/about/about";
import { useBookingProvider } from "~/components/sections/booking/booking-context";
import { Booking } from "~/components/sections/booking/booking";
import { Contact } from "~/components/sections/contact/contact";
import { Disciplines } from "~/components/sections/disciplines/disciplines";
import { Hero } from "~/components/sections/hero/hero";
import { Hours } from "~/components/sections/hours/hours";

export default component$(() => {
  useBookingProvider();

  return (
    <div class="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Booking />
        <Hours />
        <Contact />
      </main>
      <MosaicStripImage />
      <SiteFooter />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Neura · Centro de estimulación y rehabilitación",
  meta: [
    {
      name: "Neura",
      content:
        "Centro de estimulación y rehabilitación cognitiva y sensoriomotriz. Siete disciplinas coordinadas, calendario de turnos, horarios y contacto.",
    },
    { name: "theme-color", content: "#faf8ec" },
  ],
};
