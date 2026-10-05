import smileDesignImg from "@/assets/treatment-smile.jpg";
import alignersImg from "@/assets/treatment-aligners.jpg";
import heroSmileImg from "@/assets/hero-smile.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";

export interface TreatmentItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  editorialSubtitle: string;
  description: string;
  image: string;
  benefits: string[];
  processSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  ctaLabel: string;
  featured: boolean;
  layoutSpan: "large" | "tall" | "wide" | "normal";
}

/**
 * Data-driven Treatments Collection.
 *
 * To add a new treatment in the future:
 * Simply append an object with the TreatmentItem schema to this array.
 * The homepage grid, treatments discovery section, and dynamic `/treatments/:slug`
 * pages will automatically update.
 */
export const treatmentsData: TreatmentItem[] = [
  {
    id: "smile-design",
    slug: "smile-design",
    name: "Smile Design & Aesthetics",
    category: "Cosmetic Dentistry",
    shortDescription:
      "A considered, artistic approach to facial harmony, tooth balance, and natural luminous radiance.",
    editorialSubtitle:
      "Tailored contouring designed around your facial proportions and natural elegance.",
    description:
      "Digital smile analysis combined with delicate, minimal-intervention aesthetics. Rather than uniform, artificial veneers, we sculpt harmony that compliments your unique expression, lip line, and skin tone.",
    image: smileDesignImg,
    benefits: [
      "Custom facial harmony mapping",
      "Preserves natural healthy tooth structure",
      "Gentle, step-by-step preview before placement",
      "Natural shade blending tailored to your features",
    ],
    processSteps: [
      {
        step: "01",
        title: "Smile Analysis & Consultation",
        desc: "We listen to your smile goals and map your lip line, bite, and facial proportions.",
      },
      {
        step: "02",
        title: "Aesthetic Blueprint",
        desc: "A delicate preview model allows you to visualize and discuss the balanced outcome.",
      },
      {
        step: "03",
        title: "Artisanal Execution",
        desc: "Gentle preparation and custom shade characterization with comfort-focused care.",
      },
      {
        step: "04",
        title: "Long-term Smile Wellness",
        desc: "Personalized care guidance to protect your natural luster for years to come.",
      },
    ],
    faq: [
      {
        q: "What is smile design?",
        a: "Smile design is a comprehensive aesthetic approach that evaluates your tooth shape, symmetry, shade, and gum line in relation to your unique facial features.",
      },
      {
        q: "Is the procedure painful?",
        a: "We prioritize gentle dentistry. Most aesthetic evaluations and preparations involve minimal discomfort with careful local anesthesia and comforting pacing.",
      },
      {
        q: "How long does a smile transformation typically take?",
        a: "Depending on your specific goals, treatments range from 2 to 4 gentle appointments spaced over a few weeks.",
      },
    ],
    ctaLabel: "Explore treatment →",
    featured: true,
    layoutSpan: "large",
  },
  {
    id: "clear-aligners",
    slug: "clear-aligners",
    name: "Clear Aligners",
    category: "Orthodontics",
    shortDescription:
      "Discreet, removable clear aligners planned digitally to gently guide teeth into balanced alignment.",
    editorialSubtitle:
      "A virtually invisible pathway to a confident, balanced bite without metal brackets.",
    description:
      "Custom-crafted transparent aligners gently straighten teeth with maximum discretion and everyday flexibility. Designed for adults seeking orthodontic balance without disrupting professional life or daily rituals.",
    image: alignersImg,
    benefits: [
      "Nearly invisible, comfortable medical-grade resin",
      "Removable for effortless dining and oral hygiene",
      "Predictable 3D digital progress tracking",
      "No dietary restrictions or sharp wire brackets",
    ],
    processSteps: [
      {
        step: "01",
        title: "Digital 3D Scan",
        desc: "Comfortable optical impression capturing every detail of your bite.",
      },
      {
        step: "02",
        title: "Custom Movement Mapping",
        desc: "Dr. Saba crafts a calibrated movement trajectory for optimal balance.",
      },
      {
        step: "03",
        title: "Aligner Delivery & Guidance",
        desc: "Receive your tailored aligner trays with clear wear instructions.",
      },
      {
        step: "04",
        title: "Progress Check-ins",
        desc: "Relaxed, periodic assessments ensuring your teeth move comfortably.",
      },
    ],
    faq: [
      {
        q: "How many hours a day must aligners be worn?",
        a: "For optimal results, aligners should be worn 20 to 22 hours daily, removing them only for meals and brushing.",
      },
      {
        q: "Are clear aligners suitable for all orthodontic needs?",
        a: "Clear aligners treat mild to moderate crowding, spacing, and bite irregularities. A clinical evaluation confirms your suitability.",
      },
      {
        q: "How do I keep my aligners fresh?",
        a: "Rinse them with cool water and gently brush with a soft toothbrush daily, avoiding hot water.",
      },
    ],
    ctaLabel: "Discover aligners →",
    featured: false,
    layoutSpan: "tall",
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    name: "Gentle Teeth Whitening",
    category: "Cosmetic Dentistry",
    shortDescription:
      "A calibrated whitening treatment formulated to lift surface discolouration while protecting delicate enamel.",
    editorialSubtitle: "Safe, luminous brightness crafted to reveal your freshest natural smile.",
    description:
      "Professional whitening tailored specifically to tooth sensitivity profiles. Utilizing buffered remineralizing agents, we lift organic coffee, tea, and aging stains to restore an effortlessly vibrant smile.",
    image: heroSmileImg,
    benefits: [
      "Formulated for reduced tooth sensitivity",
      "Remineralizing agents protect enamel luster",
      "Uniform, natural shade improvement without stark chalkiness",
      "Custom take-home touch-up guidance",
    ],
    processSteps: [
      {
        step: "01",
        title: "Enamel Assessment",
        desc: "Evaluation of staining patterns and gum health before whitening.",
      },
      {
        step: "02",
        title: "Protective Barrier",
        desc: "Gentle gingival protection to shield delicate gums from contact.",
      },
      {
        step: "03",
        title: "Targeted Brightening",
        desc: "Application of pH-balanced whitening gel in relaxing clinic comfort.",
      },
      {
        step: "04",
        title: "Gloss & Desensitizing Polish",
        desc: "Finishing enamel shield application to lock in results and reduce sensitivity.",
      },
    ],
    faq: [
      {
        q: "Will whitening cause tooth sensitivity?",
        a: "Our clinic uses gentle desensitizing formulas. Any minor sensitivity is temporary and typically subsides within 24 hours.",
      },
      {
        q: "How many shades brighter can my teeth get?",
        a: "Most patients experience 3 to 6 shades of improvement, tailored to what looks organically vibrant for their complexion.",
      },
      {
        q: "How can I maintain my white smile?",
        a: "Rinsing after dark beverages and periodic maintenance touch-ups keep your smile luminous.",
      },
    ],
    ctaLabel: "See how it works →",
    featured: false,
    layoutSpan: "normal",
  },
  {
    id: "restorative-care",
    slug: "restorative-care",
    name: "Restorative Care & Biomimetic Crowns",
    category: "Restorative Dentistry",
    shortDescription:
      "Thoughtful restorations blending durability, tooth preservation, and seamless ceramic naturalness.",
    editorialSubtitle: "Rebuilding strength and chewing comfort while mirroring nature's anatomy.",
    description:
      "From aesthetic tooth-coloured inlays to custom monolithic ceramic crowns, our restorative treatments focus on conserving healthy tooth structure while restoring painless bite function and natural translucency.",
    image: clinicImg,
    benefits: [
      "Metal-free, biocompatible premium ceramics",
      "Biomimetic bonding that mimics natural dentin elasticity",
      "Precision margin fits that protect gums from inflammation",
      "Long-lasting functional strength and seamless color match",
    ],
    processSteps: [
      {
        step: "01",
        title: "Diagnostic Mapping",
        desc: "Gentle examination of structural compromise and bite dynamics.",
      },
      {
        step: "02",
        title: "Conservative Tooth Prep",
        desc: "Preserving as much natural healthy enamel as possible.",
      },
      {
        step: "03",
        title: "Custom Ceramic Milling",
        desc: "Crafted to replicate the subtle gradients of neighboring teeth.",
      },
      {
        step: "04",
        title: "Acoustic & Bite Harmony",
        desc: "Micro-calibrated seating ensuring absolute chewing comfort.",
      },
    ],
    faq: [
      {
        q: "When is a crown necessary versus a filling?",
        a: "Crowns protect teeth with extensive fracture, deep decay, or post-endodontic treatment where standard fillings cannot provide adequate structural support.",
      },
      {
        q: "Will my restorative crown look fake?",
        a: "No. We utilize multi-layered all-ceramic materials that replicate natural enamel translucency and light reflection.",
      },
      {
        q: "How do I care for restored teeth?",
        a: "Brush, floss, and maintain regular professional check-ups just like natural teeth.",
      },
    ],
    ctaLabel: "Learn about restorative care →",
    featured: false,
    layoutSpan: "wide",
  },
];

export function getTreatmentBySlug(slug: string): TreatmentItem | undefined {
  return treatmentsData.find((t) => t.slug === slug);
}
