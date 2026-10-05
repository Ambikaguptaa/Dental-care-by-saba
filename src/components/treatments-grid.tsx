import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { treatmentsData, type TreatmentItem } from "@/data/treatments";
import { useAppointment } from "./appointment-provider";

export function TreatmentsGrid() {
  const { openAppointment } = useAppointment();

  const featuredTreatment = treatmentsData.find((t) => t.featured) ?? treatmentsData[0];
  if (!featuredTreatment) return null;
  const supportingTreatments = treatmentsData.filter((t) => t.id !== featuredTreatment.id);
  const firstSupporting = supportingTreatments[0];

  return (
    <section id="treatments" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles size={14} />
              <span>Aesthetic & Restorative Care</span>
            </div>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Care designed around <em>your smile.</em>
            </h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            Every procedure is approached with gentle pacing, conservative tooth preservation, and
            natural aesthetic balance.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* 1. Large Hero Featured Treatment Card (8 cols) */}
          <div className="lg:col-span-8">
            <FeaturedCard
              treatment={featuredTreatment}
              onQuickBook={() => openAppointment(featuredTreatment.name)}
            />
          </div>

          {/* 2. Supporting Tall Treatment Card (4 cols) */}
          {firstSupporting && (
            <div className="lg:col-span-4">
              <TallCard
                treatment={firstSupporting}
                onQuickBook={() => openAppointment(firstSupporting.name)}
              />
            </div>
          )}

          {/* 3 & 4. Wide Supporting Cards (6 cols each) */}
          {supportingTreatments.slice(1).map((treatment) => (
            <div key={treatment.id} className="lg:col-span-6">
              <WideCard treatment={treatment} onQuickBook={() => openAppointment(treatment.name)} />
            </div>
          ))}
        </div>

        {/* Clinical Safety & Transparency Notice */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Treatment recommendations are tailored during clinical examination. Dental by Saba does
          not perform unverified procedures.
        </p>
      </div>
    </section>
  );
}

function FeaturedCard({
  treatment,
  onQuickBook,
}: {
  treatment: TreatmentItem;
  onQuickBook: () => void;
}) {
  return (
    <div className="group relative flex h-full min-h-[520px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/80 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-12">
      {/* Background Image with Gentle Zoom */}
      <img
        src={treatment.image}
        alt={treatment.name}
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Atmospheric Scrim for Pristine Legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/45 to-foreground/20 transition-opacity duration-300 group-hover:from-foreground/95" />

      {/* Top Category Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {treatment.category}
        </span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.7rem] font-medium text-white/90 backdrop-blur-sm">
          Signature Care
        </span>
      </div>

      {/* Content & Actions */}
      <div className="relative z-10 mt-24">
        <h3 className="font-display text-4xl font-normal text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl lg:text-6xl">
          {treatment.name}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
          {treatment.shortDescription}
        </p>

        {/* Benefits Pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {treatment.benefits.slice(0, 3).map((benefit) => (
            <span
              key={benefit}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
            >
              ✓ {benefit}
            </span>
          ))}
        </div>

        {/* Interactive CTA Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/20 pt-6">
          <Link
            to="/treatments/$slug"
            params={{ slug: treatment.slug }}
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary hover:text-primary active:scale-95"
          >
            <span>{treatment.ctaLabel}</span>
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <button
            onClick={onQuickBook}
            className="text-xs font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Enquire via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

function TallCard({
  treatment,
  onQuickBook,
}: {
  treatment: TreatmentItem;
  onQuickBook: () => void;
}) {
  return (
    <div className="group relative flex h-full min-h-[520px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/80 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-9">
      <img
        src={treatment.image}
        alt={treatment.name}
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-foreground/20 transition-opacity duration-300" />

      {/* Top Category Badge */}
      <div className="relative z-10">
        <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {treatment.category}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-16">
        <h3 className="font-display text-3xl font-normal text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
          {treatment.name}
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-white/80 sm:text-sm">
          {treatment.shortDescription}
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/20 pt-5">
          <Link
            to="/treatments/$slug"
            params={{ slug: treatment.slug }}
            className="inline-flex w-full items-center justify-between rounded-full bg-white/15 px-5 py-3 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-foreground"
          >
            <span>{treatment.ctaLabel}</span>
            <ArrowUpRight size={16} />
          </Link>
          <button
            onClick={onQuickBook}
            className="text-left text-xs font-medium text-white/70 hover:text-white"
          >
            Book consultation →
          </button>
        </div>
      </div>
    </div>
  );
}

function WideCard({
  treatment,
  onQuickBook,
}: {
  treatment: TreatmentItem;
  onQuickBook: () => void;
}) {
  return (
    <div className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/80 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-10">
      <img
        src={treatment.image}
        alt={treatment.name}
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/45 to-foreground/20" />

      {/* Top Category */}
      <div className="relative z-10">
        <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {treatment.category}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-16">
        <h3 className="font-display text-3xl font-normal text-white sm:text-4xl">
          {treatment.name}
        </h3>
        <p className="mt-2.5 max-w-lg text-xs leading-relaxed text-white/80 sm:text-sm">
          {treatment.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5">
          <Link
            to="/treatments/$slug"
            params={{ slug: treatment.slug }}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:translate-x-1"
          >
            <span>{treatment.ctaLabel}</span>
            <ArrowUpRight size={15} />
          </Link>
          <button
            onClick={onQuickBook}
            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground"
          >
            Consult Dr. Saba
          </button>
        </div>
      </div>
    </div>
  );
}
