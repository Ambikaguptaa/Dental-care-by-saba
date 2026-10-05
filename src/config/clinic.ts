/**
 * Centralized Clinic Configuration for Dental by Saba.
 *
 * IMPORTANT:
 * - Update `whatsappNumber` with the verified clinic number when available.
 * - All WhatsApp links, contact cards, and footer info read directly from this single file.
 */

export interface ClinicConfig {
  name: string;
  legalName: string;
  descriptor: string;
  tagline: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  address: string;
  addressShort: string;
  openingHours: string;
  closedOn: string;
  scheduleNote: string;
  instagramHandle: string;
  instagramUrl: string;
  justdialUrl: string;
  googleMapsUrl: string;
}

export const clinicConfig: ClinicConfig = {
  name: "Dental by Saba",
  legalName: "Dental Care By Dr. Saba",
  descriptor: "Dental & Aesthetic Care",
  tagline: "Gentle Care. Confident Smiles.",

  // =========================================================================
  // WHATSAPP CONFIGURATION
  // REPLACE "REPLACE_WITH_VERIFIED_NUMBER" with the clinic's international format
  // number without spaces or symbols (e.g., "919876543210" for India).
  // =========================================================================
  whatsappNumber: "REPLACE_WITH_VERIFIED_NUMBER",

  // Public clinic phone (placeholder pending clinic verification)
  phone: "[Phone Number — Verify with Clinic]",

  // Public email
  email: "hello@dentalbysaba.com",

  // Verified public listing address in Mumbai
  address: "Mukund Nagar, Dharavi, Mumbai, Maharashtra 400017 (Opposite New ONGC Tower)",
  addressShort: "Dharavi, Mumbai",

  // Verified public operating schedule
  openingHours: "Monday – Saturday: 11:00 AM – 8:00 PM",
  closedOn: "Sunday: Closed",
  scheduleNote: "By appointment for a calm, unhurried consultation.",

  // Official Instagram channel
  instagramHandle: "@dentalcareby_drsaba",
  instagramUrl: "https://www.instagram.com/dentalcareby_drsaba/",

  // Justdial reference listing
  justdialUrl:
    "https://www.justdial.com/Mumbai/Dental-Care-By-Dr-Saba-Opposite-New-Ongc-Tower-Dharavi/022PXX22-XX22-240926030911-I4J7_BZDET",

  // Google Maps search query / directions link
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dental+Care+By+Dr+Saba+Opposite+New+ONGC+Tower+Dharavi+Mumbai",
};

/**
 * Constructs a prefilled WhatsApp message URL using the centralized phone number.
 */
export function buildWhatsAppUrl(params?: {
  name?: string;
  phone?: string;
  treatment?: string;
  preferredTime?: string;
  message?: string;
}): { url: string; text: string; isConfigured: boolean } {
  const isConfigured =
    Boolean(clinicConfig.whatsappNumber) &&
    clinicConfig.whatsappNumber !== "REPLACE_WITH_VERIFIED_NUMBER" &&
    !clinicConfig.whatsappNumber.includes("REPLACE");

  const lines: string[] = ["Hello Dental by Saba,"];

  if (params?.name || params?.treatment || params?.message) {
    lines.push("I would like to enquire about an appointment.\n");
    if (params.name) lines.push(`Name: ${params.name.trim()}`);
    if (params.phone) lines.push(`Phone: ${params.phone.trim()}`);
    if (params.treatment && params.treatment !== "General Consultation") {
      lines.push(`Interested In: ${params.treatment.trim()}`);
    }
    if (params.preferredTime) {
      lines.push(`Preferred Time: ${params.preferredTime.trim()}`);
    }
    if (params.message) {
      lines.push(`Message: ${params.message.trim()}`);
    }
    lines.push("\nPlease guide me regarding the consultation.");
  } else {
    lines.push("I would like to know more about your dental treatments and book a consultation.");
  }

  const text = lines.join("\n");
  const encodedText = encodeURIComponent(text);

  const phoneTarget = isConfigured ? clinicConfig.whatsappNumber : "";
  const url = phoneTarget
    ? `https://wa.me/${phoneTarget}?text=${encodedText}`
    : `https://wa.me/?text=${encodedText}`;

  return { url, text, isConfigured };
}
