import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle, X, MapPin, Clock } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AppointmentProvider, useAppointment } from "./appointment-provider";
import { Button } from "./ui/button";
import { clinicConfig, buildWhatsAppUrl } from "@/config/clinic";

export type NavItem =
  | {
      label: string;
      to: "/" | "/about" | "/treatments" | "/gallery" | "/reviews" | "/contact";
      isExternal?: false;
    }
  | {
      label: string;
      href: string;
      isExternal: true;
    };

export const navigationItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Smile Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Instagram", href: clinicConfig.instagramUrl, isExternal: true },
  { label: "Contact", to: "/contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <AppointmentProvider>
      <SiteChrome>{children}</SiteChrome>
    </AppointmentProvider>
  );
}

function SiteChrome({ children }: { children: ReactNode }) {
  const { openAppointment } = useAppointment();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setMenu(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleFloatingWhatsApp = () => {
    const { url, isConfigured } = buildWhatsAppUrl();
    if (isConfigured) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      // If clinic number is pending verification, open the rich consultation modal
      openAppointment();
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      {/* Sticky Header with Smooth Blur & Transition */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "px-3 pt-3 sm:px-6" : "px-3 pt-4 sm:px-8 sm:pt-6"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "h-16 border-border/80 bg-background/90 shadow-nav backdrop-blur-xl"
              : "h-20 border-transparent bg-background/35 backdrop-blur-sm"
          }`}
          aria-label="Main navigation"
        >
          {/* Brand Logo & Descriptor */}
          <Link to="/" className="group leading-none">
            <span className="block font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
              {clinicConfig.name}
            </span>
            <span className="mt-0.5 block text-[0.58rem] font-bold uppercase tracking-widest text-muted-foreground">
              {clinicConfig.descriptor}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navigationItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link font-medium tracking-wide transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="nav-link font-medium tracking-wide transition-colors"
                  activeProps={{ className: "nav-link text-primary font-semibold" }}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Desktop Consultation CTA */}
          <div className="hidden lg:block">
            <Button
              size="sm"
              onClick={() => openAppointment()}
              className="rounded-full px-5 text-xs font-semibold shadow-soft transition-all hover:shadow-md"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            className="grid size-11 place-items-center rounded-full border border-border bg-background/80 shadow-sm transition-all hover:bg-muted active:scale-95 lg:hidden"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-label="Toggle navigation menu"
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-7xl rounded-3xl border border-border bg-background/95 p-6 shadow-modal backdrop-blur-2xl lg:hidden"
            >
              <div className="grid gap-1">
                {navigationItems.map((item) =>
                  item.isExternal ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenu(false)}
                      className="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted active:bg-secondary"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setMenu(false)}
                      className="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted active:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Button
                  className="w-full rounded-full py-6 text-sm font-semibold"
                  onClick={() => {
                    setMenu(false);
                    openAppointment();
                  }}
                >
                  <MessageCircle size={18} className="mr-2" />
                  Book Smile Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Page Content */}
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>

      {/* Global Footer */}
      <Footer onBookAppointment={() => openAppointment()} />

      {/* Primary Feature 11 — Floating WhatsApp Button */}
      <button
        onClick={handleFloatingWhatsApp}
        className="group fixed bottom-6 right-6 z-40 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-[#25D366] px-4 text-white shadow-xl transition-all duration-300 hover:gap-2.5 hover:pr-6 hover:shadow-2xl active:scale-95"
        aria-label="Chat with Dental by Saba on WhatsApp"
      >
        <MessageCircle size={24} className="shrink-0" />
        <span className="max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-28 group-hover:opacity-100">
          Chat with us
        </span>
      </button>
    </div>
  );
}

function Footer({ onBookAppointment }: { onBookAppointment: () => void }) {
  return (
    <footer className="border-t border-border/80 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr] lg:px-12">
        {/* Brand identity */}
        <div>
          <p className="font-display text-3xl font-semibold tracking-tight text-white">
            {clinicConfig.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-accent">
            {clinicConfig.descriptor}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            A softer, more considered approach to dental and smile aesthetic care in Mumbai. Every
            smile is treated individually with gentle pacing and modern tooth conservation.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button
              size="sm"
              onClick={onBookAppointment}
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Book Consultation
            </Button>
            <a
              href={clinicConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-full border border-ink-border text-ink-muted transition-colors hover:border-white hover:text-white"
              aria-label="Follow Dental by Saba on Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <p className="footer-title">Navigation</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-ink-muted">
            {navigationItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Verified Clinic Contact & Hours */}
        <div>
          <p className="footer-title">Visit & Connect</p>
          <div className="mt-5 space-y-3.5 text-sm text-ink-muted">
            <p className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-1 shrink-0 text-accent" />
              <span>{clinicConfig.address}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock size={16} className="shrink-0 text-accent" />
              <span>{clinicConfig.openingHours}</span>
            </p>
            <p className="text-xs text-ink-muted pl-6">{clinicConfig.closedOn} · By appointment</p>
            <div className="pt-2">
              <a
                href={clinicConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-ink-border px-6 py-6 text-xs text-ink-muted sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <span>
          © {new Date().getFullYear()} {clinicConfig.legalName}. All rights reserved.
        </span>
        <span>Gentle Care. Confident Smiles. · Mumbai</span>
      </div>
    </footer>
  );
}
