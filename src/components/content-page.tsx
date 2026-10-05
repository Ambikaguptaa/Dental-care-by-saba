import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import doctorImage from "@/assets/doctor-saba-placeholder.jpg";
import clinicImage from "@/assets/clinic-interior.jpg";
import { Button } from "./ui/button";
import { useAppointment } from "./appointment-provider";
import { clinicConfig } from "@/config/clinic";
import { treatmentsData, getTreatmentBySlug } from "@/data/treatments";
import { reviewsData } from "@/data/reviews";
import { BeforeAfterSlider } from "./before-after-slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function PageIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-intro">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl leading-tight text-foreground sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}

/**
 * About Dr. Saba & The Clinic Approach
 */
export function AboutPage() {
  const { openAppointment } = useAppointment();

  return (
    <>
      <PageIntro
        eyebrow="Our Approach"
        title="Care, with a softer point of view."
        copy="A calm, personal, and beautifully considered dental experience, built around the person in the chair."
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto max-w-md">
            <img
              src={doctorImage}
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-[4/5] rounded-[45%_45%_2.5rem_2.5rem] object-cover shadow-image"
              alt="Editorial portrait representing Dr. Saba"
            />
            <span className="absolute -bottom-4 right-4 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-bold shadow-soft">
              Dr. Saba · Mumbai
            </span>
          </div>

          <div>
            <p className="eyebrow">Meet your dentist</p>
            <h2 className="section-title mt-4">Dr. Saba</h2>
            <p className="mt-2 font-medium tracking-wide text-primary">
              Dentist & Smile Care Professional
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                At Dental by Saba, dental care is approached as a gentle, positive wellness ritual
                rather than a stressful medical appointment. Every patient receives dedicated
                one-on-one time to discuss aesthetic aspirations, functional comfort, and long-term
                oral health.
              </p>
              <p>
                Our philosophy prioritizes conservative, tooth-preserving treatments—using
                contemporary biomimetic ceramics, digital 3D aligner planning, and pH-buffered
                whitening formulations designed to protect natural enamel.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => openAppointment("General Consultation")}
                className="rounded-full shadow-soft"
              >
                <MessageCircle size={18} className="mr-2" />
                Book Consultation with Dr. Saba
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/treatments">Explore Treatments</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Verified clinic listing: Dental Care By Dr. Saba, Mukund Nagar, Dharavi, Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Philosophy & Values */}
      <section className="bg-blush/40 section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow">Our clinic standards</p>
            <h2 className="section-title mt-4">How we approach your visit</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <span className="font-display text-3xl text-primary">01</span>
              <h3 className="mt-4 font-display text-2xl font-semibold">Unrushed Time</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We schedule appointments with generous buffers so you never feel hurried and all
                questions are thoroughly answered.
              </p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <span className="font-display text-3xl text-primary">02</span>
              <h3 className="mt-4 font-display text-2xl font-semibold">Calm Ambience</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Soft lighting, curated acoustics, and serene blush and ivory architectural curves
                designed to dissolve anxiety.
              </p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-card p-8 shadow-soft">
              <span className="font-display text-3xl text-primary">03</span>
              <h3 className="mt-4 font-display text-2xl font-semibold">Conservative Aesthetics</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We preserve healthy natural tooth structure wherever possible, favoring subtle
                harmony over artificial uniformity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Treatments Collection Page
 */
export function TreatmentsPage() {
  const { openAppointment } = useAppointment();

  return (
    <>
      <PageIntro
        eyebrow="Thoughtful Dentistry"
        title="Care designed around your smile."
        copy="Explore our range of aesthetic, orthodontic, and restorative smile services. Each treatment is tailored to your individual bite and natural beauty."
      />

      <section className="section-padding pt-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {treatmentsData.map((t) => (
            <div
              key={t.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-6 top-6 rounded-full bg-background/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-md">
                  {t.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                <div>
                  <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                    {t.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {t.shortDescription}
                  </p>

                  <div className="mt-5 space-y-1.5 border-t border-border/60 pt-4">
                    {t.benefits.slice(0, 3).map((benefit) => (
                      <p
                        key={benefit}
                        className="flex items-center gap-2 text-xs text-foreground/80"
                      >
                        <CheckCircle2 size={13} className="text-primary" />
                        <span>{benefit}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
                  <Link
                    to="/treatments/$slug"
                    params={{ slug: t.slug }}
                    className="inline-flex items-center gap-2 font-semibold text-primary transition-transform hover:translate-x-1"
                  >
                    <span>Explore details</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openAppointment(t.name)}
                    className="rounded-full text-xs"
                  >
                    Consult Dr. Saba
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/**
 * PRIMARY FEATURE 1 — TREATMENT DETAIL EXPERIENCE (/treatments/:slug)
 *
 * Mini luxury landing page with:
 * 1. Premium hero
 * 2. Category & title
 * 3. Strong visual
 * 4. Introduction
 * 5. Why patients consider the treatment (benefits)
 * 6. Treatment process steps
 * 7. What to expect
 * 8. FAQ accordion
 * 9. CTA to contact/book via WhatsApp
 */
export function TreatmentDetailPage({ slug }: { slug: string }) {
  const { openAppointment } = useAppointment();
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return (
      <div className="pt-28 text-center">
        <PageIntro
          eyebrow="Treatment"
          title="Treatment unavailable"
          copy="The requested treatment page could not be found."
        />
        <div className="mt-8 pb-20">
          <Button asChild className="rounded-full">
            <Link to="/treatments">Return to all treatments</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* 1. Large Editorial Hero with Organic Geometry */}
      <section className="relative overflow-hidden bg-hero pt-32 pb-16 lg:min-h-[720px] lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} />
              <span>Back to all treatments</span>
            </Link>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles size={14} />
              <span>{treatment.category}</span>
            </div>

            <h1 className="mt-4 font-display text-4xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {treatment.name}
            </h1>

            <p className="mt-4 font-serif text-lg italic text-foreground/80 sm:text-xl">
              {treatment.editorialSubtitle}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {treatment.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={() => openAppointment(treatment.name)}
                className="rounded-full px-8 shadow-soft"
              >
                <MessageCircle size={18} className="mr-2" />
                Book a Consultation
              </Button>
              <a
                href={clinicConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin size={14} className="text-primary" />
                Visit Clinic in Mumbai
              </a>
            </div>
          </div>

          {/* Hero Visual in Organic Geometry */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[45%_45%_2.5rem_2.5rem] border border-border/80 bg-card shadow-image lg:aspect-[4/5]">
            <img
              src={treatment.image}
              alt={treatment.name}
              className="h-full w-full object-cover object-center"
            />
            <span className="image-note">Dental by Saba · {treatment.category}</span>
          </div>
        </div>
      </section>

      {/* 2. Why Patients Consider This Treatment (Benefits) */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow">Personalized outcomes</p>
            <h2 className="section-title mt-4">Why patients choose this care</h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatment.benefits.map((benefit, i) => (
              <div
                key={benefit}
                className="rounded-3xl border border-border/80 bg-card p-7 shadow-soft"
              >
                <span className="grid size-10 place-items-center rounded-full bg-secondary text-primary font-display font-semibold text-lg">
                  0{i + 1}
                </span>
                <p className="mt-5 text-sm font-semibold leading-relaxed text-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Treatment Process Steps */}
      <section className="bg-blush/40 section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow">Your step-by-step journey</p>
            <h2 className="section-title mt-4">What to expect</h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {treatment.processSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-3xl border border-border/80 bg-card p-7 shadow-soft"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Stage {step.step}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (Accordion) */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="eyebrow">Clear guidance</p>
            <h2 className="section-title mt-4">Frequently asked questions</h2>
          </div>

          <div className="mt-12 rounded-[2.5rem] border border-border/80 bg-card p-6 shadow-soft sm:p-10">
            <Accordion type="single" collapsible className="w-full">
              {treatment.faq.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-display text-xl font-medium text-foreground sm:text-2xl hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 5. Consultation CTA Banner */}
      <section className="cta-panel px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Personalized Smile Care</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Ready to explore {treatment.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Connect with Dr. Saba to discuss whether this treatment aligns with your goals in a
            calm, unpressured atmosphere.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => openAppointment(treatment.name)}
              className="rounded-full px-8 shadow-soft"
            >
              <MessageCircle size={18} className="mr-2" />
              Book Consultation on WhatsApp
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/treatments">All Treatments</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Smile Gallery Page
 */
export function GalleryPage() {
  const { openAppointment } = useAppointment();

  return (
    <>
      <PageIntro
        eyebrow="Smile Gallery"
        title="Real smiles deserve real stories."
        copy="Explore our interactive smile alignment demonstration below. Authentic clinic-approved transformations will be published here with verified patient consent."
      />

      <section className="section-padding pt-4">
        <div className="mx-auto max-w-5xl">
          <BeforeAfterSlider />

          <div className="mt-16 text-center">
            <h3 className="font-display text-3xl text-foreground">
              Interested in your own smile journey?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Dr. Saba provides unhurried, personalized smile consultations to understand your
              individual goals.
            </p>
            <div className="mt-6">
              <Button
                size="lg"
                onClick={() => openAppointment("Smile Design & Aesthetics")}
                className="rounded-full shadow-soft"
              >
                <MessageCircle size={18} className="mr-2" />
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Patient Reviews Page
 */
export function ReviewsPage() {
  const { openAppointment } = useAppointment();

  return (
    <>
      <PageIntro
        eyebrow="Patient Stories"
        title="Trust, in their own words."
        copy="Authentic feedback and kind words shared by patients who experienced our calm, gentle approach to dental care in Mumbai."
      />

      <section className="section-padding pt-4">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {reviewsData.map((rev) => (
            <article
              key={rev.id}
              className="flex flex-col justify-between rounded-[2.5rem] border border-border/80 bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <p className="text-accent text-lg">{"★".repeat(rev.rating)}</p>
                <blockquote className="mt-5 font-display text-2xl leading-relaxed text-foreground">
                  “{rev.story}”
                </blockquote>
              </div>
              <div className="mt-8 border-t border-border/60 pt-5">
                <p className="font-semibold text-foreground">{rev.name}</p>
                <p className="text-xs text-muted-foreground">{rev.treatment}</p>
                <p className="mt-1 text-xs font-medium text-primary">{rev.source}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" onClick={() => openAppointment()} className="rounded-full shadow-soft">
            <MessageCircle size={18} className="mr-2" />
            Book Your Visit
          </Button>
        </div>
      </section>
    </>
  );
}

/**
 * Contact & Location Page
 */
export function ContactPage() {
  const { openAppointment } = useAppointment();

  return (
    <>
      <PageIntro
        eyebrow="Visit Dental by Saba"
        title="Let’s plan your visit."
        copy="Located in Mumbai, our clinic is open for pre-booked consultations to ensure every patient experiences calm, unhurried attention."
      />

      <section className="section-padding pt-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          {/* Clinic Details Card */}
          <div className="rounded-[2.5rem] border border-border/80 bg-card p-8 shadow-soft sm:p-12">
            <h2 className="font-display text-4xl text-foreground">Clinic Information</h2>
            <p className="mt-2 text-sm text-muted-foreground">{clinicConfig.legalName}</p>

            <div className="mt-8 space-y-6 text-sm text-foreground">
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-1 leading-relaxed">{clinicConfig.address}</p>
                  <a
                    href={clinicConfig.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
                    Clinic Hours
                  </p>
                  <p className="mt-1 font-medium">{clinicConfig.openingHours}</p>
                  <p className="text-xs text-muted-foreground">{clinicConfig.closedOn}</p>
                  <p className="text-xs text-muted-foreground mt-1">{clinicConfig.scheduleNote}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
                    Consultations
                  </p>
                  <button
                    onClick={() => openAppointment()}
                    className="mt-1 font-semibold text-primary hover:underline"
                  >
                    Enquire on WhatsApp →
                  </button>
                  <p className="text-xs text-muted-foreground">Prefills your message directly</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <Instagram size={20} />
                </span>
                <div>
                  <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
                    Instagram
                  </p>
                  <a
                    href={clinicConfig.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    {clinicConfig.instagramHandle} →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
                    Telephone
                  </p>
                  <p className="mt-1">{clinicConfig.phone}</p>
                  <p className="text-xs text-muted-foreground">Verified upon confirmation</p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-border/80 pt-6">
              <Button
                size="lg"
                onClick={() => openAppointment()}
                className="w-full rounded-full shadow-soft sm:w-auto"
              >
                <MessageCircle size={18} className="mr-2" />
                Book Consultation Now
              </Button>
            </div>
          </div>

          {/* Visual & Map Navigation Card */}
          <div className="flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/80 bg-card shadow-soft">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={clinicImage}
                loading="lazy"
                className="h-full w-full object-cover"
                alt="Dental by Saba calm boutique clinic interior"
              />
              <span className="image-note">Dharavi, Mumbai Clinic Concept</span>
            </div>

            <div className="p-8 sm:p-10">
              <h3 className="font-display text-3xl text-foreground">
                Easy Directions to the Clinic
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Dental Care By Dr. Saba is located in Mukund Nagar, Dharavi, Mumbai, opposite the
                New ONGC Tower with convenient accessibility from central Mumbai transit hubs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full shadow-soft">
                  <a href={clinicConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin size={17} className="mr-2" />
                    Get Directions on Google Maps
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => openAppointment()}
                  className="rounded-full"
                >
                  Message Clinic
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
