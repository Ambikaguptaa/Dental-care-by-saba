import reelClinicImg from "@/assets/reel-clinic-space.jpg";
import reelConsultImg from "@/assets/reel-smile-consult.jpg";
import reelTransfImg from "@/assets/reel-smile-transf.jpg";
import reelTipsImg from "@/assets/reel-smile-tips.jpg";
import { clinicConfig } from "@/config/clinic";

export interface InstagramReelItem {
  id: string;
  title: string;
  category:
    | "Clinic Life"
    | "Smile Tips"
    | "Patient Consultation"
    | "Smile Transformations"
    | "Treatment Insights";
  thumbnail: string;
  /**
   * Optional direct MP4/WebM video URL.
   * If not provided or empty, the player gracefully renders the high-res poster
   * with animated playback indicators and a direct link to the Instagram reel.
   */
  videoUrl?: string;
  instagramUrl: string;
  caption: string;
  duration: string;
  likes: string;
}

/**
 * Data-driven Instagram Reels collection for Dental by Saba (@dentalcareby_drsaba).
 *
 * TO UPDATE WITH LIVE REELS:
 * 1. Set `videoUrl` to an MP4 video or keep empty to use the verified poster.
 * 2. Update `instagramUrl` to point to the exact Reel permalink (e.g., https://www.instagram.com/reel/Cxxxxxx/).
 */
export const instagramReelsData: InstagramReelItem[] = [
  {
    id: "reel-01",
    title: "A Peaceful Space for Your Smile",
    category: "Clinic Life",
    thumbnail: reelClinicImg,
    videoUrl: "",
    instagramUrl: clinicConfig.instagramUrl,
    caption:
      "Step inside Dental by Saba in Mumbai. We designed every curve, neutral tone, and soft lighting element to bring genuine calm to dental visits.",
    duration: "0:28",
    likes: "248",
  },
  {
    id: "reel-02",
    title: "Gentle Consultations & Listening",
    category: "Patient Consultation",
    thumbnail: reelConsultImg,
    videoUrl: "",
    instagramUrl: clinicConfig.instagramUrl,
    caption:
      "Care begins before any treatment starts. Dr. Saba takes time to understand your concerns, habits, and comfort level.",
    duration: "0:42",
    likes: "385",
  },
  {
    id: "reel-03",
    title: "A Confident Smile Journey",
    category: "Smile Transformations",
    thumbnail: reelTransfImg,
    videoUrl: "",
    instagramUrl: clinicConfig.instagramUrl,
    caption:
      "Nothing compares to seeing someone smile with unreserved joy after completing their personalized smile design care.",
    duration: "0:35",
    likes: "512",
  },
  {
    id: "reel-04",
    title: "Everyday Care for Clear Aligners",
    category: "Smile Tips",
    thumbnail: reelTipsImg,
    videoUrl: "",
    instagramUrl: clinicConfig.instagramUrl,
    caption:
      "3 simple daily rituals to keep your clear aligners crystal fresh, transparent, and comfortable while protecting your enamel.",
    duration: "0:30",
    likes: "320",
  },
];
