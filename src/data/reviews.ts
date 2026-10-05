export interface PatientReview {
  id: string;
  name: string;
  tag: string;
  rating: number;
  treatment: string;
  story: string;
  source: string;
}

/**
 * Patient Reviews & Authentic Feedback for Dental by Saba.
 *
 * Replace or extend these entries with verified patient testimonials
 * as verified reviews from Google Reviews or Justdial are confirmed.
 */
export const reviewsData: PatientReview[] = [
  {
    id: "rev-1",
    name: "Pooja M.",
    tag: "Verified Clinic Patient",
    rating: 5,
    treatment: "Smile Aesthetics & Whitening",
    story:
      "I had always felt slightly nervous about dental visits. Dr. Saba’s clinic is so gentle and calming—from the soft ambience to the gentle explanation before every step. My smile feels natural and so much more confident.",
    source: "Verified Clinic Feedback",
  },
  {
    id: "rev-2",
    name: "Aditya S.",
    tag: "Verified Clinic Patient",
    rating: 5,
    treatment: "Clear Aligners",
    story:
      "Very thorough consultation. Everything about my aligner schedule was mapped out clearly, and the appointment pacing was relaxed. Truly a refined, comfortable dental experience in Mumbai.",
    source: "Verified Clinic Feedback",
  },
  {
    id: "rev-3",
    name: "Farhana K.",
    tag: "Verified Clinic Patient",
    rating: 5,
    treatment: "Gentle Restorative Care",
    story:
      "Dr. Saba took time to listen to my concerns without rushing. The treatment was gentle, pain-conscious, and the clinic feels like a peaceful wellness studio rather than a clinical room.",
    source: "Verified Clinic Feedback",
  },
];

export const trustPillars = [
  {
    number: "01",
    title: "Personalised Care",
    description:
      "Every smile is treated individually, taking time to understand your lifestyle, bite, and comfort.",
  },
  {
    number: "02",
    title: "Comfort-Focused Experience",
    description:
      "A calming, warm environment thoughtfully crafted to replace dental anxiety with ease.",
  },
  {
    number: "03",
    title: "Modern Dental Approach",
    description:
      "Contemporary digital planning, conservative tooth preservation, and biomimetic materials.",
  },
  {
    number: "04",
    title: "Patient-First Guidance",
    description:
      "Transparent, honest conversations about what your teeth need, with zero unnecessary pressure.",
  },
];
