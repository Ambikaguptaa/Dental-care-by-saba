import { useState, useRef, useCallback, type PointerEvent, type KeyboardEvent } from "react";
import { ChevronsLeftRight, Sparkles } from "lucide-react";
import beforeSmile from "@/assets/before-smile.jpg";
import afterSmile from "@/assets/after-smile.jpg";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  treatmentName?: string;
}

export function BeforeAfterSlider({
  beforeImage = beforeSmile,
  afterImage = afterSmile,
  title = "Natural Smile Harmony",
  treatmentName = "Alignment & Aesthetic Contouring Demonstration",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setIsDragging(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Before and after transformation slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-[2.5rem] border border-border/80 bg-card shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/40 md:aspect-[16/10]"
      >
        {/* "After" Image (Underneath, full view) */}
        <img
          src={afterImage}
          alt="After aesthetic alignment outcome"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />

        {/* "After" Pill Badge (Right) */}
        <div className="pointer-events-none absolute right-5 top-5 z-20 rounded-full border border-background/80 bg-background/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-md">
          After
        </div>

        {/* "Before" Image (Clipped overlay) */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before aesthetic alignment starting point"
            className="absolute inset-0 h-full w-full max-w-none object-cover object-center"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
            }}
            loading="lazy"
          />
          {/* "Before" Pill Badge (Left) */}
          <div className="pointer-events-none absolute left-5 top-5 z-20 rounded-full border border-background/80 bg-background/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-md">
            Before
          </div>
        </div>

        {/* Divider Line & Circular Drag Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical line */}
          <div className="absolute inset-y-0 -left-px w-0.5 bg-background shadow-md" />

          {/* Centered Knob */}
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="grid size-12 place-items-center rounded-full border-2 border-background bg-card text-foreground shadow-xl transition-transform group-hover:scale-110 active:scale-95">
              <ChevronsLeftRight size={20} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Bottom Treatment Label */}
        <div className="pointer-events-none absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full border border-background/70 bg-background/85 px-4 py-2 text-xs font-medium text-foreground backdrop-blur-md sm:bottom-6 sm:left-6">
          <Sparkles size={14} className="text-primary" />
          <span>{treatmentName}</span>
        </div>
      </div>

      {/* Supporting details & Clinical Transparency Note */}
      <div className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
        <p className="font-serif text-sm font-medium italic text-foreground">{title}</p>
        <p className="text-center sm:text-right">
          Visual demonstration. Real clinic transformations require written patient consent.
        </p>
      </div>
    </div>
  );
}
