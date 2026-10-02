import { track } from "@vercel/analytics";

/**
 * Eventos personalizados de Vercel Web Analytics. Llamar solo desde handlers
 * del navegador (`onClick$`, …). En desarrollo no hacen nada porque el script
 * de Analytics solo se carga en producción (ver `root.tsx`).
 */
export type ContactChannel = "email" | "telefono";

/** Click en "Solicitar por email" / "Llamar al centro" del calendario de turnos. */
export const trackBookingRequest = (
  canal: ContactChannel,
  disciplina: string,
  fecha: string,
  horario: string,
) => track("solicitar_turno", { canal, disciplina, fecha, horario });

/** Click en un enlace de contacto (sección Contacto). */
export const trackContact = (canal: ContactChannel) =>
  track("contacto", { canal });
