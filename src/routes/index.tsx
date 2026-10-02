import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CENTER } from "~/data/center";
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

const TITLE = "Neura · Centro de estimulación y rehabilitación";
const DESCRIPTION = `Centro de estimulación y rehabilitación cognitiva y sensoriomotriz en ${CENTER.region}. Siete disciplinas coordinadas, calendario de turnos, horarios y contacto.`;

/**
 * Metadatos para buscadores y vistas previas al compartir (WhatsApp, Instagram,
 * Facebook, X…). Las URLs de Open Graph deben ser absolutas: se arman con el
 * origen de la petición, así funcionan en cualquier dominio del despliegue.
 */
export const head: DocumentHead = ({ url }) => {
  const image = new URL("/og-image.jpg", url).href;
  const pageUrl = new URL("/", url).href;

  return {
    title: TITLE,
    meta: [
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#faf8ec" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: CENTER.name },
      { property: "og:locale", content: "es_AR" },
      { property: "og:url", content: pageUrl },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: image },
      { property: "og:image:secure_url", content: image },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Logo de Neura y el lema «Rehabilitación integral, a tu ritmo».",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: image },
    ],
  };
};
