import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Check, Copy, MessageCircle, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicConfig, buildWhatsAppUrl } from "@/config/clinic";
import { treatmentsData } from "@/data/treatments";

export interface ConsultationFormValues {
  name: string;
  phone: string;
  treatment: string;
  preferredTime: string;
  message: string;
}

export interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialTreatment?: string | undefined;
}

export function ConsultationModal({
  open,
  onOpenChange,
  initialTreatment,
}: ConsultationModalProps) {
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const { register, handleSubmit, reset, setValue } = useForm<ConsultationFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      treatment: initialTreatment || "Smile Design & Aesthetics",
      preferredTime: "Morning (11:00 AM – 2:00 PM)",
      message: "",
    },
  });

  useEffect(() => {
    if (initialTreatment) {
      setValue("treatment", initialTreatment);
    }
  }, [initialTreatment, setValue]);

  const onSubmit = (data: ConsultationFormValues) => {
    const { url, text, isConfigured } = buildWhatsAppUrl({
      name: data.name,
      phone: data.phone,
      treatment: data.treatment,
      preferredTime: data.preferredTime,
      message: data.message,
    });

    // Attempt to open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }

    setSubmittedMessage(text);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmittedMessage(null);
      setCopied(false);
      reset();
    }, 250);
  };

  const handleCopy = () => {
    if (submittedMessage) {
      navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-md transition-all duration-300" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 max-h-[92vh] w-[calc(100%-1.75rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[2.5rem] border border-border/80 bg-card p-6 shadow-modal focus:outline-none sm:p-10"
          aria-describedby="consultation-description"
        >
          {/* Close button */}
          <Dialog.Close
            onClick={handleClose}
            className="absolute right-5 top-5 rounded-full p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            aria-label="Close consultation modal"
          >
            <X size={20} />
          </Dialog.Close>

          {submittedMessage ? (
            <div className="py-4 text-center">
              <span className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-secondary text-primary">
                <Check size={28} />
              </span>
              <Dialog.Title className="font-display text-4xl text-foreground sm:text-5xl">
                Ready for WhatsApp
              </Dialog.Title>
              <p
                id="consultation-description"
                className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base"
              >
                We opened WhatsApp with your enquiry prefilled. If it didn&apos;t open
                automatically, you can copy the message or use the button below.
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-background p-4 text-left">
                <div className="flex items-center justify-between pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <span>Prepared Message</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-primary hover:underline"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-foreground/90">
                  {submittedMessage}
                </pre>
              </div>

              {!clinicConfig.whatsappNumber ||
              clinicConfig.whatsappNumber === "REPLACE_WITH_VERIFIED_NUMBER" ? (
                <p className="mt-4 rounded-xl bg-blush/60 px-4 py-2.5 text-xs text-muted-foreground">
                  <strong>Notice:</strong> Centralized WhatsApp number placeholder is active. Add
                  Dr. Saba&apos;s verified clinic phone in{" "}
                  <code className="text-foreground">src/config/clinic.ts</code> for direct one-tap
                  routing.
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button
                  onClick={() => {
                    const { url } = buildWhatsAppUrl();
                    window.open(url, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-[#25D366] text-white hover:bg-[#20ba59]"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Re-open WhatsApp
                </Button>
                <Button variant="outline" onClick={handleClose}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Sparkles size={14} />
                  <span>Personalised Care</span>
                </div>
                <Dialog.Title className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                  Let’s Talk About Your Smile
                </Dialog.Title>
                <p
                  id="consultation-description"
                  className="mt-2.5 text-sm text-muted-foreground sm:text-base"
                >
                  Tell us what you’d like help with and we’ll help you take the next step towards a
                  calm, confident consultation.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4 text-left">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    required
                    placeholder="e.g. Ananya Sharma"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    {...register("name", { required: true })}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    inputMode="tel"
                    placeholder="e.g. +91 98765 43210"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    {...register("phone", { required: true })}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="treatment"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      Interested In
                    </label>
                    <select
                      id="treatment"
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      {...register("treatment")}
                    >
                      <option value="General Consultation">General Consultation</option>
                      {treatmentsData.map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                      <option value="Other Smile Concern">Other Smile Concern</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      {...register("preferredTime")}
                    >
                      <option value="Morning (11:00 AM – 2:00 PM)">Morning (11 AM – 2 PM)</option>
                      <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2 PM – 5 PM)</option>
                      <option value="Evening (5:00 PM – 8:00 PM)">Evening (5 PM – 8 PM)</option>
                      <option value="Flexible / First Available">Flexible / First Available</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Optional Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your dental goals, previous experiences, or questions..."
                    className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    {...register("message")}
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-[#25D366] text-white shadow-soft transition-all hover:bg-[#20ba59] hover:shadow-lg sm:text-base"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Continue on WhatsApp
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Opens WhatsApp with your enquiry prefilled. No spam, ever.
                  </p>
                </div>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
