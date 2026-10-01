import type { IconName } from "~/components/icons/icon";

/** Datos del centro. Los valores entre corchetes son placeholders del diseño. */
export const CENTER = {
  phoneLabel: "[Teléfono del centro]",
  phoneHref: "tel:[TELEFONO]",
  email: "[correo]@gmail.com",
  street: "[Calle y número]",
  city: "[Localidad, provincia] · [CP]",
  shortAddress: "[Calle y número], [Localidad]",
  quickAddress: "[Dirección del centro]",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=[DIRECCION]",
  timeZone: "America/Argentina/Buenos_Aires",
} as const;

export const NAV_LINKS = [
  { href: "#centro", label: "El centro", long: "El centro" },
  {
    href: "#disciplinas",
    label: "Disciplinas",
    long: "Disciplinas y profesionales",
  },
  { href: "#turnos", label: "Turnos", long: "Calendario de turnos" },
  { href: "#horarios", label: "Horarios", long: "Horarios y ubicación" },
  { href: "#contacto", label: "Contacto", long: "Contacto" },
] as const;

/** Colores de las tres teselas decorativas (clases de fondo del tema). */
export type TileColor = "primary" | "gold" | "sage" | "terracotta" | "sky";

export interface Discipline {
  id: string;
  name: string;
  description: string;
  icon: IconName;
  professional: string;
  title: string;
  /** Matrícula a mostrar en la tarjeta. */
  license: string;
  /** Días de atención (0 = domingo). */
  days: number[];
  from: number;
  to: number;
  /** Duración de la sesión en minutos. */
  duration: number;
  tiles: [TileColor, TileColor, TileColor];
}

export const DISCIPLINES: Discipline[] = [
  {
    id: "psicopedagogia",
    name: "Psicopedagogía",
    description:
      "Evaluación y abordaje de las dificultades de aprendizaje, atención y funciones ejecutivas en niños, adolescentes y adultos.",
    icon: "book",
    professional: "[Nombre y apellido]",
    title: "Lic. en Psicopedagogía",
    license: "Mat. [N.º]",
    days: [1, 3, 5],
    from: 9,
    to: 13,
    duration: 45,
    tiles: ["sage", "gold", "primary"],
  },
  {
    id: "terapia",
    name: "Terapia ocupacional",
    description:
      "Promueve la autonomía en las actividades de la vida diaria a través de la integración sensorial y el entrenamiento funcional.",
    icon: "puzzle",
    professional: "[Nombre y apellido]",
    title: "Lic. en Terapia Ocupacional",
    license: "Mat. [N.º]",
    days: [1, 2, 4],
    from: 14,
    to: 19,
    duration: 45,
    tiles: ["gold", "primary", "terracotta"],
  },
  {
    id: "kinesiologia",
    name: "Kinesiología",
    description:
      "Rehabilitación del movimiento, la postura y la función motora luego de lesiones, cirugías o afecciones neurológicas.",
    icon: "body",
    professional: "[Nombre y apellido]",
    title: "Lic. en Kinesiología y Fisiatría",
    license: "Mat. [N.º]",
    days: [1, 2, 3, 4, 5],
    from: 8,
    to: 12,
    duration: 40,
    tiles: ["primary", "sky", "sage"],
  },
  {
    id: "fisioterapia",
    name: "Fisioterapia",
    description:
      "Agentes físicos y terapia manual para aliviar el dolor, reducir la inflamación y recuperar la movilidad.",
    icon: "waves",
    professional: "[Nombre y apellido]",
    title: "Lic. en Fisioterapia",
    license: "Mat. [N.º]",
    days: [2, 4, 6],
    from: 9,
    to: 13,
    duration: 40,
    tiles: ["terracotta", "sage", "gold"],
  },
  {
    id: "visual",
    name: "Estimulación y rehabilitación visual",
    description:
      "Entrenamiento de las funciones visuales y visomotoras en personas con baja visión o alteraciones de origen neurológico.",
    icon: "eye",
    professional: "[Nombre y apellido]",
    title: "[Título profesional]",
    license: "Mat. [N.º]",
    days: [3, 5],
    from: 10,
    to: 14,
    duration: 45,
    tiles: ["sky", "primary", "gold"],
  },
  {
    id: "fono",
    name: "Fonoaudiología",
    description:
      "Evaluación y tratamiento de la comunicación, el lenguaje, el habla, la voz y la deglución.",
    icon: "speech",
    professional: "[Nombre y apellido]",
    title: "Lic. en Fonoaudiología",
    license: "Mat. [N.º]",
    days: [1, 3, 4],
    from: 15,
    to: 19,
    duration: 45,
    tiles: ["primary", "terracotta", "sage"],
  },
  {
    id: "psicologia",
    name: "Psicología",
    description:
      "Acompañamiento terapéutico y evaluación neuropsicológica para el paciente y su familia a lo largo de todo el proceso.",
    icon: "mind",
    professional: "[Nombre y apellido]",
    title: "Lic. en Psicología",
    license: "Mat. [N.º]",
    days: [2, 4, 5],
    from: 16,
    to: 20,
    duration: 50,
    tiles: ["gold", "sage", "primary"],
  },
];

export const PROCESS_STEPS = [
  {
    title: "Evaluación inicial",
    text: "Conocemos la historia, las necesidades y los objetivos de cada paciente antes de definir el tratamiento.",
  },
  {
    title: "Plan personalizado",
    text: "Definimos qué disciplinas intervienen, con qué frecuencia y cuáles son las metas de cada etapa.",
  },
  {
    title: "Seguimiento conjunto",
    text: "El equipo revisa los avances de forma periódica y ajusta el plan junto al paciente y su familia.",
  },
] as const;

/** Horario general del centro, en minutos desde las 00:00 (null = cerrado). Índice 0 = domingo. */
export const OPENING_HOURS: {
  day: string;
  open: [number, number] | null;
  label: string;
}[] = [
  { day: "Domingo", open: null, label: "Cerrado" },
  { day: "Lunes", open: [480, 1200], label: "[08:00 – 20:00]" },
  { day: "Martes", open: [480, 1200], label: "[08:00 – 20:00]" },
  { day: "Miércoles", open: [480, 1200], label: "[08:00 – 20:00]" },
  { day: "Jueves", open: [480, 1200], label: "[08:00 – 20:00]" },
  { day: "Viernes", open: [480, 1200], label: "[08:00 – 20:00]" },
  { day: "Sábado", open: [540, 780], label: "[09:00 – 13:00]" },
];
