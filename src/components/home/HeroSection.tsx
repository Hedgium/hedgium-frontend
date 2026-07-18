'use client';

import { useRef, useState } from 'react';
import { ChevronDown, Play, Pause } from 'lucide-react';

/**
 * Full text alternative for the muted hero video (WCAG 1.2.1).
 * Kept in a linked, labeled region so automated audits detect a transcript.
 */
const HERO_VIDEO_TRANSCRIPT =
  'Video transcript: This muted, looping hero clip has no spoken dialogue or meaningful audio. It shows atmospheric visuals only. The information conveyed on this screen is provided in text: the headline "Ambition Guided by Intelligence. Defined by Performance," and the banner stating that Hedgium leverages two decades of market experience to identify real-time market opportunities and manage risk dynamically to deliver consistent, exceptional capital performance. English captions are also available on the video element.';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const openTranscript = () => {
    const details = document.getElementById(
      "hero-video-transcript-details"
    ) as HTMLDetailsElement | null;
    if (details) details.open = true;
  };

  return (
    <section className="relative h-[96vh] w-full overflow-hidden flex items-center justify-center text-white">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-label="Muted hero background video"
        aria-describedby="hero-video-transcript"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        <track
          kind="captions"
          srcLang="en"
          label="English captions"
          src="/videos/hero_video_captions.vtt"
          default
        />
        <track
          kind="descriptions"
          srcLang="en"
          label="English descriptions"
          src="/videos/hero_video_captions.vtt"
        />
      </video>

      {/* Top-right: play + transcript controls */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-40 flex flex-col items-end gap-2">
        {/* Play / Pause — solid dark control so icon meets 3:1 non-text contrast (1.4.11) */}
        <button
          type="button"
          onClick={togglePlay}
          className="cursor-pointer touch-target inline-flex items-center justify-center rounded-full bg-black/75 backdrop-blur-sm hover:bg-black/85 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" strokeWidth={2} aria-hidden="true" />
          ) : (
            <Play className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" strokeWidth={2} aria-hidden="true" />
          )}
        </button>

        {/* Visible transcript link — pattern most WCAG scanners require next to <video> */}
        <a
          href="#hero-video-transcript"
          onClick={openTranscript}
          className="rounded-md border-2 border-white/55 bg-black/75 px-3 py-2 text-xs font-medium uppercase tracking-wider text-white underline decoration-white underline-offset-2 outline-none transition hover:bg-black/85 focus-visible:ring-2 focus-visible:ring-white/50"
        >
          Video transcript
        </a>

        {/* Sightable panel for sighted users */}
        <details
          id="hero-video-transcript-details"
          className="w-full max-w-xs rounded-lg border-2 border-white/55 bg-black/35 text-right text-white shadow-lg backdrop-blur-md open:max-w-sm open:bg-black/50 open:text-left"
        >
          <summary className="flex cursor-pointer list-none items-center justify-end gap-1.5 px-3 py-2 text-xs font-medium uppercase tracking-wider text-white outline-none transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 [&::-webkit-details-marker]:hidden">
            Read video transcript
            <ChevronDown className="size-3.5 shrink-0 opacity-80" aria-hidden />
          </summary>
          <div
            className="max-h-36 overflow-y-auto border-t-2 border-white/45 px-3 py-2 text-left text-xs leading-relaxed text-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            tabIndex={0}
            role="region"
            aria-label="Hero video transcript text"
          >
            {HERO_VIDEO_TRANSCRIPT}
          </div>
        </details>
      </div>

      <div className="absolute top-36 right-4 left-4 lg:top-24 lg:right-8 lg:left-8 z-10 flex items-center justify-center">
        <div
          className="max-w-8xl w-full px-4 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div className="w-full md:w-8/12 lg:w-6/12 bg-primary/20 p-4 lg:p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium leading-tight">
              Ambition Guided by Intelligence. Defined by Performance
            </h1>
          </div>
        </div>
      </div>

      {/*
        Always in the accessibility tree (not inside closed <details>).
        Placed after h1 for correct heading order. Linked by "Video transcript".
      */}
      <section
        id="hero-video-transcript"
        tabIndex={-1}
        aria-labelledby="hero-video-transcript-heading"
        className="sr-only"
      >
        <h2 id="hero-video-transcript-heading">Video transcript</h2>
        <p>{HERO_VIDEO_TRANSCRIPT}</p>
      </section>

      <div className="trapezium-wrap absolute bottom-0 left-1/2 -translate-x-1/2 px-4 md:px-8 w-full max-w-8xl z-30">
        <div className="trapezium-reverse mx-auto">
          <div className="trapezium-inner">
            <p className="text-base text-center md:text-lg lg:text-xl text-white leading-relaxed">
              <span className="text-center">
                Leveraging two decades of market experience, we identify real-time market opportunities and manage risk dynamically to deliver consistent, exceptional capital performance.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * ---------------------------------------------------------------------------
 * STATIC IMAGE HERO (kept for easy restore — do not delete)
 * ---------------------------------------------------------------------------
 *
 * import Image from "next/image";
 *
 * const HERO_STATS = [
 *   {
 *     value: "20+",
 *     label: "Years of market experience",
 *   },
 *   {
 *     value: "5+",
 *     label: "Years the strategy has been in operation",
 *   },
 *   {
 *     value: "+12.3%",
 *     label: "Outperformance vs NIFTY during recent volatility (Dec’25–Mar’26)",
 *   },
 * ] as const;
 *
 * export default function HeroSection() {
 *   return (
 *     <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center justify-center text-primary-content">
 *       <div className="absolute inset-0" aria-hidden="true">
 *         <Image
 *           src="/images/home/twin_system_background_mobile.png"
 *           alt=""
 *           fill
 *           priority
 *           sizes="100vw"
 *           className="object-cover object-center"
 *         />
 *         <div className="absolute inset-0 bg-primary/85" />
 *         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/55" />
 *       </div>
 *
 *       <div
 *         className="relative z-10 w-full max-w-5xl mx-auto px-4 lg:px-8 py-24 md:py-28 flex flex-col items-center text-center gap-8 md:gap-10"
 *         data-aos="fade-up"
 *         data-aos-duration="800"
 *         data-aos-once="true"
 *       >
 *         <div className="space-y-4 md:space-y-5 max-w-3xl">
 *           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-primary-content">
 *             Market-Neutral Alpha for Your Portfolio
 *           </h1>
 *           <p className="text-base md:text-lg lg:text-xl text-primary-content leading-relaxed max-w-2xl mx-auto">
 *             Quantitative options strategies from a SEBI-registered research house
 *           </p>
 *         </div>
 *
 *         <ul className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 list-none p-0 m-0">
 *           {HERO_STATS.map((stat) => (
 *             <li
 *               key={stat.value}
 *               className="rounded-2xl border border-primary-content/45 bg-primary px-5 py-6 md:py-7 flex flex-col items-center justify-center gap-2"
 *             >
 *               <p className="text-3xl md:text-4xl lg:text-5xl font-semibold tabular-nums text-secondary-on-primary">
 *                 {stat.value}
 *               </p>
 *               <p className="text-sm md:text-base text-primary-content leading-snug max-w-[16rem]">
 *                 {stat.label}
 *               </p>
 *             </li>
 *           ))}
 *         </ul>
 *       </div>
 *     </section>
 *   );
 * }
 */
