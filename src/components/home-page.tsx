import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type PointerEvent } from "react";

import heroImage from "@/assets/hero-smile.jpg";
import doctorImage from "@/assets/doctor-saba-placeholder.jpg";
import clinicImage from "@/assets/clinic-interior.jpg";

import { Button } from "./ui/button";
import { Reveal } from "./section-reveal";
import { useAppointment } from "./appointment-provider";
import { clinicConfig } from "@/config/clinic";
import { reviewsData, trustPillars } from "@/data/reviews";
import { TreatmentsGrid } from "./treatments-grid";
import { BeforeAfterSlider } from "./before-after-slider";
import { InstagramReels } from "./instagram-reels";

const trustItems = [
  { icon: Heart, label: "Gentle approach" },
  { icon: UserRound, label: "Personalised care" },
  { icon: Sparkles, label: "Modern dentistry" },
  { icon: Stethoscope, label: "Patient first" },
];

const journeySteps = [
  {
    step: "01",
    title: "Tell us what you need",
    desc: "A calm initial conversation about your concerns, comfort level, and dental goals.",
  },
  {
    step: "02",
    title: "Meet Dr. Saba",
    desc: "An unhurried clinical assessment with clear explanations and digital imaging.",
  },
  {
    step: "03",
    title: "Understand your options",
    desc: "Transparent discussion of conservative, long-term options without pressure.",
  },
  {
    step: "04",
    title: "Begin your care",
    desc: "Gentle treatment pacing in a peaceful clinic environment designed for comfort.",
  },
];

export function HomePage() {
  const { openAppointment } = useAppointment();
  const reduced = useReducedMotion();
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const activeReview = reviewsData[activeReviewIndex] ??
    reviewsData[0] ?? {
      id: "default",
      name: "Verified Patient",
      tag: "Clinic Patient",
      rating: 5,
      treatment: "Personalised Care",
      story: "Gentle, thoughtful dental care designed around comfort.",
      source: "Verified Clinic Feedback",
    };

  return (
    <>
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="hero-grid relative min-h-[860px] overflow-hidden bg-hero px-5 pb-16 pt-32 sm:px-8 lg:min-h-[820px] lg:px-12 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative z-10 pt-4 lg:pt-0">
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="eyebrow"
            >
              Dental Care • Smile Aesthetics • Personalized Care
            </motion.p>
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.75 }}
              className="mt-5 max-w-2xl font-display text-[clamp(3.3rem,6.8vw,6.5rem)] leading-[0.92] text-foreground"
            >
              Where your smile meets <em className="font-normal text-primary">gentle care.</em>
            </motion.h1>
            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Thoughtful dental care designed around your comfort, confidence, and natural smile
              harmony in Mumbai.
            </motion.p>
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <Button
                size="lg"
                onClick={() => openAppointment()}
                className="rounded-full px-7 shadow-soft transition-all hover:shadow-lg"
              >
                <span>Book a Smile Consultation</span>
                <ArrowRight size={17} className="ml-1.5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href="#treatments">Explore Treatments</a>
              </Button>
            </motion.div>
          </div>

          {/* Right Visual with Subtle 3D Sculpture & Organic Framing */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
            className="relative mx-auto h-[520px] w-full max-w-[620px] sm:h-[620px]"
          >
            <div className="absolute inset-x-[6%] inset-y-0 overflow-hidden rounded-[48%_48%_24%_24%/34%_34%_18%_18%] shadow-image">
              <img
                src={heroImage}
                width={1280}
                height={1600}
                className="h-full w-full object-cover object-center"
                alt="Woman with a natural, confident smile in warm soft lighting"
              />
            </div>
            {/* Floating Soft Badge */}
            <div className="absolute bottom-6 right-0 rounded-full border border-background/80 bg-background/90 px-5 py-3 text-xs font-semibold text-foreground shadow-soft backdrop-blur-md">
              Gentle care, beautifully considered
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#welcome"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2.5 text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground lg:flex"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="animate-bounce-soft" size={14} />
        </a>
      </section>

      {/* =========================================================================
          2. SOFT TRUST STRIP
          ========================================================================= */}
      <section className="border-y border-border/80 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border/80 md:grid-cols-4 md:divide-y-0">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 px-4 py-6 text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm"
            >
              <Icon size={18} className="text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          3. WELCOME / PHILOSOPHY SECTION
          ========================================================================= */}
      <section id="welcome" className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="eyebrow">Welcome to Dental by Saba</p>
            <h2 className="section-title mt-4">
              Where dental care meets calm, confidence <em>and care.</em>
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              Every smile is treated individually. Our approach brings together thoughtful care,
              modern techniques, and a comfortable clinic environment in Mumbai designed to make
              every visit feel completely at ease.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/about">
                  Discover our approach <ArrowRight size={17} className="ml-1.5" />
                </Link>
              </Button>
              <Button onClick={() => openAppointment()} className="rounded-full">
                Plan your visit
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[3rem_3rem_1.5rem_1.5rem] shadow-soft">
              <img
                src={clinicImage}
                loading="lazy"
                width={1600}
                height={1008}
                className="aspect-[4/3] h-full w-full object-cover"
                alt="Dental by Saba calm boutique clinic interior"
              />
              <span className="image-note">Boutique Clinic Environment · Mumbai</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          4. ABOUT DR. SABA
          ========================================================================= */}
      <section className="bg-blush/60 section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <TiltImage src={doctorImage} alt="Editorial portrait representing Dr. Saba" />
            <p className="image-note static mt-4 text-center">
              Placeholder portrait · Clinic profile verified for Mumbai practice
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">A personal approach</p>
            <h2 className="section-title mt-4">
              Meet <em>Dr. Saba</em>
            </h2>
            <p className="mt-6 font-display text-2xl text-foreground">Dr. Saba</p>
            <p className="mt-1 text-sm font-semibold tracking-wide text-primary">
              Dentist & Smile Care Professional
            </p>
            <p className="body-copy mt-6">
              Care begins with listening. Dr. Saba takes time to understand your lifestyle, tooth
              history, and aesthetic goals before recommending any procedure. With gentle pacing and
              transparent communication, dental care becomes a positive self-care ritual.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/about">
                  Learn more about Dr. Saba <ArrowRight size={17} className="ml-1" />
                </Link>
              </Button>
              <Button
                onClick={() => openAppointment("General Consultation")}
                className="rounded-full"
              >
                Book with Dr. Saba
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          5. PRIMARY FEATURE 1 — TREATMENTS EXPERIENCE (ASYMMETRIC EDITORIAL GRID)
          ========================================================================= */}
      <TreatmentsGrid />

      {/* =========================================================================
          6. PRIMARY FEATURE 7 — BEFORE / AFTER SMILE RESULTS
          ========================================================================= */}
      <section className="bg-blush/40 section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Smile gallery</p>
              <h2 className="section-title mt-4">
                Real smiles, <em>shared with care.</em>
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/gallery">
                View smile gallery <ArrowRight size={16} className="ml-1.5" />
              </Link>
            </Button>
          </Reveal>

          {/* Interactive Before & After Slider */}
          <div className="mt-12">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PRIMARY FEATURE 6 — WHY DENTAL BY SABA
          ========================================================================= */}
      <section className="bg-ink text-ink-foreground section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow text-accent">Why choose us</p>
            <h2 className="section-title mt-4 max-w-3xl text-ink-foreground">
              Care that begins <em>with listening.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid divide-y divide-ink-border md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
            {trustPillars.map((p, i) => (
              <Reveal
                key={p.number}
                delay={i * 0.08}
                className="px-0 py-8 first:pl-0 last:pr-0 md:px-8 md:py-2"
              >
                <span className="font-display text-4xl text-accent">{p.number}</span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. PATIENT JOURNEY SECTION
          ========================================================================= */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Your visit</p>
            <h2 className="section-title mt-4">
              A gentle path, <em>clearly explained.</em>
            </h2>
          </Reveal>
          <div className="journey-line mt-14 grid gap-8 md:grid-cols-4">
            {journeySteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08} className="relative">
                <span className="relative z-10 grid size-12 place-items-center rounded-full border border-primary bg-background font-display text-lg font-bold text-primary shadow-sm">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. PRIMARY FEATURE 3 & 4 — INSTAGRAM REELS & SOCIAL CAROUSEL
          ========================================================================= */}
      <InstagramReels />

      {/* =========================================================================
          10. PRIMARY FEATURE 8 — CLINIC EXPERIENCE
          ========================================================================= */}
      <section className="relative min-h-[640px] overflow-hidden">
        <img
          src={clinicImage}
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
          alt="Premium dental clinic interior concept in Mumbai"
        />
        <div className="absolute inset-0 bg-image-overlay" />
        <Reveal className="relative mx-auto flex min-h-[640px] max-w-7xl items-end px-6 pb-16 sm:px-10">
          <div className="max-w-2xl text-white">
            <p className="eyebrow text-white/80">The clinic experience</p>
            <h2 className="mt-4 font-display text-5xl leading-tight sm:text-7xl">
              A softer space for better dental experiences.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                Calm Ambience
              </span>
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                Gentle Pacing
              </span>
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                Modern Dentistry
              </span>
            </div>
            <p className="mt-4 text-xs text-white/70">
              Dental Care By Dr. Saba · Mukund Nagar, Dharavi, Mumbai
            </p>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          11. PATIENT REVIEWS & STORIES
          ========================================================================= */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="eyebrow">Patient stories</p>
            <h2 className="section-title mt-4">
              Kind words from <em>our patients.</em>
            </h2>
          </Reveal>
          <div className="mt-12 rounded-[2.5rem] border border-border/80 bg-card p-8 shadow-soft sm:p-14">
            <div className="flex justify-center gap-1 text-accent">
              {"★".repeat(activeReview.rating)}
            </div>
            <blockquote className="mx-auto mt-6 max-w-3xl font-display text-2xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
              “{activeReview.story}”
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-foreground">
              {activeReview.name} ·{" "}
              <span className="font-normal text-muted-foreground">{activeReview.treatment}</span>
            </p>
            <p className="mt-1 text-xs text-primary font-medium">{activeReview.source}</p>

            <div className="mt-8 flex justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                aria-label="Previous review"
                className="rounded-full"
                onClick={() =>
                  setActiveReviewIndex(
                    (activeReviewIndex + reviewsData.length - 1) % reviewsData.length,
                  )
                }
              >
                <ChevronLeft size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                aria-label="Next review"
                className="rounded-full"
                onClick={() => setActiveReviewIndex((activeReviewIndex + 1) % reviewsData.length)}
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. FINAL CONSULTATION CTA
          ========================================================================= */}
      <section className="cta-panel px-6 py-24 text-center">
        <Reveal>
          <p className="eyebrow">Whenever you’re ready</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Your next smile story starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Take the first step towards personalised, comfortable dental care tailored to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button
              size="lg"
              onClick={() => openAppointment()}
              className="rounded-full px-8 shadow-soft transition-all hover:shadow-lg"
            >
              <MessageCircle size={18} className="mr-2" />
              Book a Consultation
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href={clinicConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={17} className="mr-2 text-primary" />
                Get Directions
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* =========================================================================
          13. CONTACT & LOCATION SUMMARY
          ========================================================================= */}
      <section className="border-t border-border/80 bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <MapPin size={19} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Location
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{clinicConfig.address}</p>
              <a
                href={clinicConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                Directions on Google Maps →
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <Clock size={19} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Hours
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {clinicConfig.openingHours}
              </p>
              <p className="text-xs text-muted-foreground">{clinicConfig.closedOn}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <MessageCircle size={19} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Consultations
              </p>
              <button
                onClick={() => openAppointment()}
                className="mt-1 text-sm font-semibold text-primary hover:underline"
              >
                Enquire via WhatsApp →
              </button>
              <p className="text-xs text-muted-foreground">{clinicConfig.scheduleNote}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <Phone size={19} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Phone
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{clinicConfig.phone}</p>
              <p className="text-xs text-muted-foreground">Verified upon confirmation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TiltImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -5}deg`);
    el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 5}deg`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--rx", "0deg");
        ref.current?.style.setProperty("--ry", "0deg");
      }}
      className="doctor-tilt relative mx-auto max-w-md"
    >
      <img
        src={src}
        loading="lazy"
        width={1200}
        height={1504}
        className="aspect-[4/5] w-full rounded-[46%_46%_2rem_2rem] object-cover shadow-image"
        alt={alt}
      />
      <span className="absolute -bottom-5 right-4 rounded-full border border-background/80 bg-background/95 px-5 py-3 text-xs font-bold shadow-soft backdrop-blur-md animate-float">
        Personalised dental care
      </span>
    </div>
  );
}
