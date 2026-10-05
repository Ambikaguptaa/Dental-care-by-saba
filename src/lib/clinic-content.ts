import { clinicConfig } from "@/config/clinic";
import { treatmentsData } from "@/data/treatments";

export const clinic = clinicConfig;
export const treatments = treatmentsData;

export type Treatment = (typeof treatmentsData)[number];

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Smile Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;
