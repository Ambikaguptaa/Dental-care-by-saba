import { useState, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
  Instagram,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicConfig } from "@/config/clinic";
import { instagramReelsData, type InstagramReelItem } from "@/data/instagram";

export function InstagramReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedReel, setSelectedReel] = useState<InstagramReelItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleOpenReel = (reel: InstagramReelItem) => {
    setSelectedReel(reel);
    setIsPlaying(true);
  };

  const handleCloseReel = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedReel(null);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <section className="overflow-hidden bg-blush/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <Instagram size={15} />
              <span>@dentalcareby_drsaba</span>
            </div>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-6xl">
              Inside <em>Dental by Saba</em>
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
              Real moments, smile journeys, and a closer look at our gentle approach to dental care
              in Mumbai.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous reels"
              className="grid size-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-muted active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next reels"
              className="grid size-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-muted active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Editorial Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 pt-2 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: "none" }}
        >
          {instagramReelsData.map((reel) => (
            <article
              key={reel.id}
              onClick={() => handleOpenReel(reel)}
              className="group relative aspect-[9/16] w-[270px] shrink-0 cursor-pointer snap-start overflow-hidden rounded-[2.2rem] border border-border/80 bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:w-[300px]"
            >
              {/* Poster Image */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Bar with Category & Instagram Icon */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-white">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md">
                  {reel.category}
                </span>
                <span className="grid size-8 place-items-center rounded-full bg-white/20 backdrop-blur-md transition-transform group-hover:rotate-12">
                  <Instagram size={15} />
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-14 place-items-center rounded-full border border-white/40 bg-white/30 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary">
                  <Play size={22} className="ml-0.5 fill-current" />
                </div>
              </div>

              {/* Bottom Information */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <Heart size={13} className="fill-white/80" />
                  <span>{reel.likes} likes</span>
                  <span className="mx-1">·</span>
                  <span>{reel.duration}</span>
                </div>
                <h3 className="mt-1.5 font-display text-2xl font-semibold leading-tight text-white">
                  {reel.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/80">
                  {reel.caption}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-wider text-accent transition-transform group-hover:translate-x-1">
                  <span>View Reel</span>
                  <ChevronRight size={13} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Primary Feature 4 — Social CTA Banner */}
        <div className="mt-16 rounded-[2.5rem] border border-border/80 bg-card p-8 text-center shadow-soft sm:p-12">
          <p className="eyebrow">A continuous smile journey</p>
          <h3 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
            See more of Dental by Saba
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Follow Dr. Saba on Instagram for patient smile stories, dental wellness advice, and
            quiet clinic moments.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-soft transition-all hover:opacity-90 hover:shadow-lg"
            >
              <a href={clinicConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="mr-2" />
                Visit Instagram {clinicConfig.instagramHandle}
                <ExternalLink size={14} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal / Lightbox */}
      <Dialog.Root open={Boolean(selectedReel)} onOpenChange={(open) => !open && handleCloseReel()}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-md transition-all duration-300" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-50 flex h-[90vh] max-h-[820px] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[2.5rem] border border-white/20 bg-ink text-ink-foreground shadow-2xl focus:outline-none"
            aria-describedby="reel-description"
          >
            {/* Close Button */}
            <Dialog.Close
              onClick={handleCloseReel}
              className="absolute right-4 top-4 z-30 grid size-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/80"
              aria-label="Close reel viewer"
            >
              <X size={20} />
            </Dialog.Close>

            {selectedReel && (
              <>
                {/* Media Container (9:16) */}
                <div className="relative flex-1 overflow-hidden bg-black">
                  {selectedReel.videoUrl ? (
                    <video
                      ref={videoRef}
                      src={selectedReel.videoUrl}
                      poster={selectedReel.thumbnail}
                      autoPlay
                      playsInline
                      loop
                      muted={isMuted}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <img
                        src={selectedReel.thumbnail}
                        alt={selectedReel.title}
                        className="h-full w-full object-cover"
                      />
                      {/* Atmospheric Simulated Player Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                      <div className="absolute inset-0 grid place-items-center">
                        <button
                          onClick={togglePlay}
                          aria-label={isPlaying ? "Pause reel" : "Play reel"}
                          className="grid size-16 place-items-center rounded-full bg-white/30 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
                        >
                          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Top Bar inside Video */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md">
                      {selectedReel.category}
                    </span>
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      className="grid size-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>
                </div>

                {/* Bottom Card Info & Direct Instagram Action */}
                <div className="bg-ink p-5 text-ink-foreground">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="font-display text-2xl font-bold leading-tight text-white">
                      {selectedReel.title}
                    </Dialog.Title>
                    <span className="flex items-center gap-1 text-xs text-ink-muted">
                      <Heart size={14} className="text-red-400 fill-red-400" />
                      {selectedReel.likes}
                    </span>
                  </div>

                  <p id="reel-description" className="mt-2 text-xs leading-relaxed text-ink-muted">
                    {selectedReel.caption}
                  </p>

                  <div className="mt-4">
                    <Button
                      asChild
                      className="w-full rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-xs font-semibold text-white shadow-soft transition-all hover:opacity-90"
                    >
                      <a href={selectedReel.instagramUrl} target="_blank" rel="noopener noreferrer">
                        <Instagram size={15} className="mr-2" />
                        Watch on Instagram
                        <ExternalLink size={12} className="ml-1.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
