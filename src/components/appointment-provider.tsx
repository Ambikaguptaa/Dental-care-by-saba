import { createContext, useContext, useState, type ReactNode } from "react";
import { ConsultationModal } from "./consultation-modal";

interface AppointmentContextType {
  openAppointment: (initialTreatment?: string) => void;
  closeAppointment: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | null>(null);

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointment must be used inside AppointmentProvider");
  }
  return context;
}

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [treatment, setTreatment] = useState<string | undefined>(undefined);

  const openAppointment = (initialTreatment?: string) => {
    setTreatment(initialTreatment);
    setOpen(true);
  };

  const closeAppointment = () => {
    setOpen(false);
  };

  return (
    <AppointmentContext.Provider value={{ openAppointment, closeAppointment }}>
      {children}
      <ConsultationModal open={open} onOpenChange={setOpen} initialTreatment={treatment} />
    </AppointmentContext.Provider>
  );
}
